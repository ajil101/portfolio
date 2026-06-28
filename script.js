// ── Mobile nav toggle ──
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");
const navCta = document.getElementById("nav-cta");

const closeMobileNav = () => {
  navLinks.classList.remove("open");
  navCta.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
  burger.innerHTML = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect y="4" width="22" height="1.8" rx="1" fill="currentColor"/>
      <rect y="10.1" width="22" height="1.8" rx="1" fill="currentColor"/>
      <rect y="16.2" width="22" height="1.8" rx="1" fill="currentColor"/>
    </svg>`;
};

burger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navCta.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", String(open));
  burger.innerHTML = open
    ? `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <line x1="3" y1="3" x2="19" y2="19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          <line x1="19" y1="3" x2="3" y2="19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>`
    : `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <rect y="4" width="22" height="1.8" rx="1" fill="currentColor"/>
          <rect y="10.1" width="22" height="1.8" rx="1" fill="currentColor"/>
          <rect y="16.2" width="22" height="1.8" rx="1" fill="currentColor"/>
        </svg>`;
});

// Close nav on link click or outside click
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMobileNav);
});
document.addEventListener("click", (e) => {
  if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
    closeMobileNav();
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMobileNav();
});

// ── Scroll-spy: highlight active nav link ──
const sections = [
  "hero",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
];
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const setActive = (id) => {
  navAnchors.forEach((a) => {
    const matches = a.getAttribute("href") === "#" + id;
    a.classList.toggle("active", matches);
  });
};

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  },
  {
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0,
  },
);

sections.forEach((id) => {
  const el = document.getElementById(id);
  if (el) sectionObserver.observe(el);
});

// ── Scroll reveal ──
const reveals = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        revealObserver.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
);

reveals.forEach((el) => revealObserver.observe(el));

// ── Typewriter hero name (subtle) ──
const name = document.querySelector(".hero-name");
const fullText = name.textContent.replace("|", "").trim();
name.textContent = "";
name.innerHTML = '<span class="cursor"></span>';
let i = 0;
const typeWriter = () => {
  if (i < fullText.length) {
    name.innerHTML =
      fullText.substring(0, i + 1) +
      '<span class="cursor" aria-hidden="true"></span>';
    i++;
    setTimeout(typeWriter, i < 5 ? 80 : 60);
  }
};
setTimeout(typeWriter, 400);
