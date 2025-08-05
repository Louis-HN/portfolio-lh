const ctx = document.getElementById('dysonChart').getContext('2d');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['TAM', 'SAM', 'SOM'],
    datasets: [{
      data: [210, 40, 4],
      backgroundColor: ['#ff2d55', '#ff9500', '#ffcc00'],
      borderWidth: 6,
      borderColor: '#000',
      cutout: '70%'
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
