// Fade-in scroll animation + sparkles
const observerTargets = document.querySelectorAll('section, .card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      // Fade in
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';

      // Stop observing once visible
      observer.unobserve(entry.target);

      // Sparkles effect
      for (let i = 0; i < 6; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';

        sparkle.style.left = Math.random() * entry.target.offsetWidth + 'px';
        sparkle.style.top = Math.random() * entry.target.offsetHeight + 'px';

        entry.target.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 1500);
      }
    }
  });
}, { threshold: 0.2 });

// Apply to all sections + cards
observerTargets.forEach(el => observer.observe(el));
