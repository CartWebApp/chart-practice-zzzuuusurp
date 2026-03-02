// Each row = one neighborhood in one month. fake but realistic data for a bike share company in a city with 5 neighborhoods, over 12 months.
export const bikeShare = [
  // month, neighborhood, trips, revenueUSD, avgDurationMin, incidents, tempC, precipMM, memberShare (0..1)
  { month: "2025-01", hood: "Downtown",  trips: 18200, revenueUSD:  61240, avgDurationMin: 14.2, incidents: 18, tempC:  8.2, precipMM: 112, memberShare: 0.74 },
  { month: "2025-01", hood: "Midtown",   trips: 13450, revenueUSD:  43810, avgDurationMin: 15.6, incidents: 11, tempC:  7.8, precipMM: 120, memberShare: 0.70 },
  { month: "2025-01", hood: "Uptown",    trips:  9100, revenueUSD:  27100, avgDurationMin: 16.9, incidents:  8, tempC:  7.1, precipMM: 128, memberShare: 0.66 },
  { month: "2025-01", hood: "Riverside", trips:  7600, revenueUSD:  22940, avgDurationMin: 18.4, incidents:  7, tempC:  6.9, precipMM: 140, memberShare: 0.63 },
  { month: "2025-01", hood: "Hilltop",   trips:  6400, revenueUSD:  19200, avgDurationMin: 19.1, incidents:  6, tempC:  6.2, precipMM: 155, memberShare: 0.61 },

  { month: "2025-02", hood: "Downtown",  trips: 19500, revenueUSD:  65120, avgDurationMin: 14.0, incidents: 17, tempC:  9.0, precipMM:  98, memberShare: 0.75 },
  { month: "2025-02", hood: "Midtown",   trips: 14220, revenueUSD:  46290, avgDurationMin: 15.3, incidents: 10, tempC:  8.7, precipMM: 105, memberShare: 0.71 },
  { month: "2025-02", hood: "Uptown",    trips:  9700, revenueUSD:  28540, avgDurationMin: 16.6, incidents:  8, tempC:  8.1, precipMM: 110, memberShare: 0.67 },
  { month: "2025-02", hood: "Riverside", trips:  8200, revenueUSD:  24680, avgDurationMin: 18.0, incidents:  7, tempC:  7.9, precipMM: 121, memberShare: 0.64 },
  { month: "2025-02", hood: "Hilltop",   trips:  7000, revenueUSD:  20890, avgDurationMin: 18.7, incidents:  6, tempC:  7.2, precipMM: 132, memberShare: 0.62 },

  { month: "2025-03", hood: "Downtown",  trips: 22100, revenueUSD:  74230, avgDurationMin: 13.8, incidents: 19, tempC: 11.6, precipMM:  86, memberShare: 0.76 },
  { month: "2025-03", hood: "Midtown",   trips: 16100, revenueUSD:  52100, avgDurationMin: 15.0, incidents: 12, tempC: 11.1, precipMM:  92, memberShare: 0.72 },
  { month: "2025-03", hood: "Uptown",    trips: 11050, revenueUSD:  32210, avgDurationMin: 16.1, incidents:  9, tempC: 10.4, precipMM:  95, memberShare: 0.68 },
  { month: "2025-03", hood: "Riverside", trips:  9400, revenueUSD:  28120, avgDurationMin: 17.4, incidents:  8, tempC: 10.1, precipMM: 104, memberShare: 0.65 },
  { month: "2025-03", hood: "Hilltop",   trips:  8100, revenueUSD:  23860, avgDurationMin: 18.2, incidents:  7, tempC:  9.4, precipMM: 112, memberShare: 0.63 },

  { month: "2025-04", hood: "Downtown",  trips: 25500, revenueUSD:  86200, avgDurationMin: 13.5, incidents: 21, tempC: 14.8, precipMM:  62, memberShare: 0.76 },
  { month: "2025-04", hood: "Midtown",   trips: 18800, revenueUSD:  61200, avgDurationMin: 14.6, incidents: 13, tempC: 14.2, precipMM:  68, memberShare: 0.73 },
  { month: "2025-04", hood: "Uptown",    trips: 13200, revenueUSD:  39000, avgDurationMin: 15.6, incidents: 10, tempC: 13.6, precipMM:  72, memberShare: 0.69 },
  { month: "2025-04", hood: "Riverside", trips: 11400, revenueUSD:  34400, avgDurationMin: 16.8, incidents:  9, tempC: 13.2, precipMM:  79, memberShare: 0.66 },
  { month: "2025-04", hood: "Hilltop",   trips:  9600, revenueUSD:  28600, avgDurationMin: 17.7, incidents:  8, tempC: 12.6, precipMM:  84, memberShare: 0.64 },

  { month: "2025-05", hood: "Downtown",  trips: 29100, revenueUSD:  99620, avgDurationMin: 13.2, incidents: 24, tempC: 18.2, precipMM:  44, memberShare: 0.77 },
  { month: "2025-05", hood: "Midtown",   trips: 21450, revenueUSD:  70480, avgDurationMin: 14.3, incidents: 14, tempC: 17.6, precipMM:  49, memberShare: 0.73 },
  { month: "2025-05", hood: "Uptown",    trips: 15200, revenueUSD:  45610, avgDurationMin: 15.1, incidents: 11, tempC: 17.1, precipMM:  53, memberShare: 0.70 },
  { month: "2025-05", hood: "Riverside", trips: 13200, revenueUSD:  40120, avgDurationMin: 16.2, incidents: 10, tempC: 16.6, precipMM:  58, memberShare: 0.67 },
  { month: "2025-05", hood: "Hilltop",   trips: 11000, revenueUSD:  33140, avgDurationMin: 17.1, incidents:  9, tempC: 16.0, precipMM:  62, memberShare: 0.65 },

  { month: "2025-06", hood: "Downtown",  trips: 31800, revenueUSD: 110400, avgDurationMin: 13.0, incidents: 26, tempC: 21.1, precipMM:  18, memberShare: 0.78 },
  { month: "2025-06", hood: "Midtown",   trips: 23600, revenueUSD:  78120, avgDurationMin: 14.0, incidents: 16, tempC: 20.6, precipMM:  20, memberShare: 0.74 },
  { month: "2025-06", hood: "Uptown",    trips: 16900, revenueUSD:  51040, avgDurationMin: 14.7, incidents: 12, tempC: 20.0, precipMM:  23, memberShare: 0.70 },
  { month: "2025-06", hood: "Riverside", trips: 15100, revenueUSD:  46310, avgDurationMin: 15.7, incidents: 11, tempC: 19.5, precipMM:  26, memberShare: 0.68 },
  { month: "2025-06", hood: "Hilltop",   trips: 12300, revenueUSD:  37200, avgDurationMin: 16.5, incidents: 10, tempC: 18.9, precipMM:  28, memberShare: 0.66 },

  { month: "2025-07", hood: "Downtown",  trips: 33700, revenueUSD: 118900, avgDurationMin: 12.9, incidents: 28, tempC: 23.4, precipMM:   6, memberShare: 0.78 },
  { month: "2025-07", hood: "Midtown",   trips: 25150, revenueUSD:  84220, avgDurationMin: 13.8, incidents: 17, tempC: 22.9, precipMM:   7, memberShare: 0.75 },
  { month: "2025-07", hood: "Uptown",    trips: 18200, revenueUSD:  55360, avgDurationMin: 14.5, incidents: 13, tempC: 22.3, precipMM:   8, memberShare: 0.71 },
  { month: "2025-07", hood: "Riverside", trips: 16200, revenueUSD:  50210, avgDurationMin: 15.4, incidents: 12, tempC: 21.8, precipMM:   9, memberShare: 0.69 },
  { month: "2025-07", hood: "Hilltop",   trips: 13150, revenueUSD:  40110, avgDurationMin: 16.2, incidents: 10, tempC: 21.2, precipMM:  10, memberShare: 0.67 },

  { month: "2025-08", hood: "Downtown",  trips: 32900, revenueUSD: 116300, avgDurationMin: 13.0, incidents: 27, tempC: 23.1, precipMM:  10, memberShare: 0.78 },
  { month: "2025-08", hood: "Midtown",   trips: 24600, revenueUSD:  82890, avgDurationMin: 13.9, incidents: 17, tempC: 22.6, precipMM:  11, memberShare: 0.75 },
  { month: "2025-08", hood: "Uptown",    trips: 17600, revenueUSD:  53620, avgDurationMin: 14.6, incidents: 13, tempC: 22.0, precipMM:  12, memberShare: 0.71 },
  { month: "2025-08", hood: "Riverside", trips: 15650, revenueUSD:  48840, avgDurationMin: 15.6, incidents: 12, tempC: 21.5, precipMM:  13, memberShare: 0.69 },
  { month: "2025-08", hood: "Hilltop",   trips: 12700, revenueUSD:  38960, avgDurationMin: 16.3, incidents: 10, tempC: 20.9, precipMM:  14, memberShare: 0.67 },

  { month: "2025-09", hood: "Downtown",  trips: 30100, revenueUSD: 106900, avgDurationMin: 13.2, incidents: 25, tempC: 20.1, precipMM:  26, memberShare: 0.77 },
  { month: "2025-09", hood: "Midtown",   trips: 22500, revenueUSD:  76320, avgDurationMin: 14.2, incidents: 15, tempC: 19.6, precipMM:  29, memberShare: 0.74 },
  { month: "2025-09", hood: "Uptown",    trips: 16000, revenueUSD:  48910, avgDurationMin: 15.1, incidents: 12, tempC: 19.0, precipMM:  32, memberShare: 0.70 },
  { month: "2025-09", hood: "Riverside", trips: 14100, revenueUSD:  43680, avgDurationMin: 16.2, incidents: 11, tempC: 18.6, precipMM:  36, memberShare: 0.68 },
  { month: "2025-09", hood: "Hilltop",   trips: 11500, revenueUSD:  35600, avgDurationMin: 17.0, incidents:  9, tempC: 18.0, precipMM:  39, memberShare: 0.66 },

  { month: "2025-10", hood: "Downtown",  trips: 26800, revenueUSD:  94820, avgDurationMin: 13.6, incidents: 22, tempC: 16.3, precipMM:  58, memberShare: 0.76 },
  { month: "2025-10", hood: "Midtown",   trips: 20100, revenueUSD:  68120, avgDurationMin: 14.6, incidents: 14, tempC: 15.8, precipMM:  63, memberShare: 0.73 },
  { month: "2025-10", hood: "Uptown",    trips: 14100, revenueUSD:  43480, avgDurationMin: 15.6, incidents: 10, tempC: 15.2, precipMM:  67, memberShare: 0.69 },
  { month: "2025-10", hood: "Riverside", trips: 12150, revenueUSD:  38110, avgDurationMin: 16.7, incidents:  9, tempC: 14.8, precipMM:  72, memberShare: 0.67 },
  { month: "2025-10", hood: "Hilltop",   trips:  9900, revenueUSD:  30860, avgDurationMin: 17.6, incidents:  8, tempC: 14.1, precipMM:  78, memberShare: 0.64 },

  { month: "2025-11", hood: "Downtown",  trips: 22150, revenueUSD:  78240, avgDurationMin: 13.9, incidents: 19, tempC: 12.1, precipMM:  96, memberShare: 0.75 },
  { month: "2025-11", hood: "Midtown",   trips: 16700, revenueUSD:  56310, avgDurationMin: 14.9, incidents: 12, tempC: 11.7, precipMM: 101, memberShare: 0.72 },
  { month: "2025-11", hood: "Uptown",    trips: 11600, revenueUSD:  35920, avgDurationMin: 16.0, incidents:  9, tempC: 11.0, precipMM: 108, memberShare: 0.68 },
  { month: "2025-11", hood: "Riverside", trips: 10000, revenueUSD:  31200, avgDurationMin: 17.2, incidents:  8, tempC: 10.6, precipMM: 114, memberShare: 0.65 },
  { month: "2025-11", hood: "Hilltop",   trips:  8200, revenueUSD:  25410, avgDurationMin: 18.0, incidents:  7, tempC: 10.0, precipMM: 121, memberShare: 0.63 },

  { month: "2025-12", hood: "Downtown",  trips: 19400, revenueUSD:  66820, avgDurationMin: 14.1, incidents: 18, tempC:  8.9, precipMM: 122, memberShare: 0.74 },
  { month: "2025-12", hood: "Midtown",   trips: 14500, revenueUSD:  47840, avgDurationMin: 15.4, incidents: 11, tempC:  8.5, precipMM: 129, memberShare: 0.71 },
  { month: "2025-12", hood: "Uptown",    trips:  9900, revenueUSD:  29860, avgDurationMin: 16.7, incidents:  8, tempC:  7.9, precipMM: 138, memberShare: 0.67 },
  { month: "2025-12", hood: "Riverside", trips:  8350, revenueUSD:  25420, avgDurationMin: 18.1, incidents:  7, tempC:  7.5, precipMM: 145, memberShare: 0.64 },
  { month: "2025-12", hood: "Hilltop",   trips:  7000, revenueUSD:  21400, avgDurationMin: 18.9, incidents:  6, tempC:  6.8, precipMM: 158, memberShare: 0.62 },
];