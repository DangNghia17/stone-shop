// Product Detail page JavaScript

let currentProduct = null;
let relatedProducts = [];

// Initialize product detail page
function initializeProductDetail() {
    const productId = Storage.get('currentProductId');
    if (!productId) {
        window.location.href = 'index.html';
        return;
    }

    loadProductDetail(productId);
    loadRelatedProducts();
    setupEventListeners();
}

// Load product detail
function loadProductDetail(productId) {
    const allProducts = ProductManager.getAllProducts();
    currentProduct = allProducts.find(p => p.id == productId);
    
    if (!currentProduct) {
        Utils.showNotification('Không tìm thấy sản phẩm!', 'error');
        window.location.href = 'index.html';
        return;
    }

    displayProductDetail();
}

// Display product detail
function displayProductDetail() {
    if (!currentProduct) return;

    // Update page title
    document.title = `${currentProduct.name} - Đá Mỹ Nghệ`;

    // Update breadcrumb
    const breadcrumb = document.getElementById('breadcrumb');
    if (breadcrumb) {
        breadcrumb.innerHTML = `
            <a href="index.html" class="text-blue-600 hover:text-blue-800">Trang Chủ</a>
            <span class="mx-2 text-gray-500">/</span>
            <a href="index.html" class="text-blue-600 hover:text-blue-800">Sản Phẩm</a>
            <span class="mx-2 text-gray-500">/</span>
            <span class="text-gray-900">${currentProduct.name}</span>
        `;
    }

    // Update product image
    const productImage = document.getElementById('product-image');
    if (productImage) {
        productImage.src = currentProduct.imageUrl;
        productImage.alt = currentProduct.name;
        productImage.loading = 'lazy';
        productImage.onload = function() {
            this.classList.add('loaded');
            const placeholder = this.parentElement.querySelector('.img-placeholder');
            if (placeholder) {
                placeholder.classList.add('fade-out');
            }
        };
    }

    // Update product info
    const productName = document.getElementById('product-name');
    if (productName) {
        productName.textContent = currentProduct.name;
    }

    const productCategory = document.getElementById('product-category');
    if (productCategory) {
        productCategory.textContent = currentProduct.category;
    }

    const productSize = document.getElementById('product-size');
    if (productSize) {
        productSize.textContent = currentProduct.size;
    }

    const productColor = document.getElementById('product-color');
    if (productColor) {
        productColor.textContent = currentProduct.color;
    }

    const productDescription = document.getElementById('product-description');
    if (productDescription) {
        productDescription.textContent = currentProduct.description;
    }
}

// Load related products
function loadRelatedProducts() {
    if (!currentProduct) return;

    const allProducts = ProductManager.getAllProducts();
    relatedProducts = allProducts
        .filter(p => p.id !== currentProduct.id && p.category === currentProduct.category)
        .slice(0, 4);

    displayRelatedProducts();
}

// Display related products
function displayRelatedProducts() {
    const container = document.getElementById('related-products');
    if (!container) return;

    if (relatedProducts.length === 0) {
        container.innerHTML = `
            <div class="text-center py-8">
                <p class="text-gray-500">Không có sản phẩm liên quan</p>
            </div>
        `;
        return;
    }

    container.innerHTML = relatedProducts.map(product => `
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onclick="viewProductDetail(${product.id})">
            <div class="img-wrapper h-48">
                <div class="img-placeholder"></div>
                <img src="${product.imageUrl}" alt="${product.name}" 
                     class="product-img w-full h-48 object-cover" 
                     loading="lazy"
                     onload="this.classList.add('loaded'); this.parentElement.querySelector('.img-placeholder').classList.add('fade-out');">
                <div class="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs z-10">
                    ${product.category}
                </div>
            </div>
            <div class="p-4">
                <h3 class="font-semibold text-lg text-gray-800 mb-2">${product.name}</h3>
                <p class="text-sm text-gray-600 mb-3 line-clamp-2">${product.description}</p>
                <div class="flex justify-between items-center text-sm text-gray-500">
                    <span><i class="fas fa-ruler mr-1"></i>${product.size}</span>
                    <span><i class="fas fa-palette mr-1"></i>${product.color}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    // Share buttons
    const shareButtons = document.querySelectorAll('[data-share]');
    shareButtons.forEach(button => {
        button.addEventListener('click', handleShare);
    });

    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Image zoom
    const productImage = document.getElementById('product-image');
    if (productImage) {
        productImage.addEventListener('click', openImageModal);
    }
}

// Handle share
function handleShare(e) {
    e.preventDefault();
    const platform = e.currentTarget.dataset.share;
    const url = window.location.href;
    const title = currentProduct ? currentProduct.name : 'Đá Mỹ Nghệ';
    const description = currentProduct ? currentProduct.description : 'Khám phá sản phẩm đá mỹ nghệ cao cấp';

    let shareUrl = '';
    switch (platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            break;
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${encodeURIComponent(title + ' - ' + url)}`;
            break;
    }

    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}

// Handle contact form
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const contactData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message'),
        productId: currentProduct ? currentProduct.id : null,
        productName: currentProduct ? currentProduct.name : null
    };

    // Validate form
    if (!contactData.name || !contactData.email || !contactData.message) {
        Utils.showNotification('Vui lòng điền đầy đủ thông tin!', 'error');
        return;
    }

    if (!Utils.validateEmail(contactData.email)) {
        Utils.showNotification('Email không hợp lệ!', 'error');
        return;
    }

    // Save contact message
    const contacts = Storage.get('contacts', []);
    contacts.push({
        ...contactData,
        id: Utils.generateId(),
        createdAt: new Date().toISOString()
    });
    Storage.set('contacts', contacts);

    // Reset form
    e.target.reset();
    
    Utils.showNotification('Gửi tin nhắn thành công! Chúng tôi sẽ liên hệ lại sớm nhất.', 'success');
}

// Open image modal
function openImageModal() {
    if (!currentProduct) return;

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="relative max-w-4xl max-h-full p-4">
            <button class="absolute top-4 right-4 text-white text-2xl hover:text-gray-300" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
            <img src="${currentProduct.imageUrl}" alt="${currentProduct.name}" class="max-w-full max-h-full object-contain">
        </div>
    `;
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    document.body.appendChild(modal);
}

// View product detail (for related products)
function viewProductDetail(productId) {
    Storage.set('currentProductId', productId);
    window.location.reload();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeProductDetail); 