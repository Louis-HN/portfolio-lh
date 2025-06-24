let crmChart;

function renderCRMChart() {
  const ctx = document.getElementById('radarCRM')?.getContext('2d');
  if (!ctx) return;

  if (crmChart) {
    crmChart.destroy();
  }

  crmChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['CRM Platforms', 'Segmentation', 'Scoring', 'Pipeline', 'Automation'],
      datasets: [
        {
          type: 'bar',
          label: 'Level now',
          data: [5, 6, 4, 5, 5],
          backgroundColor: [
            'rgba(200, 80, 255, 0.2)',
            'rgba(180, 90, 250, 0.2)',
            'rgba(160, 100, 245, 0.2)',
            'rgba(140, 110, 240, 0.2)',
            'rgba(120, 120, 235, 0.2)'
          ],
          borderColor: [
            'rgba(200, 80, 255, 0.8)',
            'rgba(180, 90, 250, 0.8)',
            'rgba(160, 100, 245, 0.8)',
            'rgba(140, 110, 240, 0.8)',
            'rgba(120, 120, 235, 0.8)'
          ],
          borderWidth: 2,
          borderRadius: 4
        },
        {
          type: 'line',
          label: 'Target level',
          data: [8, 9, 9, 9, 8],
          backgroundColor: 'rgba(200, 80, 255, 0.45)',
          borderColor: 'rgba(200, 80, 255, 0.45)',
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
