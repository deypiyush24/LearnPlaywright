Install Allure Report node Package : npm install --save-dev allure-playwright 
![Update the playwright.config.ts](./LearningSnapshots/AllureReporting.png) 
reporter: [ ['html'], // Keeps the standard report ['allure-playwright', { outputFolder: 'allure-results' }] // Generates Allure raw data ], 