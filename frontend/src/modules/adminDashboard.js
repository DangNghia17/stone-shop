// Admin dashboard handlers
export function initAdminDashboard() {
  // Logout handler
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('adminLoggedIn');
      window.location.hash = '#/admin';
    });
  }

  // Add product button
  const addProductBtn = document.getElementById('add-product-btn');
  const productModal = document.getElementById('product-modal');
  const closeModal = document.getElementById('close-modal');
  const cancelBtn = document.getElementById('cancel-btn');
  
  if (addProductBtn && productModal) {
    addProductBtn.addEventListener('click', () => {
      productModal.classList.remove('hidden');
    });
  }
  
  if (closeModal && productModal) {
    closeModal.addEventListener('click', () => {
      productModal.classList.add('hidden');
    });
  }
  
  if (cancelBtn && productModal) {
    cancelBtn.addEventListener('click', () => {
      productModal.classList.add('hidden');
    });
  }

  // Product form handler
  const productForm = document.getElementById('product-form');
  if (productForm) {
    productForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // Handle product submission here
      alert('Sản phẩm đã được lưu thành công!');
      productModal.classList.add('hidden');
      productForm.reset();
    });
  }

  // Export data handler
  const exportBtn = document.getElementById('export-btn');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      // Simulate data export
      const data = { message: 'Dữ liệu đã được xuất thành công!' };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'products-export.json';
      a.click();
      URL.revokeObjectURL(url);
    });
  }
}
