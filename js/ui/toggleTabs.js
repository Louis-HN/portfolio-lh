function initProfileTabs() {
  const tabs = document.querySelectorAll('.profile-tab');
  const contents = document.querySelectorAll('.profile-content');
  const graphics = document.querySelectorAll('.profile-graphic');

  if (!tabs.length || !contents.length) return;

  const switchProfile = (profile) => {
    tabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.profile === profile);
    });
    contents.forEach(content => {
      content.hidden = content.dataset.profile !== profile;
    });
    graphics.forEach(graph => {
      graph.hidden = graph.dataset.profile !== profile;
    });
  };

  const defaultTab = document.querySelector('.profile-tab.active') || tabs[0];
  if (defaultTab) switchProfile(defaultTab.dataset.profile);

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      switchProfile(tab.dataset.profile);
    });
  });
}
