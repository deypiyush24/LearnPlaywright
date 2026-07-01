# Important command of playwright
- ![Describe feature ](./LearningSnapshots/describeFeature.png)

# Allure Reporting 
- Install Allure Report node Package : npm install --save-dev allure-playwright 
- ![Update the playwright.config.ts](./LearningSnapshots/AllureReporting.png) 
   reporter: [ 
   ['html'], // Keeps the standard report 
   ['allure-playwright', { outputFolder: 'allure-results' }] // Generates Allure raw data 
   ],
- npx playwright test (Run the test)
- npx allure-commandline generate allure-results --clean -o allure-report
- npx allure-commandline open allure-report

