## Lab 8. Local Storage
In this lab you will add different persistence implementations to the voting app. 
First you will implement local storage.

In the next labs, we add different other implementations. 
> duration: 30 minutes

### Step 1. Setting the state
Open file 'index.html' inside your current folder. If the exercise was not successful in the last
lab, you can copy and paste a version of the files from the _solution folder from the last 
exercise, these files can be found in './Lab. 7. Offline Apps/_solution/Lab. Offline Apps/'.

Make sure that the current setup works. Ask the instructor for help if you do not have a valid setup.


### Step 2. Add an iron-localstorage element to the page
Open the earlier created 'index.html' and add the following contents

* Add an import for the iron-localstorage element
* Add an iron-localstorage element to the page

Reopen or refresh the index.html and if all went well, the page displays a working setup.
Do some voting and refresh the page. Are the votes persisted?

If the votes are not persisted, and they probably aren't, try to check if there is code on the page that 
initializes the votes array upon page load. Comment out this line of code.

Save all files and try again. Are the votes persisted?
 
Open the chrome-devtools by right clicking on the page and navigate to the application tab. 
In the left pane, open the localstorage container and open the localstorage for the webapplication. 

Note the vote object array inside the container? Remove the array from the container and refresh the page.

If all went well, the page is empty again.

### Summary
We've implemented localstorage for the voting application, in the next lab, we will use other storage options. 

-= End of lab =-
  