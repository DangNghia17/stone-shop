import './stylesheets/tailwind.css';
import renderHeader from './components/Header.js';
import renderFooter from './components/Footer.js';
import renderBanner from './components/Banner.js';
import renderFilterBar from './components/FilterBar.js';
import renderProductGrid from './components/ProductGrid.js';
import renderPagination from './components/Pagination.js';
import renderSkeleton from './components/Skeleton.js';
import renderHome from './pages/Home.js';
import renderProductDetail from './pages/ProductDetail.js';
import renderContact from './pages/Contact.js';
import renderAbout from './pages/About.js';
import renderAdminLogin from './pages/AdminLogin.js';
import renderAdminDashboard from './pages/AdminDashboard.js';

// Import các module đã tách
import { initMobileMenu } from './modules/mobileMenu.js';
import { initContactForm } from './modules/contactForm.js';
import { initAdminLogin as initAdminLoginModule } from './modules/adminLogin.js';
import { initAdminDashboard as initAdminDashboardModule } from './modules/adminDashboard.js';
import { initTestimonialsCarousel } from './modules/testimonialsCarousel.js';


// Import constants
import { CATEGORIES, SIZES, COLORS } from './constants/filterData.js';

// Import services
import { fetchProducts } from './services/productService.js';

// Simple router
const routes = {
  '/': renderHome,
  '/product': renderProductDetail,
  '/contact': renderContact,
  '/about': renderAbout,
  '/admin': renderAdminLogin,
  '/dashboard': renderAdminDashboard,
};

function getRoute() {
  const hash = location.hash.replace('#', '').split('/');
  if (hash[1] === 'product') return '/product';
  if (hash[1] === 'admin') return '/admin';
  if (hash[1] === 'dashboard') return '/dashboard';
  if (hash[1] === 'contact') return '/contact';
  if (hash[1] === 'about') return '/about';
  return '/';
}

async function renderHomePage() {
  // Render khung
  document.querySelector('main').innerHTML = renderHome();
  // Banner
  document.getElementById('hero').innerHTML = renderBanner();
  // FilterBar
  document.getElementById('filter').innerHTML = renderFilterBar(CATEGORIES, SIZES, COLORS);
  // Skeleton loading
  document.getElementById('product-grid').innerHTML = renderSkeleton();
  document.getElementById('pagination').innerHTML = '';

  // State
  let page = 1;
  let filters = { category: '', size: '', color: '', search: '' };
  const limit = 12;

  async function loadProducts() {
    document.getElementById('product-grid').innerHTML = renderSkeleton();
    try {
      const params = { ...filters, page, limit };
      const { products, total } = await fetchProducts(params);
      document.getElementById('product-grid').innerHTML = renderProductGrid(products);
      document.getElementById('pagination').innerHTML = renderPagination(page, total, limit);
    } catch (e) {
      document.getElementById('product-grid').innerHTML = `<div class='text-center text-red-500 py-8'>${e.message}</div>`;
      document.getElementById('pagination').innerHTML = '';
    }
  }

  // Event filter
  document.getElementById('filter').addEventListener('change', (e) => {
    if (e.target.classList.contains('filter-category')) filters.category = e.target.value;
    if (e.target.classList.contains('filter-size')) filters.size = e.target.value;
    if (e.target.classList.contains('filter-color')) filters.color = e.target.value;
    page = 1;
    loadProducts();
  });
  document.getElementById('filter').addEventListener('input', (e) => {
    if (e.target.classList.contains('filter-search')) {
      filters.search = e.target.value;
      page = 1;
      loadProducts();
    }
  });
  document.getElementById('filter').addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {
      page = 1;
      loadProducts();
    }
  });
  // Event phân trang
  document.getElementById('pagination').addEventListener('click', (e) => {
    if (e.target.dataset.page) {
      page = Number(e.target.dataset.page);
      loadProducts();
    }
  });
  // Load lần đầu
  loadProducts();
}

function render() {
  document.getElementById('app').innerHTML = `
    <div class="min-h-screen flex flex-col">
      ${renderHeader()}
      <main class="flex-1"></main>
      ${renderFooter()}
    </div>
  `;
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Route động
  const route = getRoute();
  if (route === '/') {
    renderHomePage();
  } else {
    document.querySelector('main').innerHTML = routes[route]();
    
    // Initialize page-specific handlers
    if (route === '/contact') {
      initContactForm();
    } else if (route === '/admin') {
      initAdminLoginModule();
    } else if (route === '/dashboard') {
      // Check if admin is logged in
      if (!localStorage.getItem('adminLoggedIn')) {
        window.location.hash = '#/admin';
        return;
      }
      initAdminDashboardModule();
    }
  }
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);

// Initialize testimonials carousel when page loads
document.addEventListener('DOMContentLoaded', function() {
  // Small delay to ensure DOM is fully rendered
  setTimeout(initTestimonialsCarousel, 100);
});

// Also initialize when hash changes (for SPA navigation)
window.addEventListener('hashchange', function() {
  setTimeout(initTestimonialsCarousel, 100);
});

