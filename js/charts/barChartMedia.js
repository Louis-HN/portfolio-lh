import Chart from 'chart.js/auto';

let mediaChart;

export function renderMediaChart() {
  const ctx = document.getElementById('radarMedia')?.getContext('2d');
  if (!ctx) return;

  if (mediaChart) {
    mediaChart.destroy();
  }

  mediaChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Search & Display', 'Social Media', 'Programmatic', 'Campaign Pacing', 'KPI Reporting'],
      datasets: [
        {
          type: 'bar',
          label: 'Level now',
          data: [5, 6, 4, 5, 7],
          backgroundColor: [
            'rgba(255, 160, 120, 0.2)',
            'rgba(255, 140, 130, 0.2)',
            'rgba(255, 120, 150, 0.2)',
            'rgba(255, 100, 170, 0.2)',
            'rgba(255, 80, 190, 0.2)'
          ],
          borderColor: [
            'rgba(255, 160, 120, 0.8)',
            'rgba(255, 140, 130, 0.8)',
            'rgba(255, 120, 150, 0.8)',
            'rgba(255, 100, 170, 0.8)',
            'rgba(255, 80, 190, 0.8)'
          ],
          borderWidth: 2,
          borderRadius: 4
        },
        {
          type: 'line',
          label: 'Target level',
          data: [7.5, 8, 9, 9, 9],
          backgroundColor: 'rgba(242, 255, 0, 0.36)',
          borderColor: 'rgba(242, 255, 0, 0.36)',
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




