## Lab 8. Ajax
In this lab you will use AJAX calls to retrieve and store items from a webserver.
> duration: 30 minutes

### Step 1. Create a setup
Create a directory 'polymer_labs\ajax' and navigate into it.
Install NodeJS from it's website and use npm to install lite-server globally
```
$ sudo npm install lite-server -g
```

Install 'express' and 'body-parser' using the following command
```
$ npm install express body-parser
```

Copy the files from the starter files from this lab, found in the directory 
'_starterfiles/Lab. Ajax' into your current folder and inspect the code from the file 'index.html'.

Start the express server using the following command in the terminal
```
node ./server.js
```

If it started correctly, you should see the server listening on port 3001.
Open a browser and navigate to http://localhost:3001/

Test the application, it should work, however, the data is not retrieved and stored from/to the running server. 

### Step 2. Add Iron-Ajax to the application
Open the earlier created 'index.html' and add the following contents

* Add two iron-ajax elements to the page, one to retrieve todos from the server, and one to post 
todos to the server..
* Use methods to call the generateRequest() api to post data to the server and retrieve new data from the server

> Note that when retrieving new items from the back-end, the list is repopulated but not repainted. This is 
> a well known issue. The workaround is to fire an 'iron-resize' from the list that needs to repaint. This 
> code looks something like this: this.$.list.fire('iron-resize');

Reopen or refresh the index.html and if all went well, the page displays a working setup.
Add a few todos and refresh the page. Are the todos persisted? 
Does the ajax get call get logged in the server console?
Does the ajax post call get logged in the server console? 



### Summary
We've implemented ajax calls to retrieve and post todos for the todo application, 
in the next lab, we will use other storage options. 

-= End of lab =-
  