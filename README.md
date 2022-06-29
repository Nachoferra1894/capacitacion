# Cypress demo

To run this projet:
  1. Clone https://github.com/Nachoferra1894/capacitacion.git to your machine
  2. Open the project and use the command npm i to install cypress dependency, alongside eslint for cypress.
  3. Use npm start to start the projet. React 17.^ is required to run. 
  4. Cypress tests are located inside cypress/e2e/app. You can run all in another terminal with npx cypress run, or use npx cypress open and then click         E2E testing to see it work live. If you see "No version of Cypress is installed in:" run *npx cypres install*


Pd: Api calls don't work in the browser due to CORS, to see them install https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=es. This is optional, as calls work inside cypress due to chromeWebSecurity: false, in cypress.config

