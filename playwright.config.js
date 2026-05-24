const { defineConfig } = require('@playwright/test');
const { defineBddConfig } = require('playwright-bdd');

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: 'features/steps/**/*.js',
});

module.exports = defineConfig({
  testDir,
  use: {
    headless: false,
    baseURL: 'https://www.saucedemo.com',
  },
});