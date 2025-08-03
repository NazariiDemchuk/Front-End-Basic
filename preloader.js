function showPreloaderAndNavigate(url) {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'flex';
    preloader.style.opacity = '1';
    setTimeout(() => {
      window.location.href = url;
    }, 500); 
  }

  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  });