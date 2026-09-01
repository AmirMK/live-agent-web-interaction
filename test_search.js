const fs = require('fs');

// Mock browser globals
global.window = global;
global.document = {
  addEventListener: () => {},
  getElementById: () => null,
  querySelectorAll: () => []
};

// Read CSV
const csvText = fs.readFileSync(__dirname + '/data/data.csv', 'utf8');

// Load data.js
const dataCode = fs.readFileSync(__dirname + '/public/js/data.js', 'utf8');
eval(dataCode);

allProducts = parseCSV(csvText);
allPhones = allProducts;
console.log('Total products loaded:', allProducts.length);
console.log('Unique brands:', Array.from(filterOptions.brands));

// Load search.js
const searchCode = fs.readFileSync(__dirname + '/public/js/search.js', 'utf8');
eval(searchCode);

// Test default search (no filters)
const resDefault = searchCatalogCustom({
  brands: [],
  systems: [],
  networkTypes: [],
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
});
console.log('Default search matches count:', resDefault.totalExact);

// Test Apple filter
const resApple = searchCatalogCustom({
  brands: ['Apple'],
  systems: [],
  networkTypes: [],
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
});
console.log('Apple search matches count:', resApple.totalExact);

// Test Samsung + Apple multi-select
const resMultiBrand = searchCatalogCustom({
  brands: ['Apple', 'Samsung'],
  systems: [],
  networkTypes: [],
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
});
console.log('Apple + Samsung matches count:', resMultiBrand.totalExact);

// Test 5G filter
const res5G = searchCatalogCustom({
  brands: [],
  systems: [],
  networkTypes: ['5G'],
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
});
console.log('5G matches count:', res5G.totalExact);
