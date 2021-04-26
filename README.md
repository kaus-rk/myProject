# Steps to run the test :

1. Download the zip for this project
2. Open it in VS code
3. Navigate to <code>demoFolder</code>
4. Make sure your system has Node.js 12 or 14 and above
5. Install cypress using <code> npm install cypress --save-dev </code>
6. Open cypress using <code> node_modules/.bin/cypress open </code>
7. Click on <code>takeaway.spec.js</code> in the test runner
<img width="799" alt="test-runner" src="https://user-images.githubusercontent.com/82906434/115956423-df4cd380-a4fc-11eb-9477-5e9d28059a9d.png">




# Test suite :
The test steps are included in <code>takeaway.spec.js</code> inside <code>demoFolder/cypress/integration/assignment</code>

PageObjects are defined inside <code>demoFolder/cypress/support/page_objects</code>

baseUrl is set as <code>https://www.pyszne.pl/</code> in <code>cypress.json</code>

# Test steps :
1. User opens homepage
2. User searches for address
3. User selects restaurant and adds 3 items in basket
4. User proceeds the checkout without entering mandatory details
5. User adds mandatory details and proceeds with PayPal
6. User cancels PayPal payment and proceeds with cash
7. User sees success page

# Note :
I have tried running the test on <code>Chrome 90</code>,<code>FF 86</code> and <code>Electron 89</code> 
but always got the page shown below

<img width="799" alt="no-access" src="https://user-images.githubusercontent.com/82906434/115956040-e8d53c00-a4fa-11eb-9e1d-ab8f6acec988.png">
