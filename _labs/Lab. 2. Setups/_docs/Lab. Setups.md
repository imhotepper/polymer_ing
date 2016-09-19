## Lab 1. Basic Setup
In this lab you will create a polymer setup using the cdn and polymer-cli
> duration: 30 minutes

### Step 1. Create a CDN polymer setup
Create a directory 'polymer_labs\setups' and navigate into it.
Install NodeJS from it's website and use npm to install lite-server globally
```
$ sudo npm install lite-server -g
```

Create a subdirectory 'cdn' and navigate into it. Add a file 'index.html' 
inside your current folder and write a html page that imports the polymer library from the cdn.

The cdn is located here:
https://github.com/Download/polymer-cdn


Open the page inside Chrome. Does the page work? Do you see content?

### Step 2. Add a custom element to the index page
Open the earlier created 'index.html' and add the following content to the body
of the index.html

```
<dom-module id="temp-element">
  <template><h1>Polymer works!</h1></template>
  <script>
  Polymer({
    is:'temp-element'
  })
  </script>
</dom-module>
<temp-element></temp-element>
```

Reopen or refresh the index.html and if all went well, the page displays a working setup.

### Step 3. Using Polymer-cli
Create a directory 'polymer_labs\setups' and navigate into it.

Create a subdirectory 'polymercli' and navigate into it. 

Inside this folder, install polymer-cli by issueing the following
commands in the terminal (or on the DOS prompt):
```
sudo npm i polymer-cli -g
```

Wait for the install to complete. After the install is completed, 
create a new application using the following command:
```
polymer init 
```

Choose application as the menu option to scaffold. After the scaffolding is done, 
run the Polymer application with the following command:
```
polymer serve
```

If all went well, you now should look at a working running polymer application.
This application is built using best practices and contains demo pages, documentation
and test setups.

### Step 3. Extra exercise
Try to install and use YO to scaffold a Polymer application and a Polymer element. 
After scaffolding these items, try to test them in your browser.

### Summary
We've looked at different ways to create or scaffold Polymer applications. 

-= End of lab =-
  