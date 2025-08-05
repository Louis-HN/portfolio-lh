function createBarChart(canvasId, units) {
  const unitCost = 90;
  const unitPrice = 442;
  const unitMargin = unitPrice - unitCost;
  const commShare = unitMargin * 0.1;
  const netMargin = unitMargin - commShare;

  const cost = unitCost * units;
  const margin = netMargin * units;
  const comms = commShare * units;

  const ctx = document.getElementById(canvasId).getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [""],
      datasets: [
        {
          label: 'Coût de revient',
          data: [cost],
          backgroundColor: '#ff2d55',
          borderRadius: 10,
          barThickness: 28
        },
        {
          label: 'Marge brute',
          data: [margin],
          backgroundColor: '#ff9500',
          borderRadius: 10,
          barThickness: 28
        },
        {
          label: 'Budget comm.',
          data: [comms],
          backgroundColor: '#ffd60a',
          borderRadius: 10,
          barThickness: 28
        }
      ]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: '#888',
            callback: value => `${value / 1000} k€`
          },
          grid: {
            color: '#222'
          }
        },
        y: {
          stacked: true,
          grid: {
            display: false
          },
          ticks: {
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
}

// Génère 2 versions : 10k et 5k ventes

createBarChart('barChart10k', 10000);




 <h4>10 000 unités vendues</h4>
                <div class="bar-block">
                <canvas id="barChart10k" class="custom-bar-height"></canvas>
                </div>


                <div class="legend-inline">
                <div><span class="dot cost"></span> Coût de revient</div>
                <div><span class="dot margin"></span> Marge brute</div>
                <div><span class="dot comms"></span> Budget comm. (10%/marge)</div>
                </div>
            </div>
                   <script src="budget-chart.js"></script>