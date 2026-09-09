const whatsappMessage = encodeURIComponent('Olá, Pausa! Quero começar a planejar a minha viagem.');
document.querySelectorAll('.whatsapp-link').forEach(link => {
  link.href = `https://wa.me/5511998062732?text=${whatsappMessage}`;
});

const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
menuButton?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

document.querySelectorAll('.accordion details').forEach(item => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.accordion details[open]').forEach(openItem => {
      if (openItem !== item) openItem.open = false;
    });
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
