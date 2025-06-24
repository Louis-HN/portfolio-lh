// ===== CORE CONFIG =====
function setupTheme() {
  document.body.classList.add('light-theme');
}
setupTheme();


// ===== UI Interactions =====
function initProfileTabs() {
  const tabs = document.querySelectorAll('[data-tab]');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}
initProfileTabs();


// ===== CHARTS =====
function renderMediaChart() {
  console.log('Media Chart Loaded');
  // Chart.js code ici si présent
}
function renderDataChart() {
  console.log('Data Chart Loaded');
}
function renderCRMChart() {
  console.log('CRM Chart Loaded');
}
renderMediaChart();
renderDataChart();
renderCRMChart();


// ===== PAGE-SPECIFIC LOGIC =====
if (window.location.pathname.includes('resume.html')) {
  console.log('Resume-specific JS');
}
if (window.location.pathname.includes('research.html')) {
  console.log('Research-specific JS');
}
