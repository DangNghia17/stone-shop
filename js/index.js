// Homepage JavaScript
let currentPage = 1;
const productsPerPage = 12;
let allProducts = [];

// Initialize products
function initializeProducts() {
    const storedProducts = Storage.get('products', []);
    allProducts = [...sampleProducts, ...storedProducts];
    displayProducts();
    updateProductCounts();
}

// Display products
function displayProducts() {
    const filteredCategory = document.getElementById('category').value;
    const filteredSize = document.getElementById('size').value;
    const filteredColor = document.getElementById('color').value;

    const filteredProducts = allProducts.filter(product => {
        return (filteredCategory ? product.category === filteredCategory : true) &&
               (filteredSize ? product.size === filteredSize : true) &&
               (filteredColor ? product.color === filteredColor : true);
    });

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = filteredProducts.slice(startIndex, endIndex);

    const productsList = document.getElementById('products-list');
    const loading = document.getElementById('loading');
    const noProducts = document.getElementById('no-products');

    // Show/hide states
    loading.classList.remove('hidden');
    productsList.innerHTML = '';
    noProducts.classList.add('hidden');

    setTimeout(() => {
        loading.classList.add('hidden');
        
        if (productsToShow.length === 0) {
            noProducts.classList.remove('hidden');
            return;
        }

        noProducts.classList.add('hidden');
        productsToShow.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('bg-white', 'rounded-lg', 'shadow-md', 'overflow-hidden', 'hover:shadow-lg', 'transition-shadow', 'cursor-pointer');
            productElement.onclick = () => viewProductDetail(product.id);
            productElement.innerHTML = `
                <div class="img-wrapper w-full h-48">
                    <div class="img-placeholder"></div>
                    <img src="${product.imageUrl}" alt="${product.name}" 
                         class="product-img w-full h-48 object-cover" 
                         loading="lazy"
                         onload="this.classList.add('loaded'); this.parentElement.querySelector('.img-placeholder').classList.add('fade-out');" />
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
            `;
            productsList.appendChild(productElement);
        });

        updatePagination(filteredProducts.length);
        updateProductCounts(filteredProducts.length);
    }, 500);
}

// Update pagination
function updatePagination(totalProducts) {
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const pageInfo = document.getElementById('page-info');

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    pageInfo.textContent = `Trang ${currentPage} / ${totalPages || 1}`;
}

// Update product counts
function updateProductCounts(totalFiltered = allProducts.length) {
    const showingCount = document.getElementById('showing-count');
    const totalCount = document.getElementById('total-count');
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = Math.min(startIndex + productsPerPage, totalFiltered);
    
    showingCount.textContent = `${startIndex + 1}-${endIndex}`;
    totalCount.textContent = totalFiltered;
}

// View product detail
function viewProductDetail(productId) {
    Storage.set('currentProductId', productId);
    window.location.href = 'product-detail.html';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize page
    initializeProducts();

    // Pagination events
    document.getElementById('next-btn').addEventListener('click', () => {
        currentPage++;
        displayProducts();
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayProducts();
        }
    });

    // Filter events
    document.getElementById('category').addEventListener('change', () => {
        currentPage = 1;
        displayProducts();
    });

    document.getElementById('size').addEventListener('change', () => {
        currentPage = 1;
        displayProducts();
    });

    document.getElementById('color').addEventListener('change', () => {
        currentPage = 1;
        displayProducts();
    });

    document.getElementById('clear-filters').addEventListener('click', () => {
        document.getElementById('category').value = '';
        document.getElementById('size').value = '';
        document.getElementById('color').value = '';
        currentPage = 1;
        displayProducts();
    });
});

 