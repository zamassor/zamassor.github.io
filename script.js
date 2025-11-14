// ===================================
// INITIALIZE AOS (Animate On Scroll)
// ===================================
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false,
  offset: 100
});

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('mainNav');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    }
  });
});

// ===================================
// ACTIVE NAVIGATION LINK ON SCROLL
// ===================================
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link-custom');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
    if (current === '' && link.getAttribute('href') === '#') {
      link.classList.add('active');
    }
  });
});

// ===================================
// ANIMATED COUNTER FOR STATS
// ===================================
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start);
    }
  }, 16);
}

// Intersection Observer for counter animation
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNumbers = entry.target.querySelectorAll('.stat-number');
      statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        animateCounter(stat, target);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsSection = document.querySelector('#stats');
if (statsSection) {
  statsObserver.observe(statsSection);
}

// ===================================
// FORM SUBMISSION HANDLER
// ===================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('pesan').value;
    
    // Show success message (you can customize this)
    alert(`Thank you ${name}! Your message has been received. We'll get back to you at ${email} soon!`);
    
    // Reset form
    contactForm.reset();
    
    // You can add actual form submission logic here
    // For example, using fetch() to send data to a server
  });
}

// ===================================
// PARALLAX EFFECT FOR HERO SECTION
// ===================================
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const heroContent = document.querySelector('.hero-content');
  
  if (heroContent) {
    heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    heroContent.style.opacity = 1 - (scrolled * 0.002);
  }
});

// ===================================
// TYPING EFFECT FOR HERO SUBTITLE (Optional)
// ===================================
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Uncomment below to enable typing effect
// window.addEventListener('load', function() {
//   const subtitle = document.querySelector('.hero-subtitle');
//   if (subtitle) {
//     const originalText = subtitle.textContent;
//     typeWriter(subtitle, originalText, 50);
//   }
// });

// ===================================
// ACHIEVEMENT CARD IMAGE MODAL (Optional Enhancement)
// ===================================
document.querySelectorAll('.achievement-img-wrapper').forEach(wrapper => {
  wrapper.addEventListener('click', function() {
    const img = this.querySelector('img');
    if (img) {
      // You can implement a lightbox/modal here
      console.log('Image clicked:', img.src);
    }
  });
});

// ===================================
// LOADING ANIMATION
// ===================================
window.addEventListener('load', function() {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    document.body.style.opacity = '1';
  }, 100);
});

// ===================================
// MOUSE CURSOR TRAIL EFFECT (Optional)
// ===================================
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', function(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// ===================================
// SCROLL TO TOP BUTTON
// ===================================
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  font-size: 1.2rem;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.style.opacity = '1';
    scrollToTopBtn.style.visibility = 'visible';
  } else {
    scrollToTopBtn.style.opacity = '0';
    scrollToTopBtn.style.visibility = 'hidden';
  }
});

scrollToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

scrollToTopBtn.addEventListener('mouseenter', function() {
  this.style.transform = 'scale(1.1) translateY(-5px)';
});

scrollToTopBtn.addEventListener('mouseleave', function() {
  this.style.transform = 'scale(1) translateY(0)';
});

// ===================================
// NEWSLETTER FORM HANDLER
// ===================================
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with ${email}!`);
    this.reset();
  });
}

// ===================================
// ADD HOVER SOUND EFFECT (Optional)
// ===================================
function addHoverSound() {
  const buttons = document.querySelectorAll('.btn, .badge-custom, .social-icon');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      // You can add sound effect here
      // const audio = new Audio('hover-sound.mp3');
      // audio.play();
    });
  });
}

// Call the function
addHoverSound();

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================
// Lazy load images
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img').forEach(img => {
    imageObserver.observe(img);
  });
}

// ===================================
// CONSOLE MESSAGE
// ===================================
console.log('%c🎮 Welcome to Absor\'s Portfolio! 🎮', 'color: #20c997; font-size: 20px; font-weight: bold;');
console.log('%cMLBB Tag: zama | Harith Main', 'color: #667eea; font-size: 14px;');
console.log('%cTop 8 Indonesia | Mythical Immortal', 'color: #764ba2; font-size: 14px;');

// ===================================
// EASTER EGG - KONAMI CODE
// ===================================
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);
  
  if (konamiCode.join(',') === konamiPattern.join(',')) {
    document.body.style.animation = 'rainbow 2s linear infinite';
    alert('🎉 Easter Egg Activated! You found the secret! 🎮');
    
    // Add rainbow animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
  }
});

// ===================================
// REFRESH AOS ON WINDOW RESIZE
// ===================================
window.addEventListener('resize', function() {
  AOS.refresh();
});

console.log('%c✨ All animations and interactive features loaded successfully!', 'color: #20c997; font-weight: bold;');
