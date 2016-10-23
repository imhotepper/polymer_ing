## Lab 8. Local Storage
In this lab you will add different persistence implementations to a todo app. 
First you will implement local storage to the todo app in the starter files. 
In the next labs, we add different other implementations. 
> duration: 30 minutes

### Step 1. Create a setup
Create a directory 'polymer_labs\storage' and navigate into it.
Install NodeJS from it's website and use npm to install lite-server globally
```
$ sudo npm install lite-server -g
```

Copy the file 'index.html' from the starter files from this lab, found in the directory 
'_starterfiles/Lab. Local Storage' into your current folder and 
inspect the code from this file.

Open a terminal or command prompt, navigate into the 'polymer_labs\storage' folder and 
start lite-server using the following command:

````
lite-server
````

Test the workings of the todo app. Add a few todos and refresh the page. See how the todos disappear?


### Step 2. Add an iron-localstorage element to the page
Open the earlier created 'index.html' and add the following contents

* Add an import for the iron-localstorage element
* Add an iron-localstorage element to the page

Reopen or refresh the index.html and if all went well, the page displays a working setup.
Add a few todos and refresh the page. Are the todos persisted?

Open the chrome-devtools by right clicking on the page and navigate to the application tab. 
In the left pane, open the localstorage container and open the localstorage for the webapplication. 

Note the todos inside the container? Remove the todos from the container and refresh the page.

If all went well, the page is empty again.

### Summary
We've implemented localstorage for the todo application, in the next lab, we will use other storage options. 

-= End of lab =-
  