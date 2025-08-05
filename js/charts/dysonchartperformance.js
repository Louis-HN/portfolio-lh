const ctxTrend = document.getElementById('trendChart').getContext('2d');

new Chart(ctxTrend, {
  type: 'line',
  data: {
    labels: ['Jour 1', 'Jour 2', 'Jour 3', 'Jour 4', 'Jour 5'], // Projections journalières
    datasets: [
      {
        label: 'Meta (Facebook / Instagram)',
        data: [200, 300, 450, 700, 1000], // Précommandes projetées au fil des jours
        borderColor: '#ff2d55',
        fill: false,
        tension: 0.1
      },
      {
        label: 'Google Shopping',
        data: [150, 250, 400, 800, 1200],
        borderColor: '#ff9500',
        fill: false,
        tension: 0.1
      },
      {
        label: 'YouTube',
        data: [100, 150, 250, 400, 600],
        borderColor: '#ffd60a',
        fill: false,
        tension: 0.1
      },
      {
        label: 'TikTok',
        data: [80, 100, 200, 400, 500],
        borderColor: '#0af',
        fill: false,
        tension: 0.1
      },
      {
        label: 'Retargeting Display',
        data: [150, 300, 400, 600, 700],
        borderColor: '#9f0',
        fill: false,
        tension: 0.1
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return value.toLocaleString();
          }
        }
      }
    },
    plugins: {
      legend: {
        position: 'top'
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.raw.toLocaleString()} précommandes`;
          }
        }
      }
    }
  }
});
