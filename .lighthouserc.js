/** @type {import('@lhci/cli').LighthouseCiConfiguration} */
module.exports = {
  ci: {
    collect: {
      // For CRA for now; change 'build' to "dist" after switch to Vite
      startServerCommand: 'serve -s build -l 4173',
      startServerReadyPattern: 'http://localhost:4173',
      startServerReadyTimeout: 60000,
      numberOfRuns: 3,
      url: [
        'http://localhost:4173',
        'http://localhost:4173/projects',
        'http://localhost:4173/contact',
      ],
      settings: {
        preset: 'desktop', // 'mobile' for mobile emulation
        throttlingMethod: 'devtools',
      },
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['warn', { minScore: 0.9 }],
        'first-contentful-paint': ['error', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'total-blocking-time': ['error', { maxNumericValue: 200 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
      },
      budgets: ['error', { budgetPath: 'lighthouse-budgets.json ' }],
    },
    preset: 'lighthouse:recommended',
    upload: {
      target: 'temporary-public-storage', // Later:  use self hosted LHCI server for trend comparison
    },
  },
};
