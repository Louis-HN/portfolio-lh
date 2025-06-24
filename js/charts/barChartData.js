let dataChart;

function renderDataChart() {
  const ctx = document.getElementById('barData')?.getContext('2d');
  if (!ctx) return;

  if (dataChart) {
    dataChart.destroy();
  }

  dataChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['SQL', 'Python', 'Statistics', 'Analysis', 'Visualization'],
      datasets: [
        {
          type: 'bar',
          label: 'Level now',
          data: [5, 6, 4, 5, 7],
          backgroundColor: [
            'rgba(0, 122, 255, 0.2)',
            'rgba(0, 150, 255, 0.2)',
            'rgba(0, 180, 255, 0.2)',
            'rgba(0, 122, 200, 0.2)',
            'rgba(0, 90, 255, 0.2)'
          ],
          borderColor: [
            'rgba(0, 122, 255, 0.8)',
            'rgba(0, 150, 255, 0.8)',
            'rgba(0, 180, 255, 0.8)',
            'rgba(0, 122, 200, 0.8)',
            'rgba(0, 90, 255, 0.8)'
          ],
          borderWidth: 2,
          borderRadius: 4
        },
        {
          type: 'line',
          label: 'Target level',
          data: [7.5, 8, 9, 9, 9],
          backgroundColor: 'rgba(0, 123, 255, 0.46)',
          borderColor: 'rgba(0, 123, 255, 0.46)',
          borderWidth: 1,
          pointRadius: 3,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      layout: { padding: 30 },
      scales: {
        y: {
          beginAtZero: true,
          max: 10,
          ticks: { color: '#bbb', stepSize: 1 },
          grid: { color: '#333' }
        },
        x: {
          ticks: { color: '#ccc' },
          grid: { color: '#222' }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#1c1c1e',
          titleColor: '#fff',
          bodyColor: '#eee'
        }
      }
    }
  });
}
