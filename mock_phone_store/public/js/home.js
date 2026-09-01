/**
 * home.js - Logic for PhoneVerse Homepage (Trending Carousel & Search Form)
 */

document.addEventListener('DOMContentLoaded', async () => {
  console.log('[Home] Initializing PhoneVerse Homepage...');

  // 1. Initialize FAQ Accordion
  initFaqAccordion();

  // 2. Initialize Calculator Button
  initCalculatorButton();

  // 3. Load catalog and trending data
  try {
    await loadCatalog();
    populateHomeSidebarFilters();
    await renderTrendingPhones();
  } catch (err) {
    console.error('[Home] Error during initialization:', err);
  }

  // 4. Attach Home Filter Form Submit Handler
  const form = document.getElementById('home-filter-form');
  if (form) {
    form.addEventListener('submit', handleHomeFormSubmit);
  }

  // 5. Reset Button
  const resetBtn = document.getElementById('btn-home-reset');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      document.querySelectorAll('#home-storage-pills .storage-pill').forEach(pill => pill.classList.remove('active'));
    });
  }
});

/**
 * Render the Top 3 Trending Phones from `trends` file + `data.csv`
 */
async function renderTrendingPhones() {
  const container = document.getElementById('trending-phones-grid');
  if (!container) return;

  const trendingList = await loadTrendingPhones();

  if (!trendingList || trendingList.length === 0) {
    container.innerHTML = '<p class="text-muted">No trending items available at this time.</p>';
    return;
  }

  container.innerHTML = trendingList.slice(0, 3).map((phone, idx) => {
    const rankLabel = `#${idx + 1} Trending`;
    const ratingHtml = getStarsHTML(phone.rating);
    const priceHtml = formatPrice(phone.price);
    
    // Key specs summary
    const specs = [
      phone.is5G ? '5G' : '4G LTE',
      phone.display_size_inch ? `${phone.display_size_inch}" Display` : '',
      phone.storage,
      phone.primary_camera ? `${phone.primary_camera}` : ''
    ].filter(Boolean).join(' • ');

    return `
      <div class="trending-card" data-phone-id="${phone.id}">
        <span class="trending-card-badge">${rankLabel}</span>
        <div class="trending-img-box">
          <img src="${phone.imageUrl}" alt="${phone.displayName}" loading="lazy" onerror="this.src='/assets/placeholder.svg'">
        </div>
        <h3 class="trending-title">${phone.displayName}</h3>
        <div class="trending-meta-row">
          ${ratingHtml}
          <span class="trending-price">${priceHtml}</span>
        </div>
        <div class="spec-badges-strip" style="margin-bottom: 8px;">
          <span class="spec-pill" style="font-weight:700; color:var(--primary);">${specs}</span>
        </div>
        <p class="trending-desc">${phone.full_description}</p>
        <a href="/search.html?brand=${encodeURIComponent(phone.brand)}&keyword=${encodeURIComponent(phone.mobile_name)}" class="btn-view-deal">
          View Deal & Specs →
        </a>
      </div>
    `;
  }).join('');
}

/**
 * Populate Sidebar Filters from Unique Dataset Options
 */
function populateHomeSidebarFilters() {
  // 1. Brands Checkboxes (Top Brands First)
  const brandContainer = document.getElementById('home-brand-checkboxes');
  if (brandContainer) {
    const sortedBrands = Array.from(filterOptions.brands).sort((a, b) => a.localeCompare(b));
    
    // Recommended top list
    const topPicks = ['Apple', 'Samsung', 'Redmi', 'OnePlus', 'Vivo', 'Oppo'];
    const otherBrands = sortedBrands.filter(b => !topPicks.map(p => p.toLowerCase()).includes(b.toLowerCase()));
    const finalBrands = [...topPicks.filter(b => sortedBrands.map(s => s.toLowerCase()).includes(b.toLowerCase())), ...otherBrands];

    brandContainer.innerHTML = finalBrands.map(brand => `
      <label class="filter-checkbox-label">
        <input type="checkbox" name="brand" value="${brand}">
        <span>${brand}</span>
      </label>
    `).join('');
  }

  // 2. Budget Range Placeholders
  const minPriceInput = document.getElementById('home-min-price');
  const maxPriceInput = document.getElementById('home-max-price');
  if (minPriceInput && maxPriceInput && isFinite(filterOptions.minPrice)) {
    minPriceInput.placeholder = `$${Math.floor(filterOptions.minPrice)}`;
    maxPriceInput.placeholder = `$${Math.ceil(filterOptions.maxPrice)}`;
  }

  // 3. Storage Pills
  const storageContainer = document.getElementById('home-storage-pills');
  if (storageContainer) {
    const defaultPills = ['64 GB', '128 GB', '256 GB+'];
    storageContainer.innerHTML = defaultPills.map(s => `
      <button type="button" class="storage-pill" data-storage="${s}">${s}</button>
    `).join('');

    storageContainer.querySelectorAll('.storage-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        pill.classList.toggle('active');
      });
    });
  }
}

/**
 * Handle Homepage Filter Form Submission
 */
function handleHomeFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const params = new URLSearchParams();

  // Checked Brands
  const checkedBrands = Array.from(form.querySelectorAll('input[name="brand"]:checked')).map(cb => cb.value);
  if (checkedBrands.length > 0) {
    params.set('brand', checkedBrands.join(','));
  }

  // Budget Min & Max
  const minPrice = form.querySelector('#home-min-price').value.trim();
  const maxPrice = form.querySelector('#home-max-price').value.trim();
  if (minPrice) params.set('minPrice', minPrice);
  if (maxPrice) params.set('maxPrice', maxPrice);

  // System
  const systemRadio = form.querySelector('input[name="system"]:checked');
  if (systemRadio && systemRadio.value !== 'All') {
    params.set('system', systemRadio.value);
  }

  // Storage Pills
  const activePills = Array.from(document.querySelectorAll('#home-storage-pills .storage-pill.active')).map(p => p.dataset.storage);
  if (activePills.length > 0) {
    params.set('storage', activePills.join(','));
  }

  // 5G Toggle
  const is5g = form.querySelector('#home-5g-toggle').checked;
  if (is5g) {
    params.set('is5G', 'true');
  }

  // Rating
  const minRating = form.querySelector('#home-rating-select').value;
  if (minRating) {
    params.set('minRating', minRating);
  }

  // Redirect to search catalog
  const queryString = params.toString();
  const targetUrl = queryString ? `/search.html?${queryString}` : '/search.html';
  window.location.href = targetUrl;
}

/**
 * Interactive FAQ Accordion
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close other items
        faqItems.forEach(other => other.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

/**
 * Trade-In Device Calculator Popup
 */
function initCalculatorButton() {
  const calcBtn = document.getElementById('btn-trade-calc');
  if (calcBtn) {
    calcBtn.addEventListener('click', () => {
      const brand = prompt('Enter your current phone brand (e.g., Apple, Samsung, Google):', 'Apple');
      if (brand) {
        const model = prompt(`Enter the model name for your ${brand}:`, 'iPhone 11');
        if (model) {
          const condition = prompt('Enter device condition (Flawless, Good, Fair):', 'Good');
          const estimatedCredit = condition && condition.toLowerCase() === 'flawless' ? '$350 - $400' : '$220 - $300';
          alert(`🎉 Estimated Trade-In Credit for ${brand} ${model} (${condition}): ${estimatedCredit}!\n\nThis credit can be applied at checkout toward any new device.`);
        }
      }
    });
  }
}
