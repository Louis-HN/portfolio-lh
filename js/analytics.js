// /js/analytics.js
import { Analytics } from '@vercel/analytics/react';

// Pour HTML vanilla, on utilise la version browser
window.va = window.va || function () { 
  (window.vaq = window.vaq || []).push(arguments); 
};

// Speed Insights
window.si = window.si || function () { 
  (window.siq = window.siq || []).push(arguments); 
};

// Chargement du script Analytics
const analyticsScript = document.createElement('script');
analyticsScript.src = 'https://cdn.vercel-insights.com/v1/script.debug.js';
analyticsScript.defer = true;
document.head.appendChild(analyticsScript);

// Chargement du script Speed Insights
const speedScript = document.createElement('script');
speedScript.src = 'https://cdn.vercel-insights.com/v1/speed-insights/script.debug.js';
speedScript.defer = true;
document.head.appendChild(speedScript);