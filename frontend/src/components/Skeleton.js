// Skeleton loading
export default function renderSkeleton(count = 12) {
  return `
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2 md:px-0 animate-pulse">
      ${Array(count).fill('').map(() => `
        <div class="bg-white rounded-xl shadow-card p-4 flex flex-col items-center">
          <div class="w-full aspect-square bg-gray-200 rounded-lg mb-3"></div>
          <div class="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
          <div class="h-3 bg-gray-100 rounded w-1/2 mb-2"></div>
          <div class="h-3 bg-gray-100 rounded w-3/4 mb-2"></div>
          <div class="h-8 bg-gray-200 rounded w-1/2"></div>
        </div>
      `).join('')}
    </div>
  `;
}
