
  // JavaScript code here
  const socialMediaLinks = document.querySelectorAll('.social-media a');

  socialMediaLinks.forEach(link => {
   link.addEventListener('mouseover', () => {
    link.querySelector('i').style.color = '#07c352';
   });
   link.addEventListener('mouseout', () => {
    link.querySelector('i').style.color = '#9c2525ea';
   });
  });

  const homeHeader = document.querySelector('.header');
  window.addEventListener('scroll', () => {
   if (window.scrollY > 50) {
    homeHeader.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
   } else {
    homeHeader.style.backgroundColor = 'transparent';
   }
  });
