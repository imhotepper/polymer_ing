# Web App Manifest

---
### Web App Manifest
* a JSON file that gives you the ability to control how your app appears
  to the user in the areas that they would expect to see apps 
* determines how your app can be launched

* To integrate 
    * Create and deploy a manifest file.
    * Add a link element from the pages to the manifest file.

---
### Example Manifest
```
{
  "short_name": "Amaze App",
  "name": "Amazing Application ++",
  "icons": [
    {
      "src": "launcher-icon-2x.png",
      "sizes": "96x96",
      "type": "image/png"
    },
    { ... }
  ],
  "start_url": "/index.html",
  "display": "standalone",
  "orientation": "landscape"
}
```

---
### Considerations
Chrome's implementation
* short_name is preferred over name and if provided will be used
* as of Chrome 42, also provide a name which will be used for the App Install Banner
* If you don't supply a start_url it will use the current page's url
* Chrome will look for icons that match the density of the display 

---
### Linking the Manifest
Once you have the manifest created and hosted, 
add a link tag from all your pages as follows
```
<link rel="manifest" href="/manifest.json">
```

---
### Progressive Gain
Manifest display setting
* Utility Apps
  ```
  "display": "standalone"
  ```
* Games
  ```
  "display": "fullscreen",
  "orientation": "portrait"
  ```
*  News Sites
  ```
  "display": "browser"
  ```

---
### Progressive Gain
How to detect launch mode?
* navigator.standalone (IOS)
* media-query 

---
### Example Media Query
```
@media all and (display-mode: standalone) {
  body { background-color: yellow;  }
}
```
From JavaScript:
```
if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log("Thanks!");
}
```

---
### Requirements
Chrome on Android will proactively suggest install of web app, 
via a web app install banner. 

Your web app needs to
* have a valid web app manifest file
* be served over HTTPS
* have a valid service worker registered
* have been visited twice, with at least five minutes between each visit


--- 
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Demo Manifest.json

---
<!-- .slide: data-background="url('images/lab2.jpg')" --> 
<!-- .slide: class="lab" -->
## Lab time!
Lab Manifest.json

