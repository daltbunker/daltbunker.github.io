
//CONTACT
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', e => {
  function openEmail(contactForm) {
    const emailAddress = 'webdevdalt@gmail.com' 
    const subject = contactForm.get('subject').trim();
    const message = contactForm.get('message').trimEnd();
    window.open(`mailto:${emailAddress}?subject=${subject}&body=${message}`);
  }
  
  e.preventDefault();
  openEmail(new FormData(contactForm));
});
