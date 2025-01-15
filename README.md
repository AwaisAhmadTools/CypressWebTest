# Cypress WebTest

## Test Execution

After you have pulled the git repository, you can then run <b>npm install</b>

Once the dependencies are installed you can then run the following commands to execute the test scripts:

1. Rename the json file cypress/fixtures/web-data-example.json to  cypress/fixtures/web-data.json
<b>populate the web-data.json file with the parameters you would like to use to test with.

2. Execute the following command to run the docker containers for cypress images and execute the test:
> docker run -it -v "${PWD}:/e2e" -w /e2e cypress/included:13.17.0

OR

>docker run -it -v "${PWD}:/e2e" -w /e2e cypress/included:13.17.0 --browser chrome
  
  If the browser argument is not passed, the browser will default to electron. 

## Test Execution Report

This framework has been built using mochawesome reports. After execution the reports can be viewed at the following location:
cypress/reports/html/index.html