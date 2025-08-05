const ctxMargin = document.getElementById('marginChart').getContext('2d');

new Chart(ctxMargin, {
  type: 'doughnut',
  data: {
    labels: ['Coût de revient (20%)', 'Marge brute (70%)', 'Budget comm. (10%)'],
    datasets: [{
      data: [90, 317, 35],
      backgroundColor: ['#ff2d55', '#ff9500', '#ffcc00'],
      cutout: '60%'
    }]
  },
  options: {
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: function(context) {
          const label = context.label || '';
          const value = context.parsed;
          return `${label} : ${value} M€`;
        }
      }
    }
  },
    responsive: true,
    maintainAspectRatio: false
  }
});
