Lab 7. Offline Apps
In this lab we are going to make our application offline capable. We are going to use service workers and manifest files.
> duration: 35 minutes

### Step 1. Setting the state
Open file 'index.html' inside your current folder. If the exercise was not successful in the last
lab, you can copy and paste a version of the files from the _solution folder from the last 
exercise, these files can be found in './Lab. 6. Routing/_solution/Lab. Lazy Loading/'.

Make sure that the current setup works. Ask the instructor for help if you do not have a valid setup.

### Step 2. Add platinum elements
Include a file in the root of the site with the name sw-import.js, and give it the following contents:
```
importScripts('bower_components/platinum-sw/service-worker.js');
```

Save the file.

Add the platinum-elements html import to the page and add the following content to the index.html inside the template.
```
<platinum-sw-register skip-waiting  clients-claim reload-on-install auto-register>
    <platinum-sw-cache default-cache-strategy="networkFirst"></platinum-sw-cache>
</platinum-sw-register>
```

Dont forget to install the platinum elements and 
add the necessary includes in the header of the page
```
$ bower install platinum-elements
```

```
<link rel="import" href="/bower_components/platinum-sw/platinum-sw-elements.html"/>
```

Save all files and run lite-server to run the application. 
Use the developer tools (Application tab) to inspect the service workers and check to see if the service worker is up and running.
Also check the Cache Storage to see the files cached by the service worker.


Use the app, navigate through the pages andthen stop the server (ctrl+c). Refresh the application, is everything still working? Cool our app
works offline.


### Step 3. Add Manifest.json to the application
Add a new file to the root of the application and name it 'manifest.json'. Give the file the following contents
```
{
    "short_name": "Voting",
    "name": "Who's the next President",
    "description": "Select your next president",
    "icons": [
        {
            "src": "launcher-icon.png",
            "sizes": "48x48",
            "type": "image/png"
        },
        {
            "src": "launcher-icon-144.png",
            "sizes": "144x144",
            "type": "image/png"
        }
    ],
    "start_url": "/",
    "display": "fullscreen",
    "orientation": "portrait",
    "theme_color": "#29BDBB",
    "background_color": "#29BDBB"
}
```

Save and close the file.

The launcher icons can be found in the _starterfiles from this lab. 
Copy these files into the root of the application.

Open the 'index.html' page and add a link to the created manifest.json with the following tag
```
<link rel="manifest" href="./manifest.json">
``` 

While we are in the index.html, lets add a viewport metatag aswell. Add the following just above the
manifest link

```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Save the index page. Run the lite-server and clear all caches (Application tab -> Clear Storage).
Click on the Manifest icon in the Application Tab and select the link on the right to pin your application to the homescreen.

Did it work?

Start the application from the shortcut that just got added to the homescreen and inspect to see that everything is working correctly.

### Summary
We've made an offline application with a homescreen shortcut. Lets use a database to store our data next.


-= End of lab =-
  