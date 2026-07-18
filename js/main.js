// Temporarily disabled pages — block direct access and send visitors home.
const DISABLED_PAGES = ['playground.html', 'contact.html'];
const currentPage = window.location.pathname.split('/').pop();
if (DISABLED_PAGES.includes(currentPage)) {
  window.location.replace('../index.html');
}

const contactForm = document.querySelector('#contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Cảm ơn! Tin nhắn của bạn đã được gửi. Tôi sẽ liên hệ lại sớm.');
    contactForm.reset();
  });
}
