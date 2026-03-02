// change this to reference the dataset you chose to work with.
import { gameSales as chartData } from "./data/gameSales.js";

// --- DOM helpers ---
const yearSelect = document.getElementById("yearSelect");
const genreSelect = document.getElementById("genreSelect");
const metricSelect = document.getElementById("metricSelect");
const chartTypeSelect = document.getElementById("chartType");
const renderBtn = document.getElementById("renderBtn");
const dataPreview = document.getElementById("dataPreview");
const canvas = document.getElementById("chartCanvas");

let currentChart = null;

// --- Populate dropdowns from data ---
const years = [...new Set(chartData.map(r => r.year))];
const genres = [...new Set(chartData.map(r => r.genre))];

years.forEach(m => yearSelect.add(new Option(m, m)));
genres.forEach(h => genreSelect.add(new Option(h, h)));

yearSelect.value = years[0];
genreSelect.value = genres[0];

// Preview first 6 rows
dataPreview.textContent = JSON.stringify(chartData.slice(0, 6), null, 2);

// --- Main render ---
renderBtn.addEventListener("click", () => {
  const chartType = chartTypeSelect.value;
  const year = yearSelect.value;
  const genre = genreSelect.value;
  const metric = metricSelect.value;

  // Destroy old chart if it exists (common Chart.js gotcha)
  if (currentChart) currentChart.destroy();

  // Build chart config based on type
  const config = buildConfig(chartType, { year, genre, metric });

  currentChart = new Chart(canvas, config);
});

// --- Students: you’ll edit / extend these functions ---
function buildConfig(type, { year, genre, metric }) {
  if (type === "bar") return barByGenre(year, metric);
  if (type === "line") return lineOverTime(genre, ["reviewScore", "revenueUSD"]);
  if (type === "scatter") return scatterTripsVsTemp(genre);
  if (type === "doughnut") return doughnutMemberVsCasual(year, genre);
  if (type === "radar") return radarCompareGenres(year);
  return barByGenre(year, metric);
}

// Task A: BAR — compare Genres for a given year
function barByGenre(year, metric) {
  const rows = chartData.filter(r => r.year === year);
  console.log(year, metric);
  const labels = rows.map(r => r.genre);
  const values = rows.map(r => r[metric]);

  return {
    type: "bar",
    data: {
      labels,
      datasets: [{
        label: `${metric} in ${year}`,
        data: values
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: { display: true, text: `Genre comparison (${year})` }
      },
      scales: {
        y: { title: { display: true, text: metric } },
        x: { title: { display: true, text: "Genre" } }
      }
    }
  };
}

// Task B: LINE — trend over time for one Genre (2 datasets)
function lineOverTime(genre, metrics) {
  const rows = chartData.filter(r => r.genre === genre);

  const labels = rows.map(r => r.year);

  const datasets = metrics.map(m => ({
    label: m,
    data: rows.map(r => r[m])
  }));

  return {
    type: "line",
    data: { labels, datasets },
    options: {
      responsive: true,
      plugins: {
        title: { display: true, text: `Trends over time: ${genre}` }
      },
      scales: {
        y: { title: { display: true, text: "Value" } },
        x: { title: { display: true, text: "year" } }
      }
    }
  };
}

// SCATTER — relationship between review score and revenue
function scatterTripsVsTemp(genre) {
  const rows = chartData.filter(r => r.genre === genre);

  const points = rows.map(r => ({ x: r.reviewScore, y: r.revenueUSD }));

  return {
    type: "scatter",
    data: {
      datasets: [{
        label: `Review Score vs Revenue (${genre})`,
        data: points
      }]
    },
    options: {
      plugins: {
        title: { display: true, text: `Do review scores affect revenue? (${genre})` }
      },
      scales: {
        x: { title: { display: true, text: "Review Score (Out of 100)" } },
        y: { title: { display: true, text: "Revenue" } }
      }
    }
  };
}

// DOUGHNUT — member vs casual share for one genre + year
function doughnutMemberVsCasual(year, genre) {
  const row = chartData.find(r => r.year === year && r.genre === genre);

  const member = Math.round(row.memberShare * 100);
  const casual = 100 - member;

  return {
    type: "doughnut",
    data: {
      labels: ["Members (%)", "Casual (%)"],
      datasets: [{ label: "Rider mix", data: [member, casual] }]
    },
    options: {
      plugins: {
        title: { display: true, text: `Rider mix: ${genre} (${year})` }
      }
    }
  };
}

// RADAR — compare Genres across multiple metrics for one year
function radarCompareGenres(year) {
  const rows = chartData.filter(r => r.year === year);
  
  const metrics = ["priceUSD", "revenueUSD", "reviewScore", "esports"];
  const labels = metrics;

  const datasets = rows.map(r => ({
    label: r.genre,
    data: metrics.map(m => r[m])
  }));

  return {
    type: "radar",
    data: { labels, datasets },
    options: {
      plugins: {
        title: { display: true, text: `Multi-metric comparison (${year})` }
      }
    }
  };
}