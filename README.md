# Steps to run the test :

1. Download the zip for this project
2. Open it in VS code
3. Navigate to <code>demoFolder</code>
4. Install cypress using <code> npm install cypress --save-dev </code>
5. Open cypress using <code> node_modules/.bin/cypress open </code>



# Test suite :
The test steps are included in <code>takeaway.spec.js</code> inside <code>demoFolder/cypress/integration/assignment</code>

# Test steps :
1. User opens homepage
2. User searches for address
3. User selects restaurant and add 3 items in basket
4. User proceeds the checkout without entering mandatory details
5. User adds mandatory details and proceeds with PayPal
6. User cancels PayPal payment and proceeds with cash
7. User sees success page

# Note :
I have tried running the test on <code>Chrome 90</code>,<code>FF 86</code> and <code>Electron 89</code> 
but always got the page shown below
<img width="1353" alt="no-access" src="https://user-images.githubusercontent.com/82906434/115956040-e8d53c00-a4fa-11eb-9e1d-ab8f6acec988.png">
