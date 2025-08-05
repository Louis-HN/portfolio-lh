const ctxCPM = document.getElementById('cpmChart').getContext('2d');
const ctxCTR = document.getElementById('ctrChart').getContext('2d');
const ctxCPA = document.getElementById('cpaChart').getContext('2d');
const ctxROAS = document.getElementById('roasChart').getContext('2d');
const ctxConversion = document.getElementById('conversionChart').getContext('2d');

// CPM Chart
new Chart(ctxCPM, {
  type: 'bar',
  data: {
    labels: ['Meta', 'Google Shopping', 'YouTube', 'TikTok', 'Retargeting'],
    datasets: [{
      label: 'CPM (€)',
      data: [10, 5, 7, 12, 4],
      backgroundColor: '#ff2d55',
      borderRadius: 10,
      barThickness: 28
    }]
  },
  options: {
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// CTR Chart
new Chart(ctxCTR, {
  type: 'bar',
  data: {
    labels: ['Meta', 'Google Shopping', 'YouTube', 'TikTok', 'Retargeting'],
    datasets: [{
      label: 'CTR (%)',
      data: [5, 4.5, 6, 3, 7],
      backgroundColor: '#ff9500',
      borderRadius: 10,
      barThickness: 28
    }]
  },
  options: {
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// CPA Chart
new Chart(ctxCPA, {
  type: 'bar',
  data: {
    labels: ['Meta', 'Google Shopping', 'YouTube', 'TikTok', 'Retargeting'],
    datasets: [{
      label: 'CPA (€)',
      data: [30, 20, 25, 15, 18],
      backgroundColor: '#ffd60a',
      borderRadius: 10,
      barThickness: 28
    }]
  },
  options: {
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// ROAS Chart
new Chart(ctxROAS, {
  type: 'bar',
  data: {
    labels: ['Meta', 'Google Shopping', 'YouTube', 'TikTok', 'Retargeting'],
    datasets: [{
      label: 'ROAS',
      data: [5, 7, 3, 4, 10],
      backgroundColor: '#0af',
      borderRadius: 10,
      barThickness: 28
    }]
  },
  options: {
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// Conversion Chart
new Chart(ctxConversion, {
  type: 'line',
  data: {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [{
      label: 'Taux de précommande',
      data: [25, 35, 40, 50, 60],
      fill: false,
      borderColor: '#f0f0f0',
      tension: 0.1
    }]
  },
  options: {
    scales: {
      y: { beginAtZero: true }
    }
  }
});
