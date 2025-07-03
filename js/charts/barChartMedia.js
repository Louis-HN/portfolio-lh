let mediaChart;
function renderMediaChart() {
  const ctx = document.getElementById('radarMedia')?.getContext('2d');
  if (!ctx) return;

  if (mediaChart) mediaChart.destroy();

  mediaChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Google', 'Social Media', 'Programmatic', 'Pacing', 'KPI Reporting'],
      datasets: [{
        type: 'bar',
        label: 'Niveau actuel',
        data: [5, 5, 2, 2, 6],
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
          data: [8, 8, 7, 9, 9],
          backgroundColor: 'rgba(255, 247, 0, 0.68)',
          borderColor: 'rgba(255, 247, 0, 0.68)',
          borderWidth: 1,
          pointRadius: 4,
          fill: false
        }
      ]
    },
    options: {
  responsive: true,
  maintainAspectRatio: false, // IMPORTANT : permet d'utiliser une hauteur fixe
  layout: { 
    padding: {
      top: 15,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 10,
      ticks: { 
        color: '#bbb', 
        stepSize: 2,
        font: {
          size: 13 // Taille normale
        }
      },
      grid: { color: '#333' }
    },
    x: {
      ticks: { 
        color: '#ccc',
        font: {
          size: 13 // Taille normale
        },
        maxRotation: 35, // Pas de rotation = pas de déformation
        minRotation: 0
      },
      grid: { color: '#222' }
    }
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: '#1c1c1e',
      titleColor: '#fff',
      bodyColor: '#eee',
      titleFont: { size: 14 },
      bodyFont: { size: 13 }
    }
  }
}
  });
}
