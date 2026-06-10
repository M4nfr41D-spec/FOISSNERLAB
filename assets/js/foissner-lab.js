document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.mobile-toggle');
  const mobilePanel = document.querySelector('.mobile-panel');

  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 10);
  };
  onScroll();
  document.addEventListener('scroll', onScroll, {passive:true});

  if (toggle && mobilePanel) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      mobilePanel.classList.toggle('open');
    });
    mobilePanel.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      toggle.classList.remove('active');
      mobilePanel.classList.remove('open');
    }));
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('revealed');
        if(entry.target.classList.contains('reveal-stagger')){
          [...entry.target.children].forEach(ch => ch.classList.add('revealed'));
        }
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:0.12});

  document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-stagger').forEach(el => observer.observe(el));

  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    const ans = item.querySelector('.faq-a');
    btn?.addEventListener('click', () => {
      const open = item.classList.toggle('open');
      ans.style.maxHeight = open ? ans.scrollHeight + 'px' : '0px';
    });
  });
});