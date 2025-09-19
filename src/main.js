import "./style.css";

const appendIndex = link => {
  if (import.meta.env.DEV) {
    if ('/' !== link.href[link.href.length - 1]) {
      link.href += '/';
    }
    link.href += 'index.html';
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.querySelectorAll('.navbar a').forEach(link => {
  appendIndex(link);
});

document.querySelectorAll('.projects a').forEach(link => {
  appendIndex(link);
});