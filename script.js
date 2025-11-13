// ===================================
// MODERN GAMING PORTFOLIO JAVASCRIPT
// Interactive Features & Animations
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // ==============================
  // INITIALIZE AOS ANIMATIONS
  // ==============================
  AOS.init({
    duration: 1000,
    easing: "ease-out-cubic",
    once: false,
    mirror: true,
    offset: 100,
  });

  // ==============================
  // TYPING ANIMATION (TYPED.JS)
  // ==============================
  const typed = new Typed("#typed-name", {
    strings: [
      "Jago Banget",
      "zama",
      "Top Global Harith",
      "Mantep",
      "RaAwWrrRRr",
    ],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    startDelay: 500,
    loop: true,
    showCursor: true,
    cursorChar: "⚡",
    smartBackspace: true,
  });

  // ==============================
  // PARTICLES.JS CONFIGURATION
  // ==============================
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: ["#667eea", "#764ba2", "#f093fb", "#4facfe"],
        },
        shape: {
          type: ["circle", "triangle"],
          stroke: {
            width: 0,
            color: "#000000",
          },
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 4,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: true,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 0.8,
            },
          },
          push: {
            particles_nb: 4,
          },
        },
      },
      retina_detect: true,
    });
  }

  // ==============================
  // NAVBAR SCROLL EFFECT
  // ==============================
  const navbar = document.querySelector(".navbar-glass");
  let lastScroll = 0;

  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset;

    // Add scrolled class when page is scrolled
    if (currentScroll > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    lastScroll = currentScroll;
  });

  // ==============================
  // SMOOTH SCROLL FOR NAVIGATION
  // ==============================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        const offset = 80; // Navbar height
        const targetPosition = target.offsetTop - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });

        // Close mobile menu if open
        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      }
    });
  });

  // ==============================
  // ACTIVE NAVIGATION HIGHLIGHT
  // ==============================
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function highlightNav() {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNav);

  // ==============================
  // BACK TO TOP BUTTON
  // ==============================
  const backToTopButton = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  // ==============================
  // FORM SUBMISSION HANDLER
  // ==============================
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("pesan").value;

      // Simple validation
      if (name && email && message) {
        // Show success message (you can replace this with actual form submission)
        showNotification("Message sent successfully! 🎮", "success");

        // Reset form
        contactForm.reset();
      } else {
        showNotification("Please fill in all fields! ⚠️", "error");
      }
    });
  }

  // ==============================
  // NOTIFICATION SYSTEM
  // ==============================
  function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.innerHTML = `
      <i class="fas fa-${
        type === "success" ? "check-circle" : "exclamation-circle"
      }"></i>
      <span>${message}</span>
    `;

    // Add styles
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 30px;
      background: ${
        type === "success"
          ? "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
          : "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
      };
      color: white;
      padding: 20px 30px;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      gap: 15px;
      font-weight: 600;
      z-index: 10000;
      animation: slideIn 0.5s ease-out;
      max-width: 350px;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Remove after 4 seconds
    setTimeout(() => {
      notification.style.animation = "slideOut 0.5s ease-out";
      setTimeout(() => {
        notification.remove();
      }, 500);
    }, 4000);
  }

  // Add notification animations to CSS
  const style = document.createElement("style");
  style.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(400px);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // ==============================
  // ACHIEVEMENT CARDS TILT EFFECT
  // ==============================
  const achievementCards = document.querySelectorAll(".achievement-card");

  achievementCards.forEach((card) => {
    card.addEventListener("mousemove", function (e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
    });

    card.addEventListener("mouseleave", function () {
      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
    });
  });

  // ==============================
  // STAT COUNTER ANIMATION
  // ==============================
  function animateCounter(element, target) {
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target;
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, 16);
  }

  // Trigger counter animation on scroll
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains("counted")
        ) {
          const number = entry.target.querySelector(".stat-number");
          const targetValue = parseInt(number.textContent.replace(/\D/g, ""));

          if (!isNaN(targetValue)) {
            animateCounter(number, targetValue);
          }

          entry.target.classList.add("counted");
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll(".stat-item").forEach((stat) => {
    statsObserver.observe(stat);
  });

  // ==============================
  // CURSOR TRAIL EFFECT (OPTIONAL)
  // ==============================
  const cursorDot = document.createElement("div");
  cursorDot.className = "cursor-dot";
  cursorDot.style.cssText = `
    position: fixed;
    width: 8px;
    height: 8px;
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 10000;
    opacity: 0;
    transition: opacity 0.3s;
    box-shadow: 0 0 20px rgba(79, 172, 254, 0.8);
  `;
  document.body.appendChild(cursorDot);

  document.addEventListener("mousemove", (e) => {
    cursorDot.style.opacity = "1";
    cursorDot.style.left = e.clientX - 4 + "px";
    cursorDot.style.top = e.clientY - 4 + "px";
  });

  document.addEventListener("mouseleave", () => {
    cursorDot.style.opacity = "0";
  });

  // ==============================
  // PARALLAX EFFECT FOR HERO & BACKGROUNDS
  // ==============================
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    
    // Parallax for hero elements
    const parallaxElements = document.querySelectorAll(
      ".profile-image-wrapper, .hero-title"
    );
    parallaxElements.forEach((element) => {
      const speed = 0.5;
      element.style.transform = `translateY(${scrolled * speed}px)`;
    });

    // Parallax for hero background (Harith 1)
    const jumbotron = document.querySelector(".jumbotron");
    if (jumbotron) {
      const yPos = -(scrolled * 0.3);
      jumbotron.style.backgroundPosition = `center ${yPos}px`;
    }

    // Parallax for achievements background (Harith 2)
    const achievements = document.querySelector("#achievements");
    if (achievements) {
      const rect = achievements.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible) {
        const yPos = (scrolled - achievements.offsetTop) * 0.2;
        achievements.style.backgroundPosition = `center ${yPos}px`;
      }
    }
  });

  // ==============================
  // EASTER EGG - KONAMI CODE
  // ==============================
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];
  let konamiIndex = 0;

  document.addEventListener("keydown", (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        activateEasterEgg();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });

  function activateEasterEgg() {
    showNotification("🎮 LEGENDARY MODE ACTIVATED! 🏆", "success");

    // Add rainbow effect to profile image
    const profileImage = document.querySelector(".profile-image");
    profileImage.style.animation = "rainbow 2s linear infinite";

    // Add rainbow animation
    const rainbowStyle = document.createElement("style");
    rainbowStyle.textContent = `
      @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
      }
    `;
    document.head.appendChild(rainbowStyle);

    setTimeout(() => {
      profileImage.style.animation = "profileFloat 3s ease-in-out infinite";
    }, 5000);
  }

  // ==============================
  // CONSOLE MESSAGE
  // ==============================
  console.log(
    "%c⚡ Time Traveler Harith Portfolio ⚡",
    "font-size: 24px; color: #a855f7; font-weight: bold; text-shadow: 0 0 10px rgba(168, 85, 247, 1);"
  );
  console.log(
    "%c🔮 Master of Space and Time Magic 🔮",
    "font-size: 16px; color: #c084fc; font-weight: bold;"
  );
  console.log(
    "%cTry the Konami Code for a legendary surprise! ↑ ↑ ↓ ↓ ← → ← → B A",
    "font-size: 14px; color: #fbbf24;"
  );

  // ==============================
  // LAZY LOAD IMAGES
  // ==============================
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img").forEach((img) => {
    imageObserver.observe(img);
  });

  // ==============================
  // PERFORMANCE: Reduce animations on mobile
  // ==============================
  if (window.innerWidth < 768) {
    AOS.init({
      duration: 800,
      once: true,
    });
  }

  // ==============================
  // LOG INITIALIZATION
  // ==============================
  console.log("✅ All animations and interactions initialized successfully!");
});
