// Modern Portfolio JavaScript - Abshar Ilham Zamakhsyari

// ===================================
// LANGUAGE TRANSLATIONS
// ===================================
const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    // Hero Section
    hero: {
      greeting: "Hi, I'm",
      subtitle: [
        "Programmer Analyst",
        "Front-End Developer",
        "Problem Solver",
        "UI/UX Enthusiast",
      ],
      description:
        "A passionate Front-End Developer with a focus on creating beautiful, responsive, and functional web applications. I transform designs into clean code and love tackling complex technical challenges.",
    },
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    scrollDown: "Scroll Down",

    // About Section
    aboutTag: "About Me",
    aboutTitle: "Get to Know Me",
    aboutDescription: "Learn more about my journey, education, and aspirations",
    about: {
      p1: "Hello! I'm Abshar Ilham Zamakhsyari, usually called Zama. I am a Programmer Analyst focusing on Front-End Development.",
      p2: "I'm an adaptive problem solver with high initiative. I switched careers from Marine Science to Computer Science after seeing the great potential in IT. I'm currently pursuing a Bachelor's degree in Computer Science at Binus Online while applying my knowledge professionally at work.",
      p3: "I enjoy translating designs into clean, responsive, and functional code. I'm always eager to learn new things and not afraid to dive deep into complex technical challenges.",
      highlights: {
        problem_title: "Problem Solver",
        problem_desc: "Adaptive with high initiative",
        career_title: "Career Switcher",
        career_desc: "From Marine Science to IT",
        clean_title: "Clean Code Enthusiast",
        clean_desc: "Clean & functional code",
      },
      education_title: "Education & Background",
      edu_cs_title: "B.Sc. Computer Science",
      edu_cs_year: "2025 - Present",
      edu_cs_school: "BINUS University (Online Learning)",
      edu_self_title: "Self-Taught Developer",
      edu_self_year: "Mid 2024 - Present",
      edu_self_desc:
        "Built a strong foundation through the CS50 course from Harvard University, covering fundamental computer science concepts.",
      goals_title: "My Goals",
      goals_p1:
        "I am highly motivated to keep growing in this industry. My long-term goal is to become a highly skilled professional programmer, mastering not only front-end but also backend (full-stack).",
      goals_quote:
        "I believe IT has tremendous potential for the future, and I'm committed to learning as much as possible to contribute to complex and impactful projects.",
    },

    // Skills Section
    skillsTag: "Skills & Workflow",
    skillsTitle: "What I Do Best",
    skillsDescription:
      "Technologies and methodologies I use to build amazing products",
    skills: {
      core_title: "Core Technologies",
      framework_title: "Framework & Libraries",
      vc_title: "Version Control & Workflow",
      git_title: "Git & GitHub",
      git_desc:
        "Proficient with Git and GitHub for professional team collaboration",
      feature_title: "Feature Branching",
      feature_desc:
        "Applying feature branching workflow: create a new branch from main, push when done, and have it reviewed by the Project Leader before merging",
      deployment_title: "Deployment",
      deployment_note:
        "Experienced in deploying web apps to modern hosting platforms",
    },

    // Projects Section
    projectsTag: "Portfolio",
    projectsTitle: "Featured Projects",
    projectsDescription:
      "Here are some projects that showcase my abilities, both building from scratch and contributing to teams.",
    projects: {
      gcg_tag1: "Professional",
      gcg_tag2: "Vue.js",
      gcg_title: "GCGScola - ERP School Management",
      gcg_desc:
        "Contributed to the development of an ERP-based school management application (Odoo backend). Responsible for fixing front-end bugs and refining the UI to be more intuitive and engaging.",
      gcg_role: "Front-End Programmer (Professional Team)",
      gcg_tech: "Vue.js, Odoo Backend",

      rkh_tag1: "Client Project",
      rkh_tag2: "Vanilla JS",
      rkh_title: "RKH Law Office - Corporate Website",
      rkh_desc:
        "Built a corporate profile website from scratch for a law firm. Designed and developed the entire interface while coordinating with the client to translate business needs into technical designs.",
      rkh_role: "Full-Stack Developer (Independent)",
      rkh_tech: "HTML, CSS, JavaScript (From Scratch)",
    },

    // Contact Section
    contactTag: "Get In Touch",
    contactTitle: "Let's Work Together",
    contactDescription:
      "Have a project in mind? Let's discuss how we can work together",
    contact: {
      email: "Email",
      github: "GitHub",
      instagram: "Instagram",
      location: "Location",
      cta_title: "Ready to start a project?",
      cta_p:
        "I'm open to new opportunities, both freelance and full-time. Let's discuss how I can help bring your project to life!",
      cta_send: "Send Email",
      cta_github: "View GitHub",
      available: "Available for new opportunities",
      country: "Indonesia",
    },

    // Footer
    footerText:
      "A passionate Front-End Developer with a focus on creating beautiful, responsive, and functional web applications.",
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      skills: "Keahlian",
      projects: "Proyek",
      contact: "Kontak",
    },
    // Hero Section
    hero: {
      greeting: "Halo, Saya",
      subtitle: [
        "Programmer Analyst",
        "Front-End Developer",
        "Problem Solver",
        "Penggemar UI/UX",
      ],
      description:
        "Seorang Front-End Developer yang passionate dalam menciptakan aplikasi web yang indah, responsif, dan fungsional. Saya mengubah desain menjadi kode yang bersih dan suka menghadapi tantangan teknis yang kompleks.",
    },
    viewProjects: "Lihat Proyek",
    contactMe: "Hubungi Saya",
    scrollDown: "Gulir ke Bawah",

    // About Section
    aboutTag: "Tentang Saya",
    aboutTitle: "Kenali Saya Lebih Dekat",
    aboutDescription:
      "Pelajari lebih lanjut tentang perjalanan, pendidikan, dan aspirasi saya",
    about: {
      p1: "Halo! Saya Abshar Ilham Zamakhsyari, biasa dipanggil Zama. Saya adalah seorang Programmer Analyst dengan fokus utama pada Front-End Development.",
      p2: "Saya adalah seorang problem solver yang adaptif dan memiliki inisiatif tinggi. Saya beralih karier dari Ilmu Kelautan ke Computer Science karena melihat potensi besar di dunia IT. Saat ini saya menempuh S1 Computer Science di Binus Online sambil bekerja profesional.",
      p3: "Saya menikmati proses menerjemahkan desain menjadi kode yang bersih, responsif, dan fungsional. Saya selalu antusias belajar hal baru dan tidak takut mendalami tantangan teknis yang kompleks.",
      highlights: {
        problem_title: "Problem Solver",
        problem_desc: "Adaptif dengan inisiatif tinggi",
        career_title: "Career Switcher",
        career_desc: "Dari Ilmu Kelautan ke IT",
        clean_title: "Clean Code Enthusiast",
        clean_desc: "Kode yang bersih & fungsional",
      },
      education_title: "Education & Background",
      edu_cs_title: "S1 Computer Science",
      edu_cs_year: "2025 - Present",
      edu_cs_school: "BINUS University (Online Learning)",
      edu_self_title: "Self-Taught Developer",
      edu_self_year: "Mid 2024 - Present",
      edu_self_desc:
        "Membangun fondasi kuat melalui kursus CS50 dari Harvard University yang mencakup konsep fundamental ilmu komputer.",
      goals_title: "My Goals",
      goals_p1:
        "Saya sangat termotivasi untuk terus berkembang. Tujuan jangka panjang saya menjadi programmer profesional yang sangat ahli, tidak hanya front-end namun juga backend (full-stack).",
      goals_quote:
        "Saya percaya bidang IT memiliki potensi luar biasa untuk masa depan, dan saya berkomitmen belajar maksimal untuk berkontribusi pada proyek yang kompleks dan berdampak.",
    },

    // Skills Section
    skillsTag: "Keahlian & Alur Kerja",
    skillsTitle: "Yang Saya Kuasai",
    skillsDescription:
      "Teknologi dan metodologi yang saya gunakan untuk membangun produk yang luar biasa",
    skills: {
      core_title: "Core Technologies",
      framework_title: "Framework & Libraries",
      vc_title: "Version Control & Workflow",
      git_title: "Git & GitHub",
      git_desc:
        "Mahir menggunakan Git dan GitHub untuk kolaborasi tim profesional",
      feature_title: "Feature Branching",
      feature_desc:
        "Menerapkan alur kerja feature branching: buat branch baru dari main, push setelah selesai, review oleh Project Leader sebelum merge",
      deployment_title: "Deployment",
      deployment_note:
        "Berpengalaman mendeploy aplikasi web ke platform hosting modern",
    },

    // Projects Section
    projectsTag: "Portofolio",
    projectsTitle: "Proyek Unggulan",
    projectsDescription:
      "Berikut beberapa proyek yang menunjukkan kemampuan saya, baik membangun dari awal maupun berkontribusi dalam tim.",
    projects: {
      gcg_tag1: "Professional",
      gcg_tag2: "Vue.js",
      gcg_title: "GCGScola - ERP School Management",
      gcg_desc:
        "Berkontribusi pada pengembangan aplikasi manajemen sekolah berbasis ERP (Odoo backend). Bertanggung jawab memperbaiki bug front-end dan menyempurnakan UI agar lebih intuitif dan menarik.",
      gcg_role: "Front-End Programmer (Tim Profesional)",
      gcg_tech: "Vue.js, Odoo Backend",

      rkh_tag1: "Client Project",
      rkh_tag2: "Vanilla JS",
      rkh_title: "RKH Law Office - Corporate Website",
      rkh_desc:
        "Membangun website profil perusahaan dari awal untuk firma hukum. Mendesain dan mengembangkan seluruh tampilan serta menerjemahkan kebutuhan bisnis menjadi desain teknis.",
      rkh_role: "Full-Stack Developer (Independen)",
      rkh_tech: "HTML, CSS, JavaScript (From Scratch)",
    },

    // Contact Section
    contactTag: "Hubungi Saya",
    contactTitle: "Mari Bekerja Sama",
    contactDescription:
      "Punya proyek? Mari diskusikan bagaimana kita bisa bekerja sama",
    contact: {
      email: "Email",
      github: "GitHub",
      instagram: "Instagram",
      location: "Lokasi",
      cta_title: "Siap memulai proyek?",
      cta_p:
        "Saya terbuka untuk peluang baru, freelance maupun full-time. Mari diskusikan bagaimana saya bisa membantu mewujudkan proyek Anda!",
      cta_send: "Kirim Email",
      cta_github: "Lihat GitHub",
      available: "Tersedia untuk peluang baru",
      country: "Indonesia",
    },

    // Footer
    footerText:
      "Front-End Developer yang passionate dalam menciptakan pengalaman web yang indah dan fungsional.",
  },
};

// ===================================
// THEME & LANGUAGE STATE
// ===================================
let currentLang = localStorage.getItem("language") || "en";
let currentTheme = localStorage.getItem("theme") || "light";

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  easing: "ease-out-cubic",
  once: true,
  offset: 100,
  delay: 100,
});

// ===================================
// DARK MODE TOGGLE
// ===================================
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

function setTheme(theme) {
  if (theme === "dark") {
    body.classList.add("dark-mode");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    body.classList.remove("dark-mode");
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
  localStorage.setItem("theme", theme);
  currentTheme = theme;
}

// Initialize theme
setTheme(currentTheme);

themeToggle.addEventListener("click", () => {
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
});

// ===================================
// LANGUAGE TOGGLE
// ===================================
const langToggle = document.getElementById("langToggle");

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("language", lang);

  // Update language button label (show current)
  if (langToggle) langToggle.textContent = lang.toUpperCase();

  // Update typing animation texts (guard for first run)
  if (typeof typingTexts !== "undefined") {
    typingTexts = translations[lang].hero.subtitle;
  }

  // Update all translatable elements
  updateTranslations(lang);
}

function updateTranslations(lang) {
  const t = translations[lang];

  // Generic: data-i18n mapping
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = key
      .split(".")
      .reduce((acc, k) => (acc ? acc[k] : undefined), t);
    if (typeof value === "string") {
      // Buttons containing icons: keep existing HTML if any icon present
      if (el.querySelector("i")) {
        const iconHtml = el.querySelector("i").outerHTML + " ";
        el.innerHTML = iconHtml + value;
      } else {
        el.textContent = value;
      }
    }
  });

  // Scroll indicator
  const scrollText = document.querySelector(".scroll-indicator p");
  if (scrollText) scrollText.textContent = t.scrollDown;

  // Section content updates (fallback for sections without data-i18n)
  updateSectionContent("about", t.aboutTag, t.aboutTitle, t.aboutDescription);
  updateSectionContent(
    "skills",
    t.skillsTag,
    t.skillsTitle,
    t.skillsDescription
  );
  updateSectionContent(
    "projects",
    t.projectsTag,
    t.projectsTitle,
    t.projectsDescription
  );
  updateSectionContent(
    "contact",
    t.contactTag,
    t.contactTitle,
    t.contactDescription
  );

  // ===== About section detailed content =====
  const aboutSection = document.getElementById("about");
  if (aboutSection && t.about) {
    const aboutIntro = aboutSection.querySelector(".about-intro");
    if (aboutIntro) aboutIntro.textContent = t.about.p1;

    const aboutParas = aboutSection.querySelectorAll(".about-text p");
    if (aboutParas[1]) aboutParas[1].textContent = t.about.p2;
    if (aboutParas[2]) aboutParas[2].textContent = t.about.p3;

    // Highlights (3 items)
    const highlights = aboutSection.querySelectorAll(
      ".about-highlights .highlight-item"
    );
    if (highlights[0]) {
      const h4 = highlights[0].querySelector(".highlight-content h4");
      const p = highlights[0].querySelector(".highlight-content p");
      if (h4) h4.textContent = t.about.highlights.problem_title;
      if (p) p.textContent = t.about.highlights.problem_desc;
    }
    if (highlights[1]) {
      const h4 = highlights[1].querySelector(".highlight-content h4");
      const p = highlights[1].querySelector(".highlight-content p");
      if (h4) h4.textContent = t.about.highlights.career_title;
      if (p) p.textContent = t.about.highlights.career_desc;
    }
    if (highlights[2]) {
      const h4 = highlights[2].querySelector(".highlight-content h4");
      const p = highlights[2].querySelector(".highlight-content p");
      if (h4) h4.textContent = t.about.highlights.clean_title;
      if (p) p.textContent = t.about.highlights.clean_desc;
    }

    const eduCard = aboutSection.querySelector(".education-card");
    if (eduCard) {
      const eduTitle = eduCard.querySelector("h3");
      if (eduTitle) eduTitle.textContent = t.about.education_title;
      const eduItems = eduCard.querySelectorAll(".education-item");
      if (eduItems[0]) {
        const h4 = eduItems[0].querySelector(".education-header h4");
        const year = eduItems[0].querySelector(".education-year");
        const school = eduItems[0].querySelector(".education-school");
        if (h4) h4.textContent = t.about.edu_cs_title;
        if (year) year.textContent = t.about.edu_cs_year;
        if (school) school.textContent = t.about.edu_cs_school;
      }
      if (eduItems[1]) {
        const h4 = eduItems[1].querySelector(".education-header h4");
        const year = eduItems[1].querySelector(".education-year");
        const school = eduItems[1].querySelector(".education-school");
        if (h4) h4.textContent = t.about.edu_self_title;
        if (year) year.textContent = t.about.edu_self_year;
        if (school) school.textContent = t.about.edu_self_desc;
      }
    }

    const goalsCard = aboutSection.querySelector(".goals-card");
    if (goalsCard) {
      const gTitle = goalsCard.querySelector("h3");
      const gPara = goalsCard.querySelector("p:not(.goals-quote)");
      const gQuote = goalsCard.querySelector(".goals-quote");
      if (gTitle) gTitle.textContent = t.about.goals_title;
      if (gPara) gPara.textContent = t.about.goals_p1;
      if (gQuote) gQuote.textContent = t.about.goals_quote;
    }
  }

  // ===== Skills section detailed content =====
  const skillsSection = document.getElementById("skills");
  if (skillsSection && t.skills) {
    const categories = skillsSection.querySelectorAll(
      ".skills-category .category-header h3"
    );
    if (categories[0]) categories[0].textContent = t.skills.core_title;
    if (categories[1]) categories[1].textContent = t.skills.framework_title;
    if (categories[2]) categories[2].textContent = t.skills.vc_title;
    if (categories[3]) categories[3].textContent = t.skills.deployment_title;

    const workflowItems = skillsSection.querySelectorAll(".workflow-item");
    if (workflowItems[0]) {
      const h4 = workflowItems[0].querySelector("h4");
      const p = workflowItems[0].querySelector("p");
      if (h4) h4.textContent = t.skills.git_title;
      if (p) p.textContent = t.skills.git_desc;
    }
    if (workflowItems[1]) {
      const h4 = workflowItems[1].querySelector("h4");
      const p = workflowItems[1].querySelector("p");
      if (h4) h4.textContent = t.skills.feature_title;
      if (p) p.textContent = t.skills.feature_desc;
    }

    const depNote = skillsSection.querySelector(".category-note");
    if (depNote) depNote.textContent = t.skills.deployment_note;
  }

  // ===== Projects section cards =====
  const projectCards = document.querySelectorAll(
    ".projects-grid .project-card"
  );
  if (projectCards[0] && t.projects) {
    const card = projectCards[0];
    const tags = card.querySelectorAll(".project-tag");
    if (tags[0]) tags[0].textContent = t.projects.gcg_tag1;
    if (tags[1]) tags[1].textContent = t.projects.gcg_tag2;
    const title = card.querySelector(".project-title");
    const desc = card.querySelector(".project-description");
    const role = card.querySelector(".project-role span");
    const tech = card.querySelector(".project-tech span");
    if (title) title.textContent = t.projects.gcg_title;
    if (desc) desc.textContent = t.projects.gcg_desc;
    if (role) role.textContent = t.projects.gcg_role;
    if (tech) tech.textContent = t.projects.gcg_tech;
  }
  if (projectCards[1] && t.projects) {
    const card = projectCards[1];
    const tags = card.querySelectorAll(".project-tag");
    if (tags[0]) tags[0].textContent = t.projects.rkh_tag1;
    if (tags[1]) tags[1].textContent = t.projects.rkh_tag2;
    const title = card.querySelector(".project-title");
    const desc = card.querySelector(".project-description");
    const role = card.querySelector(".project-role span");
    const tech = card.querySelector(".project-tech span");
    if (title) title.textContent = t.projects.rkh_title;
    if (desc) desc.textContent = t.projects.rkh_desc;
    if (role) role.textContent = t.projects.rkh_role;
    if (tech) tech.textContent = t.projects.rkh_tech;
  }

  // ===== Contact section details =====
  const contactSection = document.getElementById("contact");
  if (contactSection && t.contact) {
    const cards = contactSection.querySelectorAll(
      ".contact-info .contact-card"
    );
    if (cards[0]) cards[0].querySelector("h3").textContent = t.contact.email;
    if (cards[1]) cards[1].querySelector("h3").textContent = t.contact.github;
    if (cards[2])
      cards[2].querySelector("h3").textContent = t.contact.instagram;
    if (cards[3]) {
      cards[3].querySelector("h3").textContent = t.contact.location;
      const country = cards[3].querySelector("p");
      if (country) country.textContent = t.contact.country;
    }

    const cta = contactSection.querySelector(".contact-cta .cta-card");
    if (cta) {
      const h3 = cta.querySelector("h3");
      const p = cta.querySelector("p");
      if (h3) h3.textContent = t.contact.cta_title;
      if (p) p.textContent = t.contact.cta_p;
      const btns = cta.querySelectorAll(".cta-buttons .btn");
      if (btns[0])
        btns[0].innerHTML =
          '<i class="fas fa-envelope"></i> ' + t.contact.cta_send;
      if (btns[1])
        btns[1].innerHTML =
          '<i class="fab fa-github"></i> ' + t.contact.cta_github;
      const avail = cta.querySelector(".availability-badge span");
      if (avail) avail.textContent = t.contact.available;
    }
  }

  // ===== Footer quick links and texts =====
  const footer = document.querySelector("footer.footer");
  if (footer) {
    const quick = footer.querySelector(".footer-links");
    if (quick) {
      const links = quick.querySelectorAll("a");
      if (links[0]) links[0].textContent = t.nav.home;
      if (links[1]) links[1].textContent = t.nav.about;
      if (links[2]) links[2].textContent = t.nav.skills;
      if (links[3]) links[3].textContent = t.nav.projects;
      if (links[4]) links[4].textContent = t.nav.contact;
    }
  }
}

function updateSectionContent(sectionId, tag, title, description) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const tagEl = section.querySelector(".section-tag");
  const titleEl = section.querySelector(".section-title");
  const descEl = section.querySelector(".section-description");

  if (tagEl) tagEl.textContent = tag;
  if (titleEl) titleEl.textContent = title;
  if (descEl) descEl.textContent = description;
}

// Initialize language after DOM is ready (avoid early access before vars)
document.addEventListener("DOMContentLoaded", () => setLanguage(currentLang));

langToggle.addEventListener("click", () => {
  // Add transition animation
  document.body.style.transition = "opacity 0.3s ease";
  document.body.style.opacity = "0.7";

  setTimeout(() => {
    const newLang = currentLang === "en" ? "id" : "en";
    setLanguage(newLang);

    // Fade back in
    setTimeout(() => {
      document.body.style.opacity = "1";
      // Remove transition after animation completes
      setTimeout(() => {
        document.body.style.transition = "";
      }, 300);
    }, 50);
  }, 150);

  // Restart typing animation (single timer)
  charIndex = 0;
  textIndex = 0;
  isDeleting = false;
  if (typingTimer) clearTimeout(typingTimer);
  if (typingElement) {
    typingElement.textContent = "";
    typingTimer = setTimeout(type, 500);
  }
});

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("mainNav");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ===================================
// MOBILE MENU TOGGLE
// ===================================
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    if (navMenu.classList.contains("active")) {
      // Closing animation
      navMenu.classList.add("closing");
      setTimeout(() => {
        navMenu.classList.remove("active");
        navMenu.classList.remove("closing");
      }, 300); // Match animation duration
    } else {
      // Opening
      navMenu.classList.add("active");
    }
    navToggle.classList.toggle("active");
  });
}

// ===================================
// SMOOTH SCROLLING
// ===================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      // Close mobile menu with animation
      if (navMenu && navMenu.classList.contains("active")) {
        navMenu.classList.add("closing");
        navToggle.classList.remove("active");
        setTimeout(() => {
          navMenu.classList.remove("active");
          navMenu.classList.remove("closing");
        }, 300);
      }
    }
  });
});

// ===================================
// ACTIVE NAVIGATION LINK
// ===================================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ===================================
// TYPING ANIMATION
// ===================================
let typingTexts = translations[currentLang].hero.subtitle;
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimer = null; // ensure single timer instance
const typingElement = document.querySelector(".typing-text");

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

  // keep only one active timer
  if (typingTimer) clearTimeout(typingTimer);
  typingTimer = setTimeout(type, typeSpeed);
}

// Start typing animation
window.addEventListener("load", () => {
  setTimeout(type, 1000);
});

// ===================================
// PARALLAX EFFECT
// ===================================
window.addEventListener("mousemove", (e) => {
  const orbs = document.querySelectorAll(".gradient-orb");
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;

  orbs.forEach((orb, index) => {
    const speed = (index + 1) * 20;
    const x = (mouseX - 0.5) * speed;
    const y = (mouseY - 0.5) * speed;
    orb.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// ===================================
// INTERSECTION OBSERVER
// ===================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, observerOptions);

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// ===================================
// SMOOTH REVEAL ANIMATION
// ===================================
const style = document.createElement("style");
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

// ===================================
// PAGE LOAD ANIMATION
// ===================================
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  document.body.style.opacity = "1";
});

document.body.style.opacity = "0";
document.body.style.transition = "opacity 0.3s ease";

console.log("Portfolio loaded successfully! 🚀");
console.log("Current language:", currentLang);
console.log("Current theme:", currentTheme);
