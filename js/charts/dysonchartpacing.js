const ctxPacing = document.getElementById('pacingChart').getContext('2d');

new Chart(ctxPacing, {
  type: 'line',
  data: {
    labels: ['Jour 1', 'Jour 2', 'Jour 3', 'Jour 4', 'Jour 5', 'Jour 6', 'Jour 7'],
    datasets: [
      {
        label: 'Budget Réel Dépensé',
        data: [5000, 8000, 12000, 16000, 19000, 22000, 25000],
        borderColor: '#ff2d55',
        fill: false,
        tension: 0.4
      },
      {
        label: 'Budget Prévu',
        data: [4500, 8500, 13000, 17000, 20000, 23000, 26000],
        borderColor: '#00af',
        fill: false,
        tension: 0.4
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
            return value.toLocaleString() + ' €';
          }
        }
      }
    },
    plugins: {
      legend: {
        position: 'top'
      }
    }
  }
});

