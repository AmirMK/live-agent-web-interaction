/**
 * search.js - Dynamic Search & Filter Engine with Multi-Select Highlight Pills, Multi-Select Dropdown Menus & URL Sync for PhoneVerse
 */

// In-Memory Multi-Selection Set for Product Cards
const selectedProductIds = new Set();

let currentFilters = {
  brands: [],
  systems: [],
  networkTypes: [],
  is5GOnly: false,
  storages: [],
  colors: [],
  resolutions: [],
  detailedResolutions: [],
  cameras: [],
  ratings: [],
  screenCategories: [],
  minPrice: null,
  maxPrice: null,
  minRating: null,
  keyword: '',
  sortBy: 'relevance'
};

document.addEventListener('DOMContentLoaded', async () => {
  console.log('[Search] Initializing Dynamic Phone Catalog...');

  // 1. Load data
  await loadCatalog();

  // 2. Build Filter Options DOM
  buildSidebarFiltersDOM();

  // 3. Initialize custom multi-select dropdown toggles and clear handlers
  setupCustomMultiSelectDropdowns();

  // 4. Read initial URL query parameters and sync inputs
  syncStateFromURL();

  // 5. Attach Event Listeners to all filter elements
  attachFilterListeners();

  // 6. Setup Card Clear Selection Button
  const btnClearSelection = document.getElementById('btn-clear-selection');
  if (btnClearSelection) {
    btnClearSelection.addEventListener('click', () => {
      selectedProductIds.clear();
      document.querySelectorAll('.phone-card.selected').forEach(card => {
        card.classList.remove('selected');
        card.removeAttribute('aria-selected');
      });
      updateSelectedSummary();
    });
  }

  // 7. Update initial trigger labels
  updateMultiSelectTriggerLabels();

  // 8. Execute initial search
  executeSearchAndRender(false);

  // 9. Support Browser Back/Forward navigation
  window.addEventListener('popstate', () => {
    syncStateFromURL();
    updateMultiSelectTriggerLabels();
    executeSearchAndRender(false);
  });
});

/**
 * Update Selected Products Summary Badge in Header
 */
function updateSelectedSummary() {
  const box = document.getElementById('selected-summary-box');
  const badge = document.getElementById('selected-count-badge');
  if (!box || !badge) return;

  if (selectedProductIds.size > 0) {
    box.style.display = 'inline-flex';
    badge.textContent = `${selectedProductIds.size} Selected`;
  } else {
    box.style.display = 'none';
  }
}

/**
 * Dynamically build Sidebar Filter controls from unique dataset values
 */
function buildSidebarFiltersDOM() {
  // 1. Brands (Pills)
  const brandContainer = document.getElementById('search-brand-checkboxes');
  if (brandContainer) {
    const brands = Array.from(filterOptions.brands).sort((a, b) => a.localeCompare(b));
    brandContainer.innerHTML = brands.map(b => `
      <label class="filter-pill-option" title="Filter by ${b}">
        <input type="checkbox" class="filter-input-brand" value="${b}">
        <span>${b}</span>
        <span class="filter-pill-check">✓</span>
      </label>
    `).join('');
  }

  // 2. Operating System (iOS, Android - Pills)
  const systemContainer = document.getElementById('search-system-pills');
  if (systemContainer) {
    const systems = ['iOS', 'Android'];
    systemContainer.innerHTML = systems.map(s => `
      <label class="filter-pill-option" title="Filter by ${s}">
        <input type="checkbox" class="filter-input-system" value="${s}">
        <span>${s === 'iOS' ? '🍎 iOS (Apple)' : '🤖 Android'}</span>
        <span class="filter-pill-check">✓</span>
      </label>
    `).join('');
  }

  // 3. Network Types (5G, 4G, 3G - Pills)
  const netContainer = document.getElementById('search-network-checkboxes');
  if (netContainer) {
    const nets = Array.from(filterOptions.networkTypes).sort();
    netContainer.innerHTML = nets.map(n => `
      <label class="filter-pill-option" title="Filter by ${n}">
        <input type="checkbox" class="filter-input-net" value="${n}">
        <span>${n === '5G' ? '⚡ 5G' : n}</span>
        <span class="filter-pill-check">✓</span>
      </label>
    `).join('');
  }

  // 4. Storage (Multi-Select Dropdown Menu)
  const storageContainer = document.getElementById('search-storage-checkboxes');
  if (storageContainer) {
    const storages = Array.from(filterOptions.storages).sort((a, b) => {
      const numA = parseInt(a, 10) || 0;
      const numB = parseInt(b, 10) || 0;
      return numA - numB;
    });
    storageContainer.innerHTML = storages.map(s => `
      <label class="multiselect-item" title="${s} Internal Storage">
        <input type="checkbox" class="filter-input-storage" value="${s}">
        <span class="multiselect-checkbox-custom">✓</span>
        <span class="multiselect-item-text">💾 ${s}</span>
      </label>
    `).join('');
  }

  // 5. Rating (Pills)
  const ratingContainer = document.getElementById('search-rating-pills');
  if (ratingContainer) {
    const ratings = [
      { label: '★ 4.5+ Stars', val: '4.5' },
      { label: '★ 4.0+ Stars', val: '4.0' },
      { label: '★ 3.5+ Stars', val: '3.5' },
      { label: '★ 3.0+ Stars', val: '3.0' }
    ];
    ratingContainer.innerHTML = ratings.map(r => `
      <label class="filter-pill-option" title="${r.label}">
        <input type="checkbox" class="filter-input-rating" value="${r.val}">
        <span>${r.label}</span>
        <span class="filter-pill-check">✓</span>
      </label>
    `).join('');
  }

  // 6. Color Swatches (Multi-Select Badges)
  const colorContainer = document.getElementById('search-color-swatches');
  if (colorContainer) {
    const colors = Array.from(filterOptions.colors).sort((a, b) => a.localeCompare(b));
    colorContainer.innerHTML = colors.map(c => {
      const hex = getColorHex(c);
      return `
        <label class="color-badge-option" title="${c}">
          <input type="checkbox" class="filter-input-color" value="${c}">
          <span class="color-dot" style="background: ${hex};"></span>
          <span>${c}</span>
        </label>
      `;
    }).join('');
  }

  // 7. Resolution Category (Pills)
  const resContainer = document.getElementById('search-resolution-checkboxes');
  if (resContainer) {
    const resolutions = Array.from(filterOptions.resolutions).filter(Boolean).sort();
    resContainer.innerHTML = resolutions.map(r => `
      <label class="filter-pill-option" title="${r} Screen Resolution">
        <input type="checkbox" class="filter-input-resolution" value="${r}">
        <span>🖥️ ${r}</span>
        <span class="filter-pill-check">✓</span>
      </label>
    `).join('');
  }

  // 8. Detailed Resolution (Multi-Select Dropdown Menu)
  const detailedContainer = document.getElementById('search-detailed-res-pills');
  if (detailedContainer) {
    const detailed = Array.from(filterOptions.detailedResolutions).filter(Boolean).sort();
    detailedContainer.innerHTML = detailed.map(d => `
      <label class="multiselect-item" title="${d}">
        <input type="checkbox" class="filter-input-detailed-res" value="${d}">
        <span class="multiselect-checkbox-custom">✓</span>
        <span class="multiselect-item-text">📐 ${d}</span>
      </label>
    `).join('');
  }

  // 9. Primary Camera (Multi-Select Dropdown Menu)
  const cameraContainer = document.getElementById('search-camera-checkboxes');
  if (cameraContainer) {
    const cameras = Array.from(filterOptions.cameras).filter(Boolean).sort((a, b) => {
      const numA = parseInt(a, 10) || 0;
      const numB = parseInt(b, 10) || 0;
      return numB - numA;
    });
    cameraContainer.innerHTML = cameras.map(cam => `
      <label class="multiselect-item" title="${cam} Camera">
        <input type="checkbox" class="filter-input-camera" value="${cam}">
        <span class="multiselect-checkbox-custom">✓</span>
        <span class="multiselect-item-text">📸 ${cam}</span>
      </label>
    `).join('');
  }

  // 10. Screen Size (Multi-Select Dropdown Menu)
  const screenContainer = document.getElementById('search-screensize-pills');
  if (screenContainer) {
    const screens = [
      { label: 'Compact (< 6.0")', val: 'compact' },
      { label: 'Standard (6.0" - 6.5")', val: 'medium' },
      { label: 'Large (> 6.5")', val: 'large' }
    ];
    screenContainer.innerHTML = screens.map(sc => `
      <label class="multiselect-item" title="${sc.label}">
        <input type="checkbox" class="filter-input-screen" value="${sc.val}">
        <span class="multiselect-checkbox-custom">✓</span>
        <span class="multiselect-item-text">📱 ${sc.label}</span>
      </label>
    `).join('');
  }

  // Set min / max price placeholders
  const minPriceEl = document.getElementById('search-min-price');
  const maxPriceEl = document.getElementById('search-max-price');
  if (minPriceEl && maxPriceEl && isFinite(filterOptions.minPrice)) {
    minPriceEl.placeholder = `$${Math.floor(filterOptions.minPrice)}`;
    maxPriceEl.placeholder = `$${Math.ceil(filterOptions.maxPrice)}`;
  }
}

/**
 * Setup Multi-Select Dropdown Menu Interactions
 */
function setupCustomMultiSelectDropdowns() {
  const dropdownDefs = [
    { id: 'multiselect-storage', triggerId: 'trigger-storage', targetName: 'storage' },
    { id: 'multiselect-detailed-res', triggerId: 'trigger-detailed-res', targetName: 'detailed-res' },
    { id: 'multiselect-camera', triggerId: 'trigger-camera', targetName: 'camera' },
    { id: 'multiselect-screensize', triggerId: 'trigger-screensize', targetName: 'screensize' }
  ];

  dropdownDefs.forEach(def => {
    const root = document.getElementById(def.id);
    const trigger = document.getElementById(def.triggerId);
    if (!root || !trigger) return;

    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = root.classList.contains('open');

      // Close any other open dropdowns
      document.querySelectorAll('.custom-multiselect.open').forEach(el => {
        if (el !== root) {
          el.classList.remove('open');
          const t = el.querySelector('.multiselect-trigger');
          if (t) t.setAttribute('aria-expanded', 'false');
        }
      });

      root.classList.toggle('open', !isOpen);
      trigger.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
    });
  });

  // Global click outside listener to close dropdowns
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.custom-multiselect')) {
      document.querySelectorAll('.custom-multiselect.open').forEach(el => {
        el.classList.remove('open');
        const t = el.querySelector('.multiselect-trigger');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Quick clear buttons inside dropdown menus
  document.querySelectorAll('.multiselect-quick-clear').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const target = btn.dataset.target;
      if (target === 'storage') {
        document.querySelectorAll('.filter-input-storage').forEach(cb => cb.checked = false);
      } else if (target === 'detailed-res') {
        document.querySelectorAll('.filter-input-detailed-res').forEach(cb => cb.checked = false);
      } else if (target === 'camera') {
        document.querySelectorAll('.filter-input-camera').forEach(cb => cb.checked = false);
      } else if (target === 'screensize') {
        document.querySelectorAll('.filter-input-screen').forEach(cb => cb.checked = false);
      }
      onFilterChanged();
    });
  });
}

/**
 * Update Trigger button labels and count badges on multi-select dropdowns
 */
function updateMultiSelectTriggerLabels() {
  // 1. Storage Trigger
  const checkedStorages = Array.from(document.querySelectorAll('.filter-input-storage:checked')).map(cb => cb.value);
  const storageTrigger = document.getElementById('trigger-storage');
  if (storageTrigger) {
    const textSpan = storageTrigger.querySelector('.multiselect-label-text');
    const badgeSpan = storageTrigger.querySelector('.multiselect-count-badge');
    if (checkedStorages.length === 0) {
      textSpan.textContent = 'Select Storage...';
      storageTrigger.classList.remove('has-selection');
      if (badgeSpan) badgeSpan.style.display = 'none';
    } else if (checkedStorages.length <= 2) {
      textSpan.textContent = `💾 ${checkedStorages.join(', ')}`;
      storageTrigger.classList.add('has-selection');
      if (badgeSpan) {
        badgeSpan.textContent = checkedStorages.length;
        badgeSpan.style.display = 'inline-flex';
      }
    } else {
      textSpan.textContent = `💾 ${checkedStorages.length} Storages Selected`;
      storageTrigger.classList.add('has-selection');
      if (badgeSpan) {
        badgeSpan.textContent = checkedStorages.length;
        badgeSpan.style.display = 'inline-flex';
      }
    }
  }

  // 2. Detailed Resolution Trigger
  const checkedDetailed = Array.from(document.querySelectorAll('.filter-input-detailed-res:checked')).map(cb => cb.value);
  const detailedTrigger = document.getElementById('trigger-detailed-res');
  if (detailedTrigger) {
    const textSpan = detailedTrigger.querySelector('.multiselect-label-text');
    const badgeSpan = detailedTrigger.querySelector('.multiselect-count-badge');
    if (checkedDetailed.length === 0) {
      textSpan.textContent = 'Select Detailed Resolution...';
      detailedTrigger.classList.remove('has-selection');
      if (badgeSpan) badgeSpan.style.display = 'none';
    } else if (checkedDetailed.length === 1) {
      textSpan.textContent = `📐 ${checkedDetailed[0]}`;
      detailedTrigger.classList.add('has-selection');
      if (badgeSpan) {
        badgeSpan.textContent = 1;
        badgeSpan.style.display = 'inline-flex';
      }
    } else {
      textSpan.textContent = `📐 ${checkedDetailed.length} Resolutions Selected`;
      detailedTrigger.classList.add('has-selection');
      if (badgeSpan) {
        badgeSpan.textContent = checkedDetailed.length;
        badgeSpan.style.display = 'inline-flex';
      }
    }
  }

  // 3. Camera Trigger
  const checkedCameras = Array.from(document.querySelectorAll('.filter-input-camera:checked')).map(cb => cb.value);
  const cameraTrigger = document.getElementById('trigger-camera');
  if (cameraTrigger) {
    const textSpan = cameraTrigger.querySelector('.multiselect-label-text');
    const badgeSpan = cameraTrigger.querySelector('.multiselect-count-badge');
    if (checkedCameras.length === 0) {
      textSpan.textContent = 'Select Camera MP...';
      cameraTrigger.classList.remove('has-selection');
      if (badgeSpan) badgeSpan.style.display = 'none';
    } else if (checkedCameras.length <= 2) {
      textSpan.textContent = `📸 ${checkedCameras.join(', ')}`;
      cameraTrigger.classList.add('has-selection');
      if (badgeSpan) {
        badgeSpan.textContent = checkedCameras.length;
        badgeSpan.style.display = 'inline-flex';
      }
    } else {
      textSpan.textContent = `📸 ${checkedCameras.length} Cameras Selected`;
      cameraTrigger.classList.add('has-selection');
      if (badgeSpan) {
        badgeSpan.textContent = checkedCameras.length;
        badgeSpan.style.display = 'inline-flex';
      }
    }
  }

  // 4. Screen Size Trigger
  const checkedScreens = Array.from(document.querySelectorAll('.filter-input-screen:checked')).map(cb => cb.value);
  const screenLabelsMap = { 'compact': '< 6.0"', 'medium': '6.0"-6.5"', 'large': '> 6.5"' };
  const screenTrigger = document.getElementById('trigger-screensize');
  if (screenTrigger) {
    const textSpan = screenTrigger.querySelector('.multiselect-label-text');
    const badgeSpan = screenTrigger.querySelector('.multiselect-count-badge');
    if (checkedScreens.length === 0) {
      textSpan.textContent = 'Select Screen Size...';
      screenTrigger.classList.remove('has-selection');
      if (badgeSpan) badgeSpan.style.display = 'none';
    } else if (checkedScreens.length === 1) {
      textSpan.textContent = `📱 ${screenLabelsMap[checkedScreens[0]] || checkedScreens[0]}`;
      screenTrigger.classList.add('has-selection');
      if (badgeSpan) {
        badgeSpan.textContent = 1;
        badgeSpan.style.display = 'inline-flex';
      }
    } else {
      textSpan.textContent = `📱 ${checkedScreens.length} Sizes Selected`;
      screenTrigger.classList.add('has-selection');
      if (badgeSpan) {
        badgeSpan.textContent = checkedScreens.length;
        badgeSpan.style.display = 'inline-flex';
      }
    }
  }
}

/**
 * Synchronize state & input controls from URL Query Parameters
 */
function syncStateFromURL() {
  const params = new URLSearchParams(window.location.search);

  // Keyword
  const keyword = params.get('keyword') || '';
  const keywordInput = document.getElementById('search-keyword-input');
  if (keywordInput) keywordInput.value = keyword;
  currentFilters.keyword = keyword;

  // Brands (multi-select)
  const brandParam = params.get('brand') || '';
  const brands = brandParam ? brandParam.split(',').map(b => b.trim()).filter(Boolean) : [];
  currentFilters.brands = brands;
  document.querySelectorAll('.filter-input-brand').forEach(cb => {
    cb.checked = brands.some(b => b.toLowerCase() === cb.value.toLowerCase());
  });

  // Operating System (multi-select)
  const systemParam = params.get('system') || '';
  const systems = systemParam ? systemParam.split(',').map(s => s.trim()).filter(Boolean) : [];
  currentFilters.systems = systems;
  document.querySelectorAll('.filter-input-system').forEach(cb => {
    cb.checked = systems.some(s => s.toLowerCase() === cb.value.toLowerCase());
  });

  // Networks & 5G
  const is5G = params.get('is5G') === 'true';
  const netParam = params.get('network') || '';
  const networks = netParam ? netParam.split(',').map(n => n.trim()).filter(Boolean) : (is5G ? ['5G'] : []);
  currentFilters.networkTypes = networks;
  document.querySelectorAll('.filter-input-net').forEach(cb => {
    cb.checked = networks.some(n => n.toLowerCase() === cb.value.toLowerCase());
  });

  // Price Min / Max
  const minPrice = params.get('minPrice') ? parseFloat(params.get('minPrice')) : null;
  const maxPrice = params.get('maxPrice') ? parseFloat(params.get('maxPrice')) : null;
  currentFilters.minPrice = minPrice;
  currentFilters.maxPrice = maxPrice;
  const minPriceEl = document.getElementById('search-min-price');
  const maxPriceEl = document.getElementById('search-max-price');
  if (minPriceEl) minPriceEl.value = minPrice !== null ? minPrice : '';
  if (maxPriceEl) maxPriceEl.value = maxPrice !== null ? maxPrice : '';

  // Rating (multi-select)
  const ratingParam = params.get('minRating') || '';
  const ratings = ratingParam ? ratingParam.split(',').map(r => r.trim()).filter(Boolean) : [];
  currentFilters.ratings = ratings;
  document.querySelectorAll('.filter-input-rating').forEach(cb => {
    cb.checked = ratings.includes(cb.value);
  });

  // Storage (multi-select dropdown)
  const storageParam = params.get('storage') || '';
  const storages = storageParam ? storageParam.split(',').map(s => s.trim()).filter(Boolean) : [];
  currentFilters.storages = storages;
  document.querySelectorAll('.filter-input-storage').forEach(cb => {
    cb.checked = storages.some(s => {
      const cleanS = s.replace(/\s+/g, '').toUpperCase();
      const cleanCb = cb.value.replace(/\s+/g, '').toUpperCase();
      return cleanS === cleanCb || (cleanS.includes('+') && cleanCb.includes(cleanS.replace('+', '')));
    });
  });

  // Color (multi-select)
  const colorParam = params.get('color') || '';
  const colors = colorParam ? colorParam.split(',').map(c => c.trim()).filter(Boolean) : [];
  currentFilters.colors = colors;
  document.querySelectorAll('.filter-input-color').forEach(cb => {
    cb.checked = colors.some(c => c.toLowerCase() === cb.value.toLowerCase());
  });

  // Resolution Category (multi-select)
  const resParam = params.get('resolution') || '';
  const resolutions = resParam ? resParam.split(',').map(r => r.trim()).filter(Boolean) : [];
  currentFilters.resolutions = resolutions;
  document.querySelectorAll('.filter-input-resolution').forEach(cb => {
    cb.checked = resolutions.some(r => r.toLowerCase() === cb.value.toLowerCase());
  });

  // Detailed Resolution (multi-select dropdown)
  const detailedParam = params.get('detailed_resolution') || '';
  const detailedResolutions = detailedParam ? detailedParam.split(',').map(d => d.trim()).filter(Boolean) : [];
  currentFilters.detailedResolutions = detailedResolutions;
  document.querySelectorAll('.filter-input-detailed-res').forEach(cb => {
    cb.checked = detailedResolutions.some(d => d.toLowerCase() === cb.value.toLowerCase());
  });

  // Camera (multi-select dropdown)
  const camParam = params.get('camera') || '';
  const cameras = camParam ? camParam.split(',').map(c => c.trim()).filter(Boolean) : [];
  currentFilters.cameras = cameras;
  document.querySelectorAll('.filter-input-camera').forEach(cb => {
    cb.checked = cameras.some(c => c.toLowerCase() === cb.value.toLowerCase());
  });

  // Screen Size (multi-select dropdown)
  const screenParam = params.get('screen') || '';
  const screenCategories = screenParam ? screenParam.split(',').map(sc => sc.trim()).filter(Boolean) : [];
  currentFilters.screenCategories = screenCategories;
  document.querySelectorAll('.filter-input-screen').forEach(cb => {
    cb.checked = screenCategories.includes(cb.value);
  });

  // Sort
  const sortBy = params.get('sort') || 'relevance';
  currentFilters.sortBy = sortBy;
  const sortSelect = document.getElementById('sort-by-select');
  if (sortSelect) sortSelect.value = sortBy;

  updateMultiSelectTriggerLabels();
}

/**
 * Attach Event Listeners to Trigger Dynamic Filtering
 */
function attachFilterListeners() {
  const form = document.getElementById('search-filter-form');
  if (!form) return;

  // Form input and change events
  form.addEventListener('change', () => onFilterChanged());
  
  // Keyword input with debouncing
  const keywordInput = document.getElementById('search-keyword-input');
  if (keywordInput) {
    let debounceTimer;
    keywordInput.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => onFilterChanged(), 200);
    });
  }

  // Price inputs with debouncing
  ['search-min-price', 'search-max-price'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      let debounceTimer;
      el.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => onFilterChanged(), 300);
      });
    }
  });

  // Sort dropdown
  const sortSelect = document.getElementById('sort-by-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      currentFilters.sortBy = sortSelect.value;
      executeSearchAndRender(true);
    });
  }

  // Reset Button
  const resetBtn = document.getElementById('btn-search-reset');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetAllFilters);
  }
}

/**
 * Callback when any filter control changes
 */
function onFilterChanged() {
  // 1. Gather all values from DOM
  const keyword = document.getElementById('search-keyword-input').value.trim();
  const checkedBrands = Array.from(document.querySelectorAll('.filter-input-brand:checked')).map(cb => cb.value);
  const checkedSystems = Array.from(document.querySelectorAll('.filter-input-system:checked')).map(cb => cb.value);
  const checkedNets = Array.from(document.querySelectorAll('.filter-input-net:checked')).map(cb => cb.value);
  
  const minPriceVal = document.getElementById('search-min-price').value.trim();
  const maxPriceVal = document.getElementById('search-max-price').value.trim();
  const minPrice = minPriceVal ? parseFloat(minPriceVal) : null;
  const maxPrice = maxPriceVal ? parseFloat(maxPriceVal) : null;

  const checkedRatings = Array.from(document.querySelectorAll('.filter-input-rating:checked')).map(cb => cb.value);
  const checkedStorages = Array.from(document.querySelectorAll('.filter-input-storage:checked')).map(cb => cb.value);
  const checkedColors = Array.from(document.querySelectorAll('.filter-input-color:checked')).map(cb => cb.value);
  const checkedResolutions = Array.from(document.querySelectorAll('.filter-input-resolution:checked')).map(cb => cb.value);
  const checkedDetailedRes = Array.from(document.querySelectorAll('.filter-input-detailed-res:checked')).map(cb => cb.value);
  const checkedCameras = Array.from(document.querySelectorAll('.filter-input-camera:checked')).map(cb => cb.value);
  const checkedScreens = Array.from(document.querySelectorAll('.filter-input-screen:checked')).map(cb => cb.value);

  const sortBy = document.getElementById('sort-by-select').value;

  // Determine lowest rating among checked ratings
  let minRating = null;
  if (checkedRatings.length > 0) {
    minRating = Math.min(...checkedRatings.map(r => parseFloat(r)));
  }

  // 2. Update state
  currentFilters = {
    keyword,
    brands: checkedBrands,
    systems: checkedSystems,
    networkTypes: checkedNets,
    is5GOnly: false,
    minPrice,
    maxPrice,
    ratings: checkedRatings,
    minRating,
    storages: checkedStorages,
    colors: checkedColors,
    resolutions: checkedResolutions,
    detailedResolutions: checkedDetailedRes,
    cameras: checkedCameras,
    screenCategories: checkedScreens,
    sortBy
  };

  // 3. Update multi-select trigger labels
  updateMultiSelectTriggerLabels();

  // 4. Execute Search, Render 3-Column Grid, and Update URL Dynamically
  executeSearchAndRender(true);
}

/**
 * Custom Filter Check with Multi-Select Matching Support
 */
function searchCatalogCustom(filters) {
  const keyword = (filters.keyword || '').toLowerCase().trim();
  const catalog = (typeof allProducts !== 'undefined' && allProducts.length > 0) ? allProducts : (typeof allPhones !== 'undefined' ? allPhones : []);

  let matches = catalog.filter(phone => {
    // 1. Keyword search (Name, Brand, Processor, Description)
    if (keyword) {
      const targetStr = `${phone.brand} ${phone.mobile_name} ${phone.processor_type} ${phone.full_description} ${phone.color}`.toLowerCase();
      if (!targetStr.includes(keyword)) return false;
    }

    // 2. Multi-Select Brand Match
    if (filters.brands && filters.brands.length > 0) {
      const matchBrand = filters.brands.some(b => b.toLowerCase() === phone.brand.toLowerCase());
      if (!matchBrand) return false;
    }

    // 3. Multi-Select Operating System Match
    if (filters.systems && filters.systems.length > 0) {
      const matchSys = filters.systems.some(s => s.toLowerCase() === (phone.system || '').toLowerCase());
      if (!matchSys) return false;
    }

    // 4. Multi-Select Network Type Match (5G, 4G, 3G)
    if (filters.networkTypes && filters.networkTypes.length > 0) {
      const matchNet = filters.networkTypes.some(n => (phone.network_type || '').toLowerCase().includes(n.toLowerCase()));
      if (!matchNet) return false;
    }

    // 5. Price Min / Max Bounds
    if (filters.minPrice !== null && !isNaN(filters.minPrice)) {
      if (phone.price < filters.minPrice) return false;
    }
    if (filters.maxPrice !== null && !isNaN(filters.maxPrice)) {
      if (phone.price > filters.maxPrice) return false;
    }

    // 6. Rating Match
    if (filters.minRating !== null && !isNaN(filters.minRating)) {
      if (phone.rating < filters.minRating) return false;
    }

    // 7. Multi-Select Storage Match
    if (filters.storages && filters.storages.length > 0) {
      const matchStorage = filters.storages.some(s => {
        const cleanS = s.replace(/\s+/g, '').toUpperCase();
        const cleanPhone = (phone.storage || '').replace(/\s+/g, '').toUpperCase();
        return cleanPhone === cleanS || cleanPhone.includes(cleanS.replace('+', ''));
      });
      if (!matchStorage) return false;
    }

    // 8. Multi-Select Color Match
    if (filters.colors && filters.colors.length > 0) {
      const matchColor = filters.colors.some(c => c.toLowerCase() === (phone.color || '').toLowerCase());
      if (!matchColor) return false;
    }

    // 9. Multi-Select Resolution Category Match
    if (filters.resolutions && filters.resolutions.length > 0) {
      const matchRes = filters.resolutions.some(r => r.toLowerCase() === (phone.resolution || '').toLowerCase());
      if (!matchRes) return false;
    }

    // 10. Multi-Select Detailed Resolution Match
    if (filters.detailedResolutions && filters.detailedResolutions.length > 0) {
      const matchDetailed = filters.detailedResolutions.some(d => d.toLowerCase() === (phone.detailed_resolution || '').toLowerCase());
      if (!matchDetailed) return false;
    }

    // 11. Multi-Select Primary Camera Match
    if (filters.cameras && filters.cameras.length > 0) {
      const matchCam = filters.cameras.some(cam => {
        const cleanCam = cam.replace(/\s+/g, '').toLowerCase();
        const cleanPhoneCam = (phone.primary_camera || '').replace(/\s+/g, '').toLowerCase();
        return cleanPhoneCam.includes(cleanCam);
      });
      if (!matchCam) return false;
    }

    // 12. Multi-Select Screen Size Categories
    if (filters.screenCategories && filters.screenCategories.length > 0) {
      const size = phone.display_size_inch || 0;
      const matchScreen = filters.screenCategories.some(cat => {
        if (cat === 'compact') return size < 6.0;
        if (cat === 'medium') return size >= 6.0 && size <= 6.5;
        if (cat === 'large') return size > 6.5;
        return true;
      });
      if (!matchScreen) return false;
    }

    return true;
  });

  // Sort Results
  const sortBy = filters.sortBy || 'relevance';
  if (sortBy === 'rating-desc') {
    matches.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'price-asc') {
    matches.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    matches.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name-asc') {
    matches.sort((a, b) => a.displayName.localeCompare(b.displayName));
  } else {
    // Relevance / Default: Trending IDs at top, then higher rating
    matches.sort((a, b) => {
      const isTrendA = (a.id === '10' || a.id === '12' || a.id === '34') ? 1 : 0;
      const isTrendB = (b.id === '10' || b.id === '12' || b.id === '34') ? 1 : 0;
      if (isTrendA !== isTrendB) return isTrendB - isTrendA;
      return b.rating - a.rating;
    });
  }

  return { exactMatches: matches, totalExact: matches.length };
}

/**
 * Perform Search and Update UI & URL
 */
function executeSearchAndRender(updateUrl = true) {
  const { exactMatches, totalExact } = searchCatalogCustom(currentFilters);

  // Update Count Badge
  const countEl = document.getElementById('results-count');
  if (countEl) countEl.textContent = totalExact;

  // Render 3-Column Grid
  render3ColumnGrid(exactMatches);

  // Render Active Chips
  renderActiveChips();

  // Update Selected Summary Badge
  updateSelectedSummary();

  // Dynamic URL Synchronization
  if (updateUrl) {
    updateBrowserURL();
  }
}

/**
 * Render Phone Cards in Responsive 3-Column Grid with Multi-Selection
 */
function render3ColumnGrid(phones) {
  const grid = document.getElementById('phones-results-grid');
  if (!grid) return;

  if (phones.length === 0) {
    grid.innerHTML = `
      <div class="empty-results-box">
        <div class="empty-results-icon">📱🔍</div>
        <h3 class="empty-results-title">No Smartphones Found Matching Your Filters</h3>
        <p class="empty-results-desc">Try clearing some filter criteria or adjusting your price and brand preferences.</p>
        <button type="button" class="btn-search-phones" style="max-width:240px; margin:0 auto;" onclick="resetAllFilters()">
          Clear All Filters
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = phones.map(phone => {
    const isSelected = selectedProductIds.has(String(phone.id));
    const ratingHtml = getStarsHTML(phone.rating);
    const priceHtml = formatPrice(phone.price);

    const is5gBadge = phone.is5G ? '<span class="phone-5g-badge">⚡ 5G</span>' : '';
    const osBadge = `<span class="phone-os-badge">${phone.system}</span>`;

    return `
      <div class="phone-card ${isSelected ? 'selected' : ''}" data-id="${phone.id}" ${isSelected ? 'aria-selected="true"' : ''}>
        <div class="card-select-check" title="Selected Device">✓</div>
        <div class="phone-img-box">
          ${osBadge}
          ${is5gBadge}
          <img src="${phone.imageUrl}" alt="${phone.displayName}" loading="lazy" onerror="this.src='/assets/placeholder.svg'">
        </div>
        
        <div class="phone-card-content">
          <h3 class="phone-brand-title">${phone.displayName}</h3>
          
          <div class="phone-price-rating-row">
            <span class="phone-price">${priceHtml}</span>
            ${ratingHtml}
          </div>

          <div class="spec-badges-strip">
            <span class="spec-pill">💾 ${phone.storage}</span>
            <span class="spec-pill">📸 ${phone.primary_camera || 'Camera'}</span>
            <span class="spec-pill">📱 ${phone.display_size_inch}"</span>
            <span class="spec-pill">🎨 ${phone.color}</span>
            ${phone.resolution ? `<span class="spec-pill">🖥️ ${phone.resolution}</span>` : ''}
          </div>

          <!-- Full Description Below Image as Requested -->
          <div class="phone-full-desc-box">
            ${phone.full_description}
          </div>

          <div class="phone-card-actions">
            <button type="button" class="btn-phone-detail" onclick="event.stopPropagation(); alert('Order placed for ${phone.displayName} (${phone.storage}, ${phone.color}) at ${priceHtml}! Express 1-day delivery initialized.')">
              🛒 Order Now (${priceHtml})
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach card click handlers for multi-selection highlight
  grid.querySelectorAll('.phone-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Ignore if clicked on Order button
      if (e.target.closest('.btn-phone-detail')) return;

      const pid = String(card.dataset.id);
      if (selectedProductIds.has(pid)) {
        selectedProductIds.delete(pid);
        card.classList.remove('selected');
        card.removeAttribute('aria-selected');
      } else {
        selectedProductIds.add(pid);
        card.classList.add('selected');
        card.setAttribute('aria-selected', 'true');
      }
      updateSelectedSummary();
    });
  });
}

/**
 * Render Dismissable Active Filter Chips
 */
function renderActiveChips() {
  const container = document.getElementById('active-filter-chips');
  if (!container) return;

  const chips = [];

  if (currentFilters.keyword) {
    chips.push({ label: `"${currentFilters.keyword}"`, remove: () => {
      document.getElementById('search-keyword-input').value = '';
      onFilterChanged();
    }});
  }

  currentFilters.brands.forEach(b => {
    chips.push({ label: `Brand: ${b}`, remove: () => {
      const cb = Array.from(document.querySelectorAll('.filter-input-brand')).find(el => el.value === b);
      if (cb) cb.checked = false;
      onFilterChanged();
    }});
  });

  currentFilters.systems.forEach(s => {
    chips.push({ label: `OS: ${s}`, remove: () => {
      const cb = Array.from(document.querySelectorAll('.filter-input-system')).find(el => el.value === s);
      if (cb) cb.checked = false;
      onFilterChanged();
    }});
  });

  currentFilters.networkTypes.forEach(n => {
    chips.push({ label: `Network: ${n}`, remove: () => {
      const cb = Array.from(document.querySelectorAll('.filter-input-net')).find(el => el.value === n);
      if (cb) cb.checked = false;
      onFilterChanged();
    }});
  });

  if (currentFilters.minPrice !== null) {
    chips.push({ label: `Min: $${currentFilters.minPrice}`, remove: () => {
      document.getElementById('search-min-price').value = '';
      onFilterChanged();
    }});
  }

  if (currentFilters.maxPrice !== null) {
    chips.push({ label: `Max: $${currentFilters.maxPrice}`, remove: () => {
      document.getElementById('search-max-price').value = '';
      onFilterChanged();
    }});
  }

  currentFilters.ratings.forEach(r => {
    chips.push({ label: `★ ${r}+ Stars`, remove: () => {
      const cb = Array.from(document.querySelectorAll('.filter-input-rating')).find(el => el.value === r);
      if (cb) cb.checked = false;
      onFilterChanged();
    }});
  });

  currentFilters.storages.forEach(s => {
    chips.push({ label: `Storage: ${s}`, remove: () => {
      const cb = Array.from(document.querySelectorAll('.filter-input-storage')).find(el => el.value === s);
      if (cb) cb.checked = false;
      onFilterChanged();
    }});
  });

  currentFilters.colors.forEach(c => {
    chips.push({ label: `Color: ${c}`, remove: () => {
      const cb = Array.from(document.querySelectorAll('.filter-input-color')).find(el => el.value === c);
      if (cb) cb.checked = false;
      onFilterChanged();
    }});
  });

  currentFilters.resolutions.forEach(r => {
    chips.push({ label: `Res: ${r}`, remove: () => {
      const cb = Array.from(document.querySelectorAll('.filter-input-resolution')).find(el => el.value === r);
      if (cb) cb.checked = false;
      onFilterChanged();
    }});
  });

  currentFilters.detailedResolutions.forEach(dr => {
    chips.push({ label: `Detailed: ${dr}`, remove: () => {
      const cb = Array.from(document.querySelectorAll('.filter-input-detailed-res')).find(el => el.value === dr);
      if (cb) cb.checked = false;
      onFilterChanged();
    }});
  });

  currentFilters.cameras.forEach(cam => {
    chips.push({ label: `Camera: ${cam}`, remove: () => {
      const cb = Array.from(document.querySelectorAll('.filter-input-camera')).find(el => el.value === cam);
      if (cb) cb.checked = false;
      onFilterChanged();
    }});
  });

  currentFilters.screenCategories.forEach(sc => {
    const screenLabels = { 'compact': 'Compact (<6.0")', 'medium': 'Standard (6.0"-6.5")', 'large': 'Large (>6.5")' };
    chips.push({ label: `Screen: ${screenLabels[sc] || sc}`, remove: () => {
      const cb = Array.from(document.querySelectorAll('.filter-input-screen')).find(el => el.value === sc);
      if (cb) cb.checked = false;
      onFilterChanged();
    }});
  });

  if (chips.length === 0) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = chips.map((chip, idx) => `
    <span class="filter-chip">
      ${chip.label}
      <button type="button" class="chip-remove-btn" data-chip-idx="${idx}">&times;</button>
    </span>
  `).join('');

  container.querySelectorAll('.chip-remove-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.target.dataset.chipIdx, 10);
      if (chips[idx]) chips[idx].remove();
    });
  });
}

/**
 * Dynamically synchronize the Browser URL query parameters via history.pushState
 */
function updateBrowserURL() {
  const params = new URLSearchParams();

  if (currentFilters.keyword) params.set('keyword', currentFilters.keyword);
  if (currentFilters.brands.length > 0) params.set('brand', currentFilters.brands.join(','));
  if (currentFilters.systems.length > 0) params.set('system', currentFilters.systems.join(','));
  if (currentFilters.networkTypes.length > 0) params.set('network', currentFilters.networkTypes.join(','));
  if (currentFilters.minPrice !== null) params.set('minPrice', currentFilters.minPrice);
  if (currentFilters.maxPrice !== null) params.set('maxPrice', currentFilters.maxPrice);
  if (currentFilters.ratings.length > 0) params.set('minRating', currentFilters.ratings.join(','));
  if (currentFilters.storages.length > 0) params.set('storage', currentFilters.storages.join(','));
  if (currentFilters.colors.length > 0) params.set('color', currentFilters.colors.join(','));
  if (currentFilters.resolutions.length > 0) params.set('resolution', currentFilters.resolutions.join(','));
  if (currentFilters.detailedResolutions.length > 0) params.set('detailed_resolution', currentFilters.detailedResolutions.join(','));
  if (currentFilters.cameras.length > 0) params.set('camera', currentFilters.cameras.join(','));
  if (currentFilters.screenCategories.length > 0) params.set('screen', currentFilters.screenCategories.join(','));
  if (currentFilters.sortBy && currentFilters.sortBy !== 'relevance') params.set('sort', currentFilters.sortBy);

  const queryString = params.toString();
  const newUrl = queryString ? `${window.location.pathname}?${queryString}` : window.location.pathname;
  window.history.pushState(null, '', newUrl);
}

/**
 * Reset All Filters
 */
function resetAllFilters() {
  const form = document.getElementById('search-filter-form');
  if (form) form.reset();

  const sortSelect = document.getElementById('sort-by-select');
  if (sortSelect) sortSelect.value = 'relevance';

  selectedProductIds.clear();
  updateSelectedSummary();

  currentFilters = {
    brands: [],
    systems: [],
    networkTypes: [],
    is5GOnly: false,
    storages: [],
    colors: [],
    resolutions: [],
    detailedResolutions: [],
    cameras: [],
    ratings: [],
    screenCategories: [],
    minPrice: null,
    maxPrice: null,
    minRating: null,
    keyword: '',
    sortBy: 'relevance'
  };

  updateMultiSelectTriggerLabels();
  executeSearchAndRender(true);
}
