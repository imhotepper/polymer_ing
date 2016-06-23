## Lab 1. Basic Setup
In this lab you will install all required prerequisites and
test the setup of webpack.
> duration: 30 minutes

### Step 1. Install the requirements
Create a directory named 'webpack_labs' and navigate into it.
Install NodeJS from it's website and install Webpack using
```
$ sudo npm install webpack -g
```
Create a package.json by using 
```javascript
npm init
```
Give appropriate values for the questions asked.

Create a file 'test.js' inside your current folder and write the following code
```javascript
console.log('test');
```
Save the file and run the command to build the bundle.js. Use your favorite text editor to inspect 
the generated file. Notice how the bundled file is wrapped into a module so when 
included into a page for example, the generated bundle does not pollute the global 
namespace.

Run the file using the following command:
```
$ node ./bundle.js
```
If all went well, the output should display 'test'

### Step 2. Link another file into test.js
Add another file, named test2.js and fill it with the following content:
```javascript
module.exports = "this second file is bundled aswell"
```
Update the first file, named test.js, to equal this content:
```javascript
var test2 = require('./test2.js');
console.log('test');
console.log(test2);
```
rebuild the bundle and test the result by executing:
```
$ node bundle.js
```
Inspect the generated bundle.js file and see how all content is bundled 
into this file. If all went well, the output should display the following:
```
test
this second file is bundled aswell
```
Notice how the entry point for the bundle still is test.js, which loads 
the test2.js as a dependency. 

-= End of lab =-
