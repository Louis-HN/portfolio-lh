const ctxChannels = document.getElementById('mediaBarChart').getContext('2d');

new Chart(ctxChannels, {
  type: 'bar',
  data: {
    labels: ['Meta', 'Google Shopping', 'YouTube', 'TikTok', 'Retargeting'],
    datasets: [{
      label: 'Budget (€)',
      data: [35000, 22500, 12000, 10000, 8900],
      backgroundColor: [
        '#ff2d55',
        '#ff9500',
        '#ffd60a',
        '#0af',
        '#9f0'
      ],
      borderRadius: 8,
      barThickness: 40
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: value => `${value.toLocaleString()} €`,
          color: '#999',
          font: {
            size: 14
          }
        },
        grid: {
          color: '#444'
        }
      },
      x: {
        ticks: {
          color: '#fff',
          font: {
            size: 14
          }
        },
        grid: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: context => `${context.dataset.label} : ${context.raw.toLocaleString()} €`
        }
      }
    }
  }
});
