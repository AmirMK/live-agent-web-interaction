/**
 * data.js - Phone Catalog Loader, Parser, and In-Memory Filter Engine for PhoneVerse
 */

let allProducts = [];
let allPhones = allProducts;
let allProductsById = new Map();
let filterOptions = {
  brands: new Set(),
  systems: new Set(),
  networkTypes: new Set(),
  storages: new Set(),
  colors: new Set(),
  resolutions: new Set(),
  detailedResolutions: new Set(),
  cameras: new Set(),
  displaySizes: new Set(),
  minPrice: Infinity,
  maxPrice: -Infinity,
  minRating: 5,
  maxRating: 0
};

/**
 * Standard Color Map for Visual Color Badges
 */
const colorHexMap = {
  'Black': '#111827',
  'White': '#f9fafb',
  'Blue': '#2563eb',
  'Navy Blue': '#1e3a8a',
  'Green': '#16a34a',
  'Purple': '#9333ea',
  'Red': '#dc2626',
  'Gold': '#d97706',
  'Grey': '#6b7280',
  'Silver': '#cbd5e1',
  'Yellow': '#eab308',
  'Pink': '#ec4899',
  'Orange': '#ea580c',
  'Bronze': '#92400e',
  'Brown': '#78350f',
  'Multi': 'linear-gradient(45deg, red, yellow, green, blue)'
};

function getColorHex(colorName) {
  if (!colorName) return '#94a3b8';
  return colorHexMap[colorName] || '#94a3b8';
}

/**
 * Robust CSV Line Parser (handles quoted strings, embedded commas, escaped quotes)
 */
function parseCSV(text) {
  const rows = [];
  let currentRow = [];
  let currentField = '';
  let insideQuote = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"') {
      if (insideQuote && nextChar === '"') {
        currentField += '"';
        i++; // skip escaped quote
      } else {
        insideQuote = !insideQuote;
      }
    } else if (char === ',' && !insideQuote) {
      currentRow.push(currentField);
      currentField = '';
    } else if ((char === '\r' || char === '\n') && !insideQuote) {
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
      currentRow.push(currentField);
      currentField = '';
      if (currentRow.length > 0 && currentRow.some(field => field.trim() !== '')) {
        rows.push(currentRow);
      }
      currentRow = [];
    } else {
      currentField += char;
    }
  }

  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField);
    if (currentRow.some(field => field.trim() !== '')) {
      rows.push(currentRow);
    }
  }

  if (rows.length < 2) return [];

  const headers = rows[0].map(h => h.trim());
  const products = [];

  for (let r = 1; r < rows.length; r++) {
    const rowValues = rows[r];
    const rowObj = {};
    headers.forEach((h, idx) => {
      rowObj[h] = rowValues[idx] ? rowValues[idx].trim() : '';
    });

    const id = rowObj.id;
    if (!id) continue;

    const price = parseFloat(rowObj.price) || 0;
    const rating = parseFloat(rowObj.rating) || 0;
    const displaySize = parseFloat(rowObj.display_size_inch) || 0;

    // Normalize Operating System display
    let system = rowObj.system || '';
    if (system.toLowerCase() === 'ios') system = 'iOS';
    else if (system.toLowerCase() === 'android') system = 'Android';

    const brand = rowObj.brand || 'Other';
    const color = rowObj.color || 'Standard';
    const mobileName = rowObj.mobile_name || 'Smartphone';
    const networkType = rowObj.network_type || '4G';
    const storage = rowObj.storage || '64 GB';
    const primaryCamera = rowObj.primary_camera || '';
    const resolution = rowObj.resolution || '';
    const detailedResolution = rowObj.detailed_resolution || '';
    const processorType = rowObj.processor_type || '';
    const fullDescription = rowObj.full_description || `${brand} ${mobileName} smartphone with ${storage} storage and ${displaySize}" display.`;

    const product = {
      id: id,
      brand: brand,
      color: color,
      mobile_name: mobileName,
      displayName: `${brand} ${mobileName}`,
      processor_type: processorType,
      resolution: resolution,
      system: system,
      price: price,
      rating: rating,
      network_type: networkType,
      is5G: networkType.toUpperCase().includes('5G'),
      primary_camera: primaryCamera,
      detailed_resolution: detailedResolution,
      storage: storage,
      display_size_inch: displaySize,
      full_description: fullDescription,
      imageUrl: `/api/image/${id}`
    };

    products.push(product);
    allProductsById.set(String(id), product);

    // Track filter collections
    if (product.brand) filterOptions.brands.add(product.brand);
    if (product.system) filterOptions.systems.add(product.system);
    if (product.network_type) filterOptions.networkTypes.add(product.network_type);
    if (product.storage) filterOptions.storages.add(product.storage);
    if (product.color) filterOptions.colors.add(product.color);
    if (product.resolution) filterOptions.resolutions.add(product.resolution);
    if (product.detailed_resolution) filterOptions.detailedResolutions.add(product.detailed_resolution);
    if (product.primary_camera) filterOptions.cameras.add(product.primary_camera);
    if (displaySize > 0) filterOptions.displaySizes.add(displaySize);

    if (price > 0 && price < filterOptions.minPrice) filterOptions.minPrice = price;
    if (price > filterOptions.maxPrice) filterOptions.maxPrice = price;
    if (rating > 0 && rating < filterOptions.minRating) filterOptions.minRating = rating;
    if (rating > filterOptions.maxRating) filterOptions.maxRating = rating;
  }

  return products;
}

/**
 * Load Catalog from /data/data.csv
 */
async function loadCatalog() {
  if (allProducts.length > 0) return allProducts;

  try {
    const response = await fetch('/data/data.csv');
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    const csvText = await response.text();
    allProducts = parseCSV(csvText);
    allPhones = allProducts;
    // Export globals to window/globalThis for robust multi-script access
    if (typeof window !== 'undefined') {
      window.allProducts = allProducts;
      window.allPhones = allProducts;
      window.allProductsById = allProductsById;
      window.filterOptions = filterOptions;
      window.loadCatalog = loadCatalog;
      window.loadTrendingPhones = loadTrendingPhones;
      window.searchCatalog = searchCatalog;
      window.getStarsHTML = getStarsHTML;
      window.formatPrice = formatPrice;
      window.getColorHex = getColorHex;
    }
    if (typeof global !== 'undefined') {
      global.allProducts = allProducts;
      global.allPhones = allProducts;
      global.allProductsById = allProductsById;
      global.filterOptions = filterOptions;
      global.loadCatalog = loadCatalog;
      global.loadTrendingPhones = loadTrendingPhones;
      global.searchCatalog = searchCatalog;
      global.getStarsHTML = getStarsHTML;
      global.formatPrice = formatPrice;
      global.getColorHex = getColorHex;
      global.parseCSV = parseCSV;
    }

    console.log(`[Catalog] Loaded ${allProducts.length} phones successfully.`);
    return allProducts;
  } catch (err) {
    console.error('[Catalog] Error loading CSV, using fallback data:', err);
    allProducts = generateFallbackPhones();
    allPhones = allProducts;
    allProducts.forEach(p => allProductsById.set(String(p.id), p));
    if (typeof window !== 'undefined') {
      window.allProducts = allProducts;
      window.allPhones = allProducts;
    }
    return allProducts;
  }
}

/**
 * Load Trending Phone IDs and resolve products
 */
async function loadTrendingPhones() {
  await loadCatalog();

  try {
    const response = await fetch('/api/trends');
    if (response.ok) {
      const data = await response.json();
      if (data.ids && Array.isArray(data.ids) && data.ids.length > 0) {
        const trending = data.ids.map(id => allProductsById.get(String(id))).filter(Boolean);
        if (trending.length > 0) return trending;
      }
    }
  } catch (err) {
    console.warn('[Trends] Could not fetch /api/trends, falling back to direct parse:', err);
  }

  // Fallback defaults if API is not responding
  const fallbackIds = ['10', '12', '34'];
  const trending = fallbackIds.map(id => allProductsById.get(String(id))).filter(Boolean);
  if (trending.length > 0) return trending;

  // Otherwise return first 3 phones in catalog
  return allProducts.slice(0, 3);
}

/**
 * Search and Filter Engine
 */
function searchCatalog(filters = {}) {
  const {
    brands = [],
    system = 'All',
    networkTypes = [],
    is5GOnly = false,
    storages = [],
    colors = [],
    resolutions = [],
    detailedResolutions = [],
    cameras = [],
    minPrice = null,
    maxPrice = null,
    minRating = null,
    minDisplaySize = null,
    maxDisplaySize = null,
    keyword = '',
    sortBy = 'relevance'
  } = filters;

  const brandList = Array.isArray(brands) ? brands : (brands ? [brands] : []);
  const networkList = Array.isArray(networkTypes) ? networkTypes : (networkTypes ? [networkTypes] : []);
  const storageList = Array.isArray(storages) ? storages : (storages ? [storages] : []);
  const colorList = Array.isArray(colors) ? colors : (colors ? [colors] : []);
  const resolutionList = Array.isArray(resolutions) ? resolutions : (resolutions ? [resolutions] : []);
  const detailedResList = Array.isArray(detailedResolutions) ? detailedResolutions : (detailedResolutions ? [detailedResolutions] : []);
  const cameraList = Array.isArray(cameras) ? cameras : (cameras ? [cameras] : []);

  const lowerKeyword = (keyword || '').trim().toLowerCase();

  const exactMatches = [];

  for (const phone of allProducts) {
    // 1. Keyword search
    if (lowerKeyword) {
      const text = `${phone.brand} ${phone.mobile_name} ${phone.storage} ${phone.color} ${phone.system}`.toLowerCase();
      if (!text.includes(lowerKeyword)) continue;
    }

    // 2. Brand Filter
    if (brandList.length > 0) {
      const matchBrand = brandList.some(b => b.toLowerCase() === phone.brand.toLowerCase());
      if (!matchBrand) continue;
    }

    // 3. Operating System Filter
    if (system && system !== 'All' && system !== '') {
      if (phone.system.toLowerCase() !== system.toLowerCase()) continue;
    }

    // 4. 5G / Network Filter
    if (is5GOnly) {
      if (!phone.is5G) continue;
    }
    if (networkList.length > 0) {
      const matchNetwork = networkList.some(n => phone.network_type.toLowerCase().includes(n.toLowerCase()));
      if (!matchNetwork) continue;
    }

    // 5. Storage Filter
    if (storageList.length > 0) {
      const matchStorage = storageList.some(s => {
        // match exact string or numerical gigabytes
        const normFilter = s.replace(/\s+/g, '').toUpperCase();
        const normItem = phone.storage.replace(/\s+/g, '').toUpperCase();
        if (normFilter === normItem) return true;
        if (normFilter.includes('+')) {
          const numFilter = parseInt(normFilter, 10);
          const numItem = parseInt(normItem, 10);
          return numItem >= numFilter;
        }
        return false;
      });
      if (!matchStorage) continue;
    }

    // 6. Color Filter
    if (colorList.length > 0) {
      const matchColor = colorList.some(c => c.toLowerCase() === phone.color.toLowerCase());
      if (!matchColor) continue;
    }

    // 7. Resolution Filter
    if (resolutionList.length > 0) {
      const matchRes = resolutionList.some(r => r.toLowerCase() === phone.resolution.toLowerCase());
      if (!matchRes) continue;
    }

    // 8. Detailed Resolution Filter
    if (detailedResList.length > 0) {
      const matchDetailed = detailedResList.some(dr => dr.toLowerCase() === phone.detailed_resolution.toLowerCase());
      if (!matchDetailed) continue;
    }

    // 9. Camera Filter
    if (cameraList.length > 0) {
      const matchCam = cameraList.some(cam => phone.primary_camera.toLowerCase().includes(cam.toLowerCase()));
      if (!matchCam) continue;
    }

    // 10. Price Range
    if (minPrice !== null && !isNaN(minPrice) && phone.price < minPrice) continue;
    if (maxPrice !== null && !isNaN(maxPrice) && phone.price > maxPrice) continue;

    // 11. Rating Filter
    if (minRating !== null && !isNaN(minRating) && phone.rating < minRating) continue;

    // 12. Display Size Range
    if (minDisplaySize !== null && !isNaN(minDisplaySize) && phone.display_size_inch < minDisplaySize) continue;
    if (maxDisplaySize !== null && !isNaN(maxDisplaySize) && phone.display_size_inch > maxDisplaySize) continue;

    exactMatches.push(phone);
  }

  // Sorting
  sortPhoneList(exactMatches, sortBy);

  return {
    exactMatches,
    totalExact: exactMatches.length
  };
}

/**
 * Sort Phone Array
 */
function sortPhoneList(phones, sortBy) {
  if (!phones || phones.length === 0) return phones;

  switch (sortBy) {
    case 'rating-desc':
      phones.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      break;
    case 'rating-asc':
      phones.sort((a, b) => (a.rating || 0) - (b.rating || 0));
      break;
    case 'price-asc':
      phones.sort((a, b) => (a.price || 0) - (b.price || 0));
      break;
    case 'price-desc':
      phones.sort((a, b) => (b.price || 0) - (a.price || 0));
      break;
    case 'name-asc':
      phones.sort((a, b) => a.displayName.localeCompare(b.displayName));
      break;
    case 'relevance':
    default:
      // Keep natural relevance / rating balance
      break;
  }
  return phones;
}

/**
 * Generate Visual Gold Star Rating HTML
 */
function getStarsHTML(rating) {
  const r = typeof rating === 'number' ? rating : parseFloat(rating) || 0;
  const fullStars = Math.floor(r);
  const hasHalf = (r - fullStars) >= 0.3 && (r - fullStars) <= 0.8;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  let stars = '';
  for (let i = 0; i < fullStars; i++) stars += '<span class="star filled">★</span>';
  if (hasHalf) stars += '<span class="star half">★</span>';
  for (let i = 0; i < emptyStars; i++) stars += '<span class="star empty">☆</span>';

  return `<span class="rating-stars-badge" title="${r} out of 5 stars">${stars} <span class="rating-number">${r.toFixed(1)}</span></span>`;
}

/**
 * Format Currency Display
 */
function formatPrice(price) {
  const num = typeof price === 'number' ? price : parseFloat(price) || 0;
  return `$${num.toLocaleString()}`;
}

/**
 * Fallback Phone Data
 */
function generateFallbackPhones() {
  return [
    {
      id: '5',
      brand: 'Apple',
      color: 'Blue',
      mobile_name: 'iPhone 13 mini',
      displayName: 'Apple iPhone 13 mini',
      processor_type: 'Apple',
      resolution: 'Full HD',
      system: 'iOS',
      price: 799,
      rating: 4.6,
      network_type: '5G',
      is5G: true,
      primary_camera: '12 MP',
      detailed_resolution: '2340 x 1080',
      storage: '128 GB',
      display_size_inch: 5.4,
      full_description: 'The Apple iPhone 13 mini (Blue) features a 5.4-inch Super Retina XDR display with A15 Bionic chip and advanced 5G support.',
      imageUrl: '/api/image/5'
    },
    {
      id: '1',
      brand: 'Redmi',
      color: 'Black',
      mobile_name: 'Note 12 Pro 5G',
      displayName: 'Redmi Note 12 Pro 5G',
      processor_type: 'Mediatek',
      resolution: 'Full HD',
      system: 'Android',
      price: 299,
      rating: 4.2,
      network_type: '5G',
      is5G: true,
      primary_camera: '50 MP',
      detailed_resolution: '2400 x 1080',
      storage: '128 GB',
      display_size_inch: 6.67,
      full_description: 'The Redmi Note 12 Pro 5G features a 6.67-inch Full HD AMOLED 120Hz display with a 50MP triple pro camera and 5000mAh battery.',
      imageUrl: '/api/image/1'
    },
    {
      id: '8',
      brand: 'Samsung',
      color: 'Green',
      mobile_name: 'Galaxy A04',
      displayName: 'Samsung Galaxy A04',
      processor_type: 'Qualcomm',
      resolution: 'HD',
      system: 'Android',
      price: 149,
      rating: 4.1,
      network_type: '4G',
      is5G: false,
      primary_camera: '50 MP',
      detailed_resolution: '1600 x 720',
      storage: '128 GB',
      display_size_inch: 6.5,
      full_description: 'The Samsung Galaxy A04 features a 6.5-inch HD display, massive 5000mAh battery, and 50MP camera.',
      imageUrl: '/api/image/8'
    }
  ];
}

// Global window and environment exports
if (typeof window !== 'undefined') {
  window.allProducts = allProducts;
  window.allPhones = allProducts;
  window.allProductsById = allProductsById;
  window.filterOptions = filterOptions;
  window.loadCatalog = loadCatalog;
  window.loadTrendingPhones = loadTrendingPhones;
  window.searchCatalog = searchCatalog;
  window.getStarsHTML = getStarsHTML;
  window.formatPrice = formatPrice;
  window.getColorHex = getColorHex;
  window.parseCSV = parseCSV;
}
if (typeof global !== 'undefined') {
  global.allProducts = allProducts;
  global.allPhones = allProducts;
  global.allProductsById = allProductsById;
  global.filterOptions = filterOptions;
  global.loadCatalog = loadCatalog;
  global.loadTrendingPhones = loadTrendingPhones;
  global.searchCatalog = searchCatalog;
  global.getStarsHTML = getStarsHTML;
  global.formatPrice = formatPrice;
  global.getColorHex = getColorHex;
  global.parseCSV = parseCSV;
}

