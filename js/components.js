const isPageFile = window.location.pathname.includes('/pages/');
const links = isPageFile
  ? {
      homeLink: '../index.html',
      aboutLink: 'about.html',
      projectsLink: 'projects.html',
      playgroundLink: 'playground.html',
      contactLink: 'contact.html',
    }
  : {
      homeLink: 'index.html',
      aboutLink: 'pages/about.html',
      projectsLink: 'pages/projects.html',
      playgroundLink: 'pages/playground.html',
      contactLink: 'pages/contact.html',
    };

async function loadComponent(fileName, containerId, replacements = {}) {
  try {
    const response = await fetch(fileName);
    if (!response.ok) {
      console.warn(`Unable to load component: ${fileName}`);
      return;
    }
    let html = await response.text();
    Object.entries(replacements).forEach(([token, value]) => {
      html = html.replace(new RegExp(`{{${token}}}`, 'g'), value);
    });
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = html;
    highlightActiveNav();
    setupMobileNav();
  } catch (error) {
    console.error('Error loading component', fileName, error);
  }
}

function highlightActiveNav() {
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('#site-header nav a');
  links.forEach(link => {
    link.classList.remove('is-active');
    link.removeAttribute('aria-current');
    const href = link.getAttribute('href') || '';
    if (
      href.endsWith(currentFile) ||
      (currentFile === 'index.html' && (href.endsWith('index.html') || href === '' || href === '/'))
    ) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

function setupMobileNav() {
  const navToggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobileNav');
  if (!navToggle || !mobileNav) return;

  navToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden');
  });
}

const componentPath = isPageFile ? '../components/' : 'components/';

async function initComponents() {
  const promises = [
    loadComponent(`${componentPath}header.html`, 'site-header', links),
    loadComponent(`${componentPath}footer.html`, 'site-footer')
  ];

  const moreWorkContainer = document.getElementById('more-work-section');
  if (moreWorkContainer) {
    promises.push(
      loadComponent(`${componentPath}more-work.html`, 'more-work-section').then(() => {
        initMoreWork();
      })
    );
  }

  await Promise.all(promises);
}

function initMoreWork() {
  // Make related project cards clickable
  document.querySelectorAll('#more-work-section [data-href]').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a, button') || !card.dataset.href || card.dataset.href === '#') return;
      window.location.href = card.dataset.href;
    });
  });

  // Horizontal scroll for "More Projects"
  const container = document.getElementById('more-projects-container');
  const backBtn = document.getElementById('scroll-back');
  const nextBtn = document.getElementById('scroll-next');

  if (container && backBtn && nextBtn) {
    const scrollAmount = (container.querySelector('article')?.offsetWidth || 320) + 24; // Card width + gap

    const updateButtons = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      backBtn.disabled = container.scrollLeft <= 0;
      nextBtn.disabled = container.scrollLeft >= maxScroll - 1; // -1 for precision issues
    };

    nextBtn.addEventListener('click', () => container.scrollBy({ left: scrollAmount, behavior: 'smooth' }));
    backBtn.addEventListener('click', () => container.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));

    container.addEventListener('scroll', updateButtons, { passive: true });
    window.addEventListener('resize', updateButtons);
    updateButtons(); // Initial check
  }
}

initComponents();
