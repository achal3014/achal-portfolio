// Utility functions for smooth scrolling and scroll-based animations

export const smoothScrollTo = (elementId, offset = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const scrollToSection = (sectionName) => {
  const sectionMap = {
    'home': 0,
    'about': 'about-section',
    'skills': 'skills-section',
    'projects': 'projects-section',
    'contact': 'contact-section'
  };

  if (sectionName === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    smoothScrollTo(sectionMap[sectionName], 80);
  }
};

export const getCurrentSection = () => {
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];
  const scrollPosition = window.scrollY + 100;

  // If at the top of the page
  if (scrollPosition < window.innerHeight / 2) {
    return 'home';
  }

  // Check which section is currently in view
  for (let i = sections.length - 1; i >= 1; i--) {
    const element = document.getElementById(`${sections[i]}-section`);
    if (element && scrollPosition >= element.offsetTop) {
      return sections[i];
    }
  }

  return 'home';
};

export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};