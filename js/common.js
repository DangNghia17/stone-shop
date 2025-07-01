// Common JavaScript functions for Stone Shop

// Utility functions
const Utils = {
    // Format currency
    formatCurrency: (amount) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(amount);
    },

    // Format date
    formatDate: (date) => {
        return new Intl.DateTimeFormat('vi-VN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(date));
    },

    // Show notification
    showNotification: (message, type = 'info') => {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full`;
        
        const colors = {
            success: 'bg-green-500 text-white',
            error: 'bg-red-500 text-white',
            warning: 'bg-yellow-500 text-white',
            info: 'bg-blue-500 text-white'
        };
        
        notification.className += ` ${colors[type]}`;
        notification.innerHTML = `
            <div class="flex items-center">
                <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'times' : type === 'warning' ? 'exclamation-triangle' : 'info'} mr-2"></i>
                <span>${message}</span>
                <button class="ml-4 hover:opacity-75" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }, 5000);
    },

    // Debounce function
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function
    throttle: (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Generate random ID
    generateId: () => {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    },

    // Validate email
    validateEmail: (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },

    // Validate phone number
    validatePhone: (phone) => {
        const re = /^[0-9]{10,11}$/;
        return re.test(phone.replace(/\s/g, ''));
    }
};

// Local Storage management
const Storage = {
    // Get item from localStorage
    get: (key, defaultValue = null) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error('Error reading from localStorage:', error);
            return defaultValue;
        }
    },

    // Set item to localStorage
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error('Error writing to localStorage:', error);
            return false;
        }
    },

    // Remove item from localStorage
    remove: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Error removing from localStorage:', error);
            return false;
        }
    },

    // Clear all localStorage
    clear: () => {
        try {
            localStorage.clear();
            return true;
        } catch (error) {
            console.error('Error clearing localStorage:', error);
            return false;
        }
    }
};

// API helper functions
const API = {
    // Cloudinary upload configuration
    cloudinary: {
        cloudName: 'meaning17',
        uploadPreset: 'ml_default',
        apiKey: 'your_api_key_here'
    },

    // Upload image to Cloudinary
    uploadImage: async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', API.cloudinary.uploadPreset);
        formData.append('cloud_name', API.cloudinary.cloudName);

        try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/${API.cloudinary.cloudName}/image/upload`, {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Upload failed');
            }

            const data = await response.json();
            return data.secure_url;
        } catch (error) {
            console.error('Error uploading image:', error);
            throw error;
        }
    },

    // Simulate API delay
    delay: (ms = 1000) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};

// Authentication helper
const Auth = {
    // Check if user is logged in
    isLoggedIn: () => {
        return Storage.get('adminLoggedIn', false);
    },

    // Login user
    login: (username, password) => {
        if (username === 'meaning17' && password === 'Nghiachidang@2002') {
            Storage.set('adminLoggedIn', true);
            return true;
        }
        return false;
    },

    // Logout user
    logout: () => {
        Storage.remove('adminLoggedIn');
        window.location.href = 'login.html';
    },

    // Require authentication
    requireAuth: () => {
        if (!Auth.isLoggedIn()) {
            window.location.href = 'login.html';
            return false;
        }
        return true;
    }
};

// Product management
const ProductManager = {
    // Get all products
    getAllProducts: () => {
        const storedProducts = Storage.get('products', []);
        return [...sampleProducts, ...storedProducts];
    },

    // Add new product
    addProduct: (product) => {
        const products = Storage.get('products', []);
        const newProduct = {
            ...product,
            id: Utils.generateId(),
            createdAt: new Date().toISOString()
        };
        products.push(newProduct);
        Storage.set('products', products);
        return newProduct;
    },

    // Update product
    updateProduct: (id, updates) => {
        const products = Storage.get('products', []);
        const index = products.findIndex(p => p.id === id);
        if (index !== -1) {
            products[index] = { ...products[index], ...updates, updatedAt: new Date().toISOString() };
            Storage.set('products', products);
            return products[index];
        }
        return null;
    },

    // Delete product
    deleteProduct: (id) => {
        const products = Storage.get('products', []);
        const filteredProducts = products.filter(p => p.id !== id);
        Storage.set('products', filteredProducts);
        return true;
    },

    // Get product by ID
    getProductById: (id) => {
        const allProducts = ProductManager.getAllProducts();
        return allProducts.find(p => p.id === id);
    },

    // Filter products
    filterProducts: (filters = {}) => {
        let products = ProductManager.getAllProducts();
        
        if (filters.category) {
            products = products.filter(p => p.category === filters.category);
        }
        if (filters.size) {
            products = products.filter(p => p.size === filters.size);
        }
        if (filters.color) {
            products = products.filter(p => p.color === filters.color);
        }
        if (filters.search) {
            const searchTerm = filters.search.toLowerCase();
            products = products.filter(p => 
                p.name.toLowerCase().includes(searchTerm) ||
                p.description.toLowerCase().includes(searchTerm)
            );
        }
        
        return products;
    }
};

// Pagination helper
const Pagination = {
    // Get paginated data
    getPaginatedData: (data, page = 1, perPage = 12) => {
        const startIndex = (page - 1) * perPage;
        const endIndex = startIndex + perPage;
        const paginatedData = data.slice(startIndex, endIndex);
        
        return {
            data: paginatedData,
            currentPage: page,
            totalPages: Math.ceil(data.length / perPage),
            totalItems: data.length,
            hasNext: page < Math.ceil(data.length / perPage),
            hasPrev: page > 1
        };
    },

    // Create pagination controls
    createPaginationControls: (pagination, onPageChange) => {
        const { currentPage, totalPages, hasNext, hasPrev } = pagination;
        
        return `
            <div class="flex justify-center items-center space-x-2">
                <button 
                    class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
                    ${!hasPrev ? 'disabled' : ''}
                    onclick="onPageChange(${currentPage - 1})"
                >
                    <i class="fas fa-chevron-left mr-1"></i>Trước
                </button>
                <span class="mx-4 text-gray-700">Trang ${currentPage} / ${totalPages || 1}</span>
                <button 
                    class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
                    ${!hasNext ? 'disabled' : ''}
                    onclick="onPageChange(${currentPage + 1})"
                >
                    Sau<i class="fas fa-chevron-right ml-1"></i>
                </button>
            </div>
        `;
    }
};

// Export for use in other files
window.Utils = Utils;
window.Storage = Storage;
window.API = API;
window.Auth = Auth;
window.ProductManager = ProductManager;
window.Pagination = Pagination; 