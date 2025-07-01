// Admin page JavaScript

// Cloudinary configuration
const cloudName = 'meaning17';
const uploadPreset = 'ml_default';

// Global variables
let currentProducts = [];
let editingProduct = null;

// Initialize admin page
function initializeAdmin() {
    if (!Auth.requireAuth()) return;
    
    loadProducts();
    setupEventListeners();
    updateProductCount();
}

// Load products from storage
function loadProducts() {
    const storedProducts = Storage.get('products', []);
    currentProducts = [...sampleProducts, ...storedProducts];
    displayProducts(currentProducts);
}

// Display products in table
function displayProducts(products) {
    const tbody = document.getElementById('products-table-body');
    tbody.innerHTML = '';

    products.forEach(product => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-50';
        row.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="h-10 w-10 flex-shrink-0 relative">
                        <div class="img-placeholder w-10 h-10 rounded-full"></div>
                        <img class="product-img h-10 w-10 rounded-full object-cover absolute inset-0" 
                             src="${product.imageUrl}" 
                             alt="${product.name}"
                             loading="lazy"
                             onload="this.classList.add('loaded'); this.parentElement.querySelector('.img-placeholder').classList.add('fade-out');">
                    </div>
                    <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">${product.name}</div>
                        <div class="text-sm text-gray-500">${product.category}</div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${product.size}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${product.color}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 line-clamp-2">${product.description}</td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button onclick="editProduct(${product.id})" class="text-indigo-600 hover:text-indigo-900 mr-3">
                    <i class="fas fa-edit"></i>
                </button>
                <button onclick="deleteProduct(${product.id})" class="text-red-600 hover:text-red-900">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', Utils.debounce(handleSearch, 300));

    // Add product form
    const addProductForm = document.getElementById('add-product-form');
    addProductForm.addEventListener('submit', handleAddProduct);

    // Image upload
    const imageInput = document.getElementById('image-input');
    imageInput.addEventListener('change', handleImageUpload);

    // Export button
    const exportBtn = document.getElementById('export-btn');
    exportBtn.addEventListener('click', exportProducts);

    // Logout button
    const logoutBtn = document.getElementById('logout-btn');
    logoutBtn.addEventListener('click', Auth.logout);
}

// Handle search
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = currentProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
}

// Handle image upload
async function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const uploadBtn = document.getElementById('upload-btn');
    const originalText = uploadBtn.innerHTML;
    
    uploadBtn.disabled = true;
    uploadBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Đang tải lên...';

    try {
        const imageUrl = await API.uploadImage(file);
        document.getElementById('image-url').value = imageUrl;
        document.getElementById('image-preview').src = imageUrl;
        document.getElementById('image-preview').classList.remove('hidden');
        
        Utils.showNotification('Tải hình ảnh thành công!', 'success');
    } catch (error) {
        Utils.showNotification('Lỗi tải hình ảnh: ' + error.message, 'error');
    } finally {
        uploadBtn.disabled = false;
        uploadBtn.innerHTML = originalText;
    }
}

// Handle add product
async function handleAddProduct(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const productData = {
        name: formData.get('name'),
        category: formData.get('category'),
        size: formData.get('size'),
        color: formData.get('color'),
        description: formData.get('description'),
        imageUrl: formData.get('imageUrl')
    };

    // Validate required fields
    if (!productData.name || !productData.category || !productData.size || !productData.color || !productData.imageUrl) {
        Utils.showNotification('Vui lòng điền đầy đủ thông tin!', 'error');
        return;
    }

    try {
        const newProduct = ProductManager.addProduct(productData);
        currentProducts.push(newProduct);
        displayProducts(currentProducts);
        updateProductCount();
        
        // Reset form
        e.target.reset();
        document.getElementById('image-preview').classList.add('hidden');
        
        Utils.showNotification('Thêm sản phẩm thành công!', 'success');
    } catch (error) {
        Utils.showNotification('Lỗi thêm sản phẩm: ' + error.message, 'error');
    }
}

// Edit product
function editProduct(productId) {
    const product = currentProducts.find(p => p.id === productId);
    if (!product) return;

    editingProduct = product;
    
    // Fill form with product data
    document.getElementById('edit-name').value = product.name;
    document.getElementById('edit-category').value = product.category;
    document.getElementById('edit-size').value = product.size;
    document.getElementById('edit-color').value = product.color;
    document.getElementById('edit-description').value = product.description;
    document.getElementById('edit-image-url').value = product.imageUrl;
    document.getElementById('edit-image-preview').src = product.imageUrl;
    document.getElementById('edit-image-preview').classList.remove('hidden');
    
    // Show edit modal
    document.getElementById('edit-modal').classList.remove('hidden');
}

// Handle edit product
async function handleEditProduct(e) {
    e.preventDefault();
    
    if (!editingProduct) return;
    
    const formData = new FormData(e.target);
    const updates = {
        name: formData.get('edit-name'),
        category: formData.get('edit-category'),
        size: formData.get('edit-size'),
        color: formData.get('edit-color'),
        description: formData.get('edit-description'),
        imageUrl: formData.get('edit-image-url')
    };

    try {
        const updatedProduct = ProductManager.updateProduct(editingProduct.id, updates);
        if (updatedProduct) {
            const index = currentProducts.findIndex(p => p.id === editingProduct.id);
            if (index !== -1) {
                currentProducts[index] = updatedProduct;
                displayProducts(currentProducts);
            }
            
            Utils.showNotification('Cập nhật sản phẩm thành công!', 'success');
            closeEditModal();
        }
    } catch (error) {
        Utils.showNotification('Lỗi cập nhật sản phẩm: ' + error.message, 'error');
    }
}

// Delete product
function deleteProduct(productId) {
    if (!confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) return;

    try {
        ProductManager.deleteProduct(productId);
        currentProducts = currentProducts.filter(p => p.id !== productId);
        displayProducts(currentProducts);
        updateProductCount();
        
        Utils.showNotification('Xóa sản phẩm thành công!', 'success');
    } catch (error) {
        Utils.showNotification('Lỗi xóa sản phẩm: ' + error.message, 'error');
    }
}

// Close edit modal
function closeEditModal() {
    document.getElementById('edit-modal').classList.add('hidden');
    editingProduct = null;
    
    // Reset form
    document.getElementById('edit-product-form').reset();
    document.getElementById('edit-image-preview').classList.add('hidden');
}

// Export products
function exportProducts() {
    const dataStr = JSON.stringify(currentProducts, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'products.json';
    link.click();
    
    Utils.showNotification('Xuất dữ liệu thành công!', 'success');
}

// Update product count
function updateProductCount() {
    const countElement = document.getElementById('product-count');
    if (countElement) {
        countElement.textContent = currentProducts.length;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeAdmin); 