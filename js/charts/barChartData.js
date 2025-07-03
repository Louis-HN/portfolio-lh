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
      labels: ['R', 'Python', 'Statistics', 'Analysis', 'Visualization'],
      datasets: [
        {
          type: 'bar',
          label: 'Level now',
          data: [3, 3, 4, 5, 5],
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
          data: [8, 7, 9, 8, 9],
          backgroundColor: 'rgba(0, 123, 255, 0.46)',
          borderColor: 'rgba(0, 123, 255, 0.46)',
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
      top: 30,
      right: 20,
      bottom: 20,
      left: 20
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
