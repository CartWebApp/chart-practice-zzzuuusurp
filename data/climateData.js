// Climate dataset (fake but plausible monthly averages)
export const climateData = [
  // Month format: YYYY-MM. Cities: Phoenix, Seattle, Chicago, Miami
  { month: "2025-01", city: "Phoenix", avgTempC: 13.4, minTempC: 6.2,  maxTempC: 20.1, precipMM: 21, humidityPct: 38, windKph: 10, airQualityIndex: 62, sunshineHours: 250 },
  { month: "2025-01", city: "Seattle", avgTempC: 5.6,  minTempC: 2.1,  maxTempC: 8.8,  precipMM: 142, humidityPct: 82, windKph: 12, airQualityIndex: 48, sunshineHours:  80 },
  { month: "2025-01", city: "Chicago", avgTempC: -2.8, minTempC: -7.9, maxTempC: 1.1,  precipMM:  36, humidityPct: 71, windKph: 18, airQualityIndex: 55, sunshineHours: 110 },
  { month: "2025-01", city: "Miami",   avgTempC: 20.4, minTempC: 16.8, maxTempC: 24.2, precipMM:  58, humidityPct: 74, windKph: 15, airQualityIndex: 50, sunshineHours: 210 },

  { month: "2025-02", city: "Phoenix", avgTempC: 15.2, minTempC: 7.7,  maxTempC: 22.7, precipMM: 18, humidityPct: 35, windKph: 11, airQualityIndex: 60, sunshineHours: 260 },
  { month: "2025-02", city: "Seattle", avgTempC: 6.4,  minTempC: 2.7,  maxTempC: 9.6,  precipMM: 118, humidityPct: 80, windKph: 12, airQualityIndex: 46, sunshineHours:  95 },
  { month: "2025-02", city: "Chicago", avgTempC: -1.1, minTempC: -6.0, maxTempC: 2.5,  precipMM:  33, humidityPct: 69, windKph: 17, airQualityIndex: 53, sunshineHours: 125 },
  { month: "2025-02", city: "Miami",   avgTempC: 21.1, minTempC: 17.4, maxTempC: 24.9, precipMM:  52, humidityPct: 73, windKph: 15, airQualityIndex: 48, sunshineHours: 220 },

  { month: "2025-03", city: "Phoenix", avgTempC: 18.4, minTempC: 10.2, maxTempC: 26.4, precipMM: 16, humidityPct: 31, windKph: 12, airQualityIndex: 58, sunshineHours: 300 },
  { month: "2025-03", city: "Seattle", avgTempC: 8.1,  minTempC: 3.7,  maxTempC: 12.0, precipMM:  92, humidityPct: 78, windKph: 11, airQualityIndex: 45, sunshineHours: 120 },
  { month: "2025-03", city: "Chicago", avgTempC: 4.0,  minTempC: -1.2, maxTempC: 8.5,  precipMM:  48, humidityPct: 66, windKph: 16, airQualityIndex: 54, sunshineHours: 160 },
  { month: "2025-03", city: "Miami",   avgTempC: 22.5, minTempC: 19.0, maxTempC: 26.3, precipMM:  66, humidityPct: 74, windKph: 16, airQualityIndex: 49, sunshineHours: 240 },

  { month: "2025-04", city: "Phoenix", avgTempC: 22.6, minTempC: 14.0, maxTempC: 31.3, precipMM:  9, humidityPct: 26, windKph: 13, airQualityIndex: 57, sunshineHours: 320 },
  { month: "2025-04", city: "Seattle", avgTempC: 10.7, minTempC: 5.5,  maxTempC: 15.0, precipMM:  72, humidityPct: 75, windKph: 10, airQualityIndex: 44, sunshineHours: 160 },
  { month: "2025-04", city: "Chicago", avgTempC: 10.8, minTempC: 5.0,  maxTempC: 16.7, precipMM:  78, humidityPct: 62, windKph: 15, airQualityIndex: 56, sunshineHours: 190 },
  { month: "2025-04", city: "Miami",   avgTempC: 24.6, minTempC: 21.3, maxTempC: 28.2, precipMM:  92, humidityPct: 75, windKph: 16, airQualityIndex: 52, sunshineHours: 250 },

  { month: "2025-05", city: "Phoenix", avgTempC: 27.8, minTempC: 18.9, maxTempC: 36.6, precipMM:  4, humidityPct: 20, windKph: 14, airQualityIndex: 59, sunshineHours: 350 },
  { month: "2025-05", city: "Seattle", avgTempC: 13.9, minTempC: 8.5,  maxTempC: 18.7, precipMM:  55, humidityPct: 72, windKph: 10, airQualityIndex: 43, sunshineHours: 210 },
  { month: "2025-05", city: "Chicago", avgTempC: 16.8, minTempC: 11.0, maxTempC: 22.8, precipMM:  90, humidityPct: 62, windKph: 14, airQualityIndex: 58, sunshineHours: 240 },
  { month: "2025-05", city: "Miami",   avgTempC: 26.6, minTempC: 23.6, maxTempC: 29.7, precipMM: 138, humidityPct: 78, windKph: 17, airQualityIndex: 54, sunshineHours: 260 },

  { month: "2025-06", city: "Phoenix", avgTempC: 33.0, minTempC: 24.3, maxTempC: 41.2, precipMM:  2, humidityPct: 16, windKph: 15, airQualityIndex: 63, sunshineHours: 370 },
  { month: "2025-06", city: "Seattle", avgTempC: 16.7, minTempC: 11.1, maxTempC: 21.6, precipMM:  42, humidityPct: 69, windKph:  9, airQualityIndex: 42, sunshineHours: 240 },
  { month: "2025-06", city: "Chicago", avgTempC: 22.3, minTempC: 16.7, maxTempC: 28.3, precipMM: 102, humidityPct: 64, windKph: 13, airQualityIndex: 60, sunshineHours: 280 },
  { month: "2025-06", city: "Miami",   avgTempC: 28.3, minTempC: 25.6, maxTempC: 31.1, precipMM: 182, humidityPct: 80, windKph: 18, airQualityIndex: 55, sunshineHours: 255 },

  { month: "2025-07", city: "Phoenix", avgTempC: 35.6, minTempC: 27.1, maxTempC: 43.0, precipMM: 22, humidityPct: 23, windKph: 14, airQualityIndex: 66, sunshineHours: 360 },
  { month: "2025-07", city: "Seattle", avgTempC: 19.4, minTempC: 13.5, maxTempC: 24.5, precipMM:  18, humidityPct: 64, windKph:  8, airQualityIndex: 41, sunshineHours: 285 },
  { month: "2025-07", city: "Chicago", avgTempC: 25.1, minTempC: 19.6, maxTempC: 30.6, precipMM:  96, humidityPct: 66, windKph: 12, airQualityIndex: 62, sunshineHours: 300 },
  { month: "2025-07", city: "Miami",   avgTempC: 29.1, minTempC: 26.4, maxTempC: 32.0, precipMM: 168, humidityPct: 81, windKph: 19, airQualityIndex: 56, sunshineHours: 250 },

  { month: "2025-08", city: "Phoenix", avgTempC: 34.8, minTempC: 26.5, maxTempC: 42.2, precipMM: 28, humidityPct: 26, windKph: 13, airQualityIndex: 65, sunshineHours: 340 },
  { month: "2025-08", city: "Seattle", avgTempC: 19.1, minTempC: 13.4, maxTempC: 24.0, precipMM:  22, humidityPct: 65, windKph:  8, airQualityIndex: 41, sunshineHours: 270 },
  { month: "2025-08", city: "Chicago", avgTempC: 24.4, minTempC: 19.0, maxTempC: 30.0, precipMM:  88, humidityPct: 67, windKph: 11, airQualityIndex: 61, sunshineHours: 285 },
  { month: "2025-08", city: "Miami",   avgTempC: 29.0, minTempC: 26.3, maxTempC: 31.9, precipMM: 196, humidityPct: 82, windKph: 18, airQualityIndex: 57, sunshineHours: 245 },

  { month: "2025-09", city: "Phoenix", avgTempC: 31.2, minTempC: 23.0, maxTempC: 39.0, precipMM: 14, humidityPct: 22, windKph: 12, airQualityIndex: 63, sunshineHours: 300 },
  { month: "2025-09", city: "Seattle", avgTempC: 16.6, minTempC: 11.4, maxTempC: 21.1, precipMM:  48, humidityPct: 70, windKph:  9, airQualityIndex: 42, sunshineHours: 190 },
  { month: "2025-09", city: "Chicago", avgTempC: 20.1, minTempC: 14.7, maxTempC: 25.5, precipMM:  78, humidityPct: 65, windKph: 12, airQualityIndex: 59, sunshineHours: 230 },
  { month: "2025-09", city: "Miami",   avgTempC: 28.2, minTempC: 25.4, maxTempC: 30.9, precipMM: 212, humidityPct: 81, windKph: 17, airQualityIndex: 56, sunshineHours: 235 },

  { month: "2025-10", city: "Phoenix", avgTempC: 25.0, minTempC: 16.4, maxTempC: 33.1, precipMM: 10, humidityPct: 25, windKph: 11, airQualityIndex: 61, sunshineHours: 290 },
  { month: "2025-10", city: "Seattle", avgTempC: 12.1, minTempC: 7.7,  maxTempC: 15.8, precipMM:  92, humidityPct: 76, windKph: 11, airQualityIndex: 44, sunshineHours: 130 },
  { month: "2025-10", city: "Chicago", avgTempC: 13.2, minTempC: 8.0,  maxTempC: 18.8, precipMM:  68, humidityPct: 63, windKph: 14, airQualityIndex: 57, sunshineHours: 170 },
  { month: "2025-10", city: "Miami",   avgTempC: 26.2, minTempC: 23.1, maxTempC: 28.9, precipMM: 148, humidityPct: 78, windKph: 16, airQualityIndex: 54, sunshineHours: 240 },

  { month: "2025-11", city: "Phoenix", avgTempC: 18.2, minTempC: 10.2, maxTempC: 25.7, precipMM: 14, humidityPct: 31, windKph: 10, airQualityIndex: 60, sunshineHours: 260 },
  { month: "2025-11", city: "Seattle", avgTempC: 8.1,  minTempC: 4.4,  maxTempC: 10.9, precipMM: 132, humidityPct: 81, windKph: 12, airQualityIndex: 46, sunshineHours:  85 },
  { month: "2025-11", city: "Chicago", avgTempC: 5.6,  minTempC: 0.8,  maxTempC: 9.7,  precipMM:  44, humidityPct: 70, windKph: 16, airQualityIndex: 54, sunshineHours: 120 },
  { month: "2025-11", city: "Miami",   avgTempC: 23.3, minTempC: 19.7, maxTempC: 26.4, precipMM:  74, humidityPct: 75, windKph: 15, airQualityIndex: 52, sunshineHours: 220 },

  { month: "2025-12", city: "Phoenix", avgTempC: 14.1, minTempC: 7.0,  maxTempC: 20.6, precipMM: 19, humidityPct: 36, windKph: 10, airQualityIndex: 61, sunshineHours: 240 },
  { month: "2025-12", city: "Seattle", avgTempC: 5.7,  minTempC: 2.3,  maxTempC: 8.4,  precipMM: 152, humidityPct: 84, windKph: 13, airQualityIndex: 49, sunshineHours:  70 },
  { month: "2025-12", city: "Chicago", avgTempC: -1.4, minTempC: -6.0, maxTempC: 2.1,  precipMM:  38, humidityPct: 73, windKph: 18, airQualityIndex: 56, sunshineHours: 105 },
  { month: "2025-12", city: "Miami",   avgTempC: 21.2, minTempC: 17.6, maxTempC: 24.8, precipMM:  54, humidityPct: 74, windKph: 15, airQualityIndex: 50, sunshineHours: 210 },
];