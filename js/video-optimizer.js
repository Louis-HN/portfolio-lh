
const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const video = entry.target;
      if (!video.src) {
        video.load();
      }
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('video').forEach(video => {
  videoObserver.observe(video);
});