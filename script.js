// Modern Portfolio JavaScript - Abshar Ilham Zamakhsyari

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  easing: 'ease-out-cubic',
  once: true,
  offset: 100,
  delay: 100
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('mainNav');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });
}

// Smooth scrolling for navigation links
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
      
      // Close mobile menu
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
      }
    }
  });
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
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
  });
});

// Typing animation for hero subtitle
const typingTexts = [
  'Front-End Developer',
  'Vue.js Specialist',
  'Problem Solver',
  'UI/UX Enthusiast'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector('.typing-text');

function type() {
  if (!typingElement) return;
  
  const currentText = typingTexts[textIndex];
  
  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }
  
  let typeSpeed = isDeleting ? 50 : 100;
  
  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % typingTexts.length;
    typeSpeed = 500;
  }
  
  setTimeout(type, typeSpeed);
}

// Start typing animation when page loads
window.addEventListener('load', () => {
  setTimeout(type, 1000);
});

// Parallax effect for gradient orbs
window.addEventListener('mousemove', (e) => {
  const orbs = document.querySelectorAll('.gradient-orb');
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;
  
  orbs.forEach((orb, index) => {
    const speed = (index + 1) * 20;
    const x = (mouseX - 0.5) * speed;
    const y = (mouseY - 0.5) * speed;
    orb.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Add smooth reveal animation class
const style = document.createElement('style');
style.textContent = `
  section {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  section.fade-in {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

// Counter animation for stats (if you add stats later)
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

// Initialize counters when they come into view
const counterElements = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.getAttribute('data-count'));
      animateCounter(entry.target, target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counterElements.forEach(el => counterObserver.observe(el));

// Add loading animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  // Remove loading class after animation
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

// Smooth page transitions
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';

console.log('Portfolio loaded successfully! 🚀');
