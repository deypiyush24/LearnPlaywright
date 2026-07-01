# Important command of playwright
- [Describe feature ](./LearningSnapshots/describeFeature.png)

# Allure Reporting 
- Install Allure Report node Package : npm install --save-dev allure-playwright 
- [Update the playwright.config.ts](./LearningSnapshots/AllureReporting.png) 
-  reporter: [ 
   ['html'], // Keeps the standard report 
   ['allure-playwright', { outputFolder: 'allure-results' }] // Generates Allure raw data 
   ],
- npx playwright test (Run the test)
- npx allure-commandline generate allure-results --clean -o allure-report
- npx allure-commandline open allure-report
- [Add Data to Allure Reports](./LearningSnapshots/AllureMetadeta.png)

# Adding Custom Scripts in Package.json file
- [Adding Custom Scripts](./LearningSnapshots/CustomScripts.png)
- [Adding the New Configuration file eg :playwright.configChrome.ts](./LearningSnapshots/testDifferentconfigFile.png)
- npx playwright test --config= playwright.configMobilechrome.ts  --project=Mobile Chrome
- Finaly to run npm run ScriptName eg: npm run APITestCases

# How to Install and Run Jenkins:
- Install Docker at First 
- [Go to Docker hub and install the Jenkins Image](https://hub.docker.com/r/jenkins/jenkins)
- docker run -d --name jenkins -p 8080:8080 -p 50000:50000 jenkins/jenkins:latest (--d Detached mode, -p map the port) 
- [Jenkins Command](./LearningSnapshots/Jenkins.png)
- [Through Docker host open the Jenkins image](./LearningSnapshots/Dockerhost.png)
- docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword