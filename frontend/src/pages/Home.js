// Trang chủ: Banner, FilterBar, ProductGrid, Pagination
import renderProcessSection from '../components/ProcessSection.js';
import renderFeaturesSection from '../components/FeaturesSection.js';
import renderProjectsSection from '../components/ProjectsSection.js';
import renderTestimonialsSection from '../components/TestimonialsSection.js';

export default function renderHome() {
  return `
    <div class="min-h-screen">
      <!-- Hero Section -->
      <div id="hero"></div>

      <!-- Filter Section -->
      <div id="filter" class="container mx-auto px-4"></div>

      <!-- Products Section -->
      <div class="container mx-auto px-4">
        <div id="product-grid"></div>
        <div id="pagination" class="mt-8"></div>
      </div>

      <!-- Process Section -->
      ${renderProcessSection()}

      <!-- Features Section -->
      ${renderFeaturesSection()}

      <!-- Projects Section -->
      ${renderProjectsSection()}

      <!-- Testimonials Section -->
      ${renderTestimonialsSection()}
    </div>
  `;
}
