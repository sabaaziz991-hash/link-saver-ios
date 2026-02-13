(function () {
  const yearNodes = document.querySelectorAll("[data-year]");
  const year = new Date().getFullYear();
  yearNodes.forEach((node) => {
    node.textContent = String(year);
  });

  const path = window.location.pathname.replace(/\/$/, "") || "/index.html";
  const navLinks = document.querySelectorAll("[data-nav]");
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;
    const normalized = href === "index.html" ? "/index.html" : `/${href.replace(/^\//, "")}`;
    if (path === normalized || (path === "/" && href === "index.html")) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });

  const revealNodes = document.querySelectorAll(".reveal");
  if (!revealNodes.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.1 }
  );

  revealNodes.forEach((node, index) => {
    const delayMs = Math.min(index * 45, 260);
    node.style.transitionDelay = `${delayMs}ms`;
    observer.observe(node);
  });
})();
