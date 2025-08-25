// Pagination
export default function renderPagination(currentPage, total, limit) {
  const totalPages = Math.ceil(total / limit);
  
  if (totalPages <= 1) return '';

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return `
    <nav class="flex items-center justify-center space-x-2" aria-label="Pagination">
      <!-- Previous Button -->
      <button data-page="${currentPage - 1}" 
              class="pagination-btn ${currentPage === 1 ? 'disabled' : ''} px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-500"
              ${currentPage === 1 ? 'disabled' : ''}>
        <i class="fas fa-chevron-left mr-1"></i>
        Trước
      </button>

      <!-- Page Numbers -->
      <div class="flex items-center space-x-1">
        ${getPageNumbers().map(page => {
          if (page === '...') {
            return '<span class="px-3 py-2 text-gray-500">...</span>';
          }
          
          const isActive = page === currentPage;
          return `
            <button data-page="${page}" 
                    class="pagination-btn px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                      isActive 
                        ? 'bg-blue-600 text-white border border-blue-600' 
                        : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-700'
                    }">
              ${page}
            </button>
          `;
        }).join('')}
      </div>

      <!-- Next Button -->
      <button data-page="${currentPage + 1}" 
              class="pagination-btn ${currentPage === totalPages ? 'disabled' : ''} px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-500"
              ${currentPage === totalPages ? 'disabled' : ''}>
        Sau
        <i class="fas fa-chevron-right ml-1"></i>
      </button>
    </nav>
  `;
}
