// src/js/main.js

// 🔹 Core setup
import './core/config.js'
import './core/theme.js'
import './core/init.js'

// 🔹 UI interactions
import { initProfileTabs } from './ui/toggleTabs.js';
initProfileTabs();

// 🔹 Charts
import { renderMediaChart } from './charts/barChartMedia.js';
import { renderDataChart } from './charts/barChartData.js';
import { renderCRMChart } from './charts/barChartCRM.js';

renderMediaChart();
renderDataChart();
renderCRMChart();

// 🔹 Page-specific logic
import './pages/resume.js'
import './pages/index.js'
import './pages/project.js'
import './pages/research.js'






