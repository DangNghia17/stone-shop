// Testimonials Carousel Functions
let currentTestimonial = 0;
let testimonials = [];
let dots = [];
let isDragging = false;
let startX = 0;
let currentX = 0;
let startTime = 0;

export function initTestimonialsCarousel() {
  testimonials = document.querySelectorAll('.testimonial-slide');
  dots = document.querySelectorAll('.testimonial-dot');
  
  if (testimonials.length > 0) {
    showTestimonial(0);
    
    // Add touch/mouse event listeners for drag/swipe
    const carousel = document.getElementById('testimonials-carousel');
    if (carousel) {
      // Touch events for mobile
      carousel.addEventListener('touchstart', handleTouchStart, { passive: false });
      carousel.addEventListener('touchmove', handleTouchMove, { passive: false });
      carousel.addEventListener('touchend', handleTouchEnd, { passive: false });
      
      // Mouse events for desktop
      carousel.addEventListener('mousedown', handleMouseDown);
      carousel.addEventListener('mousemove', handleMouseMove);
      carousel.addEventListener('mouseup', handleMouseUp);
      carousel.addEventListener('mouseleave', handleMouseUp);
      
      // Prevent text selection during drag
      carousel.addEventListener('selectstart', (e) => e.preventDefault());
    }
    
    // Auto-rotate testimonials every 6 seconds
    setInterval(nextTestimonial, 6000);
  }
}

function handleTouchStart(e) {
  startX = e.touches[0].clientX;
  startTime = Date.now();
  isDragging = true;
}

function handleTouchMove(e) {
  if (!isDragging) return;
  e.preventDefault();
  currentX = e.touches[0].clientX;
}

function handleTouchEnd(e) {
  if (!isDragging) return;
  isDragging = false;
  
  const deltaX = currentX - startX;
  const deltaTime = Date.now() - startTime;
  const minSwipeDistance = 50;
  const maxSwipeTime = 300;
  
  if (Math.abs(deltaX) > minSwipeDistance && deltaTime < maxSwipeTime) {
    if (deltaX > 0) {
      previousTestimonial();
    } else {
      nextTestimonial();
    }
  }
}

function handleMouseDown(e) {
  startX = e.clientX;
  startTime = Date.now();
  isDragging = true;
  e.preventDefault();
}

function handleMouseMove(e) {
  if (!isDragging) return;
  currentX = e.clientX;
}

function handleMouseUp(e) {
  if (!isDragging) return;
  isDragging = false;
  
  const deltaX = currentX - startX;
  const deltaTime = Date.now() - startTime;
  const minSwipeDistance = 50;
  const maxSwipeTime = 300;
  
  if (Math.abs(deltaX) > minSwipeDistance && deltaTime < maxSwipeTime) {
    if (deltaX > 0) {
      previousTestimonial();
    } else {
      nextTestimonial();
    }
  }
}

function showTestimonial(index) {
  if (testimonials.length === 0) return;
  
  // Hide all testimonials with smooth transition
  testimonials.forEach((slide, i) => {
    if (i === index) {
      slide.classList.remove('hidden');
      slide.classList.add('active');
      // Add entrance animation
      setTimeout(() => {
        slide.style.transform = 'translateX(0) scale(1)';
        slide.style.opacity = '1';
      }, 50);
    } else {
      slide.classList.add('hidden');
      slide.classList.remove('active');
      slide.style.transform = 'translateX(100px) scale(0.95)';
      slide.style.opacity = '0';
    }
  });
  
  // Update dots
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('bg-blue-500', 'active');
      dot.classList.remove('bg-gray-300');
    } else {
      dot.classList.remove('bg-blue-500', 'active');
      dot.classList.add('bg-gray-300');
    }
  });
  
  currentTestimonial = index;
}

function nextTestimonial() {
  if (testimonials.length === 0) return;
  const next = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(next);
}

function previousTestimonial() {
  if (testimonials.length === 0) return;
  const prev = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(prev);
}

// Make functions globally available
window.showTestimonial = showTestimonial;
window.nextTestimonial = nextTestimonial;
window.previousTestimonial = previousTestimonial;
