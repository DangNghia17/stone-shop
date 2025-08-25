// Product Styles Component
export default function renderProductStyles() {
  return `
    <style>
      .tab-content {
        transition: all 0.3s ease-in-out;
        display: block;
      }
      
      .tab-content.hidden {
        display: none !important;
      }
      
      .tab-content.active {
        display: block !important;
        animation: fadeIn 0.5s ease-in-out;
      }
      
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .tab-btn {
        transition: all 0.3s ease;
        position: relative;
        cursor: pointer;
      }
      
      .tab-btn:hover {
        color: #3b82f6;
      }
      
      .tab-btn.active {
        color: #3b82f6 !important;
        border-bottom-color: #3b82f6 !important;
      }
      
      /* Ensure proper spacing and layout */
      .container {
        max-width: 1200px;
        margin: 0 auto;
      }
      
      /* Fix image gallery */
      #main-image {
        transition: opacity 0.3s ease;
      }
      
      /* Ensure buttons are clickable */
      button, a {
        cursor: pointer;
      }
    </style>
  `;
}
