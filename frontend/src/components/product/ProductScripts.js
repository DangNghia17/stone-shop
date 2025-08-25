// Product Scripts Component
export default function renderProductScripts() {
  return `
    <script>
      // Tab functionality
      function showTab(tabName) {
        try {
          // Hide all tab contents
          const tabContents = document.querySelectorAll('.tab-content');
          tabContents.forEach(content => {
            content.classList.add('hidden');
            content.classList.remove('active');
          });
          
          // Remove active class from all tab buttons
          const tabButtons = document.querySelectorAll('.tab-btn');
          tabButtons.forEach(btn => {
            btn.classList.remove('active', 'border-blue-500', 'text-blue-600');
            btn.classList.add('text-gray-500');
          });
          
          // Show selected tab content
          const selectedTab = document.getElementById(tabName);
          if (selectedTab) {
            selectedTab.classList.remove('hidden');
            selectedTab.classList.add('active');
          }
          
          // Add active class to selected tab button
          const clickedButton = event.target;
          if (clickedButton) {
            clickedButton.classList.add('active', 'border-blue-500', 'text-blue-600');
            clickedButton.classList.remove('text-gray-500');
          }
        } catch (error) {
          console.error('Error in showTab:', error);
        }
      }
      
      // Image gallery functionality
      function changeMainImage(src) {
        try {
          const mainImage = document.getElementById('main-image');
          if (mainImage) {
            mainImage.src = src;
            // Add smooth transition effect
            mainImage.style.opacity = '0.7';
            setTimeout(() => {
              mainImage.style.opacity = '1';
            }, 150);
          }
        } catch (error) {
          console.error('Error in changeMainImage:', error);
        }
      }
      
      // Initialize first tab as active when DOM is ready
      function initializeTabs() {
        try {
          // Show first tab by default
          const firstTab = document.getElementById('description');
          if (firstTab) {
            firstTab.classList.remove('hidden');
            firstTab.classList.add('active');
          }
          
          // Set first tab button as active
          const firstTabBtn = document.querySelector('.tab-btn');
          if (firstTabBtn) {
            firstTabBtn.classList.add('active', 'border-blue-500', 'text-blue-600');
            firstTabBtn.classList.remove('text-gray-500');
          }
        } catch (error) {
          console.error('Error in initializeTabs:', error);
        }
      }
      
      // Wait for DOM to be ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeTabs);
      } else {
        initializeTabs();
      }
      
      // Also try to initialize after a short delay to ensure everything is rendered
      setTimeout(initializeTabs, 100);
    </script>
  `;
}
