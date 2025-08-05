// /js/analytics.js

// Pour HTML vanilla, on utilise la version browser
window.va = window.va || function () { 
  (window.vaq = window.vaq || []).push(arguments); 
};

// Speed Insights
window.si = window.si || function () { 
  (window.siq = window.siq || []).push(arguments); 
};

// Injection Vercel Analytics
function injectAnalytics() {
  const analyticsScript = document.createElement('script');
  analyticsScript.src = 'https://cdn.vercel-insights.com/v1/script.js';
  analyticsScript.defer = true;
  document.head.appendChild(analyticsScript);
}

// Injection Speed Insights
function injectSpeedInsights() {
  const speedScript = document.createElement('script');
  speedScript.src = 'https://cdn.vercel-insights.com/v1/speed-insights/script.js';
  speedScript.defer = true;
  document.head.appendChild(speedScript);
}

// Initialisation
function initVercelInsights() {
  injectAnalytics();
  injectSpeedInsights();
}

// Auto-initialisation au chargement du DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initVercelInsights);
} else {
  initVercelInsights();
}