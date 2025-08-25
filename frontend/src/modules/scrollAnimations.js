// Scroll-triggered animations module
export function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        
        // Add staggered animations for child elements
        const animatedChildren = entry.target.querySelectorAll('.animate-fade-in-up, .animate-fade-in-left, .animate-fade-in-right, .animate-scale-in, .animate-bounce-in');
        animatedChildren.forEach((child, index) => {
          setTimeout(() => {
            child.style.opacity = '1';
            child.style.transform = 'translateY(0) scale(1)';
          }, index * 100);
        });
      }
    });
  }, observerOptions);

  // Observe all elements with scroll-animate class
  const scrollElements = document.querySelectorAll('.scroll-animate');
  scrollElements.forEach(el => observer.observe(el));

  // Observe process steps for staggered animation
  const processSteps = document.querySelectorAll('.process-step');
  processSteps.forEach((step, index) => {
    step.style.opacity = '0';
    step.style.transform = 'translateX(-30px)';
    
    const stepObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
          }, index * 200);
          stepObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    stepObserver.observe(step);
  });

  // Observe feature cards for staggered animation
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 150);
          cardObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    
    cardObserver.observe(card);
  });

  // Observe project cards for staggered animation
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px) rotateX(10deg)';
    
    const projectObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) rotateX(0)';
          }, index * 200);
          projectObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    
    projectObserver.observe(card);
  });

  // Parallax effect for background elements
  const parallaxElements = document.querySelectorAll('.parallax');
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.5;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });

  // Counter animation for statistics
  const statCounters = document.querySelectorAll('.stat-counter');
  statCounters.forEach(counter => {
    const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
    const increment = target / 50;
    let current = 0;
    
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            counter.textContent = Math.floor(current).toLocaleString() + '+';
          }, 50);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    counterObserver.observe(counter);
  });

  // Floating animation for icons
  const floatingIcons = document.querySelectorAll('.feature-icon');
  floatingIcons.forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.2}s`;
    icon.classList.add('animate-float');
  });

  // Glow effect for buttons
  const glowButtons = document.querySelectorAll('.btn-animate');
  glowButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.classList.add('animate-glow');
    });
    
    button.addEventListener('mouseleave', () => {
      button.classList.remove('animate-glow');
    });
  });

  // Shake animation for interactive elements
  const shakeElements = document.querySelectorAll('.hover-scale');
  shakeElements.forEach(element => {
    element.addEventListener('click', () => {
      element.classList.add('animate-shake');
      setTimeout(() => {
        element.classList.remove('animate-shake');
      }, 500);
    });
  });

  // Text reveal animation
  const textElements = document.querySelectorAll('h2, h3, p');
  textElements.forEach((text, index) => {
    if (text.textContent.length > 20) {
      text.classList.add('text-reveal');
      text.innerHTML = text.textContent.split(' ').map((word, wordIndex) => 
        `<span style="animation-delay: ${(index * 0.1 + wordIndex * 0.05)}s">${word}</span>`
      ).join(' ');
    }
  });

  // Smooth reveal for sections
  const sections = document.querySelectorAll('section');
  sections.forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.transition = 'all 0.8s ease-out';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 100);
          sectionObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    sectionObserver.observe(section);
  });
}

// Initialize animations when DOM is ready
export function initHomeAnimations() {
  // Wait for a short delay to ensure all elements are rendered
  setTimeout(() => {
    initScrollAnimations();
  }, 100);
}
