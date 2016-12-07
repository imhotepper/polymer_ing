## Lab 8. Ajax
In this lab you will use AJAX calls to retrieve and store votes from a webserver.
> duration: 30 minutes

### Step 1. Setting the state
Open file 'index.html' inside your current folder. If the exercise was not successful in the last
lab, you can copy and paste a version of the files from the _solution folder from the last 
exercise, these files can be found in './Lab. 8. Persistence/_solution/Lab. Local Storage/'.

Make sure that the current setup works. Ask the instructor for help if you do not have a valid setup.


### Step 2. Add Iron-Ajax to the application
Open the earlier created 'index.html' and add the following contents

* Copy the server.js file from the '_starterfiles' directory for this lab into the root of your 
current working folder.
* Install express as npm package from the command prompt
```
npm install express body-parser
```

* Remove the iron-localstorage element from the page, since we are going to retrieve the data from the server.

* Add two iron-ajax elements to the page, one to automatically retrieve votes from the server, and one to post 
votes to the server.. Give them both ids, 'getVotes' and 'postVote' respectively. Bind the body of the postVote
to a local variable named 'currentvote'. The postVote should use the content-type 'application/json' as value to 
be able to post JSON data.

* Use methods to call the generateRequest() api to post data to the server and retrieve new data from the server. 
These methods should be placed in the vote method like so:
```
vote: function(e){
    this.currentvote = e.detail;
    this.$.postVote.generateRequest();
    this.$.getVotes.generateRequest();
    // this.push('votes', e.detail);
}
```

Start the server to run the application, but this time use the following command to start the server
```
node server.js
```

Wait for the console to print that the server is up and running. 

> Note that when retrieving new items from the back-end, the list is repopulated but not repainted. This is 
> a well-known issue. The workaround is to fire an 'iron-resize' from the list that needs to repaint. This 
> code looks something like this: this.$.list.fire('iron-resize');

Reopen or refresh the index.html and if all went well, the page displays a working setup.
Add a few votes and refresh the page. Are the votes persisted? 

Does the ajax get call get logged in the server console?
Does the ajax post call get logged in the server console? 


### Extra: Step 3. Spot the bug
when there are more than 10 votes, the current winner is calculated and shown on the screen. Does this functionality
still work correctly? Why not? What is wrong here? Fix it!

> Note: there are two bugs. Upon entry, the winner is not calculated. Upon voting, the wrong outcome is displayed. 


### Summary
We've implemented ajax calls to retrieve and post votes for the vote application, 
in the next lab, we will use other storage options. 

-= End of lab =-
  