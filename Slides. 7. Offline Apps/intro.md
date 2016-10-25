# Offline Apps

---
### Agenda
* Whats needed
* ViewPorts
* Web App manifest
* Service Workers
* Platinum Elements


---
### Whats needed
To make apps work offline, we need to 
* Make App Installable
    * Manifest.JSON
* Cache the resources
* Cache the data

---
### ViewPorts and Manifest.JSON
* Websites are scaled by default
    * very small, bearely readable
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
Example: http://www.w3schools.com/css/css_rwd_viewport.asp


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

<link rel="manifest" href="/manifest.json">

---
### Example
```
<paper-input value="{{idee}}"></paper-input>
<app-localstorage-document key="idee" data="{{idee}}">
</app-localstorage-document>
```

---
### Polymer Localforage

* Third party component 
* Uses async WebSql/IndexedDB storage

Example
```
<x-foo value="{{value}}"></x-foo>
<polymer-localforage id="localstorage" name="test" value="{{value}}"></polymer-localforage>
```

more info
<a href="https://customelements.io/addyosmani/polymer-localforage/">customelements.io</a>

--- 
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Demo 1. Local Storage

---
<!-- .slide: data-background="url('images/lab2.jpg')" --> 
<!-- .slide: class="lab" -->
## Lab time!
Local Storage

---
### Remote Storage

Remote storage often is BackEnd storage
* accessible through service calls
* persisted in server side database
* shareable across more (cuncurrent) users

---
### Remote Storage
Web services through ajax calls
* iron-ajax

Remote Database API
* PouchDB Element
* Firebase Elements

---
### Iron-Ajax

Make AJAX calls through an element, example:
```
<iron-ajax
    auto
    method="POST|GET"
    url="https://www.googleapis.com/youtube/v3/search"
    params='{"part":"snippet", "q":"polymer", "key": "YOUTUBE_API_KEY", "type": "video"}'
    handle-as="json"
    on-response="handleResponse"
    debounce-duration="300"></iron-ajax>
```

--- 
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Demo 2. Iron-Ajax

---
<!-- .slide: data-background="url('images/lab2.jpg')" --> 
<!-- .slide: class="lab" -->
## Lab time!
Iron-Ajax

---
### PouchDB
PouchDB is a JavaScript CouchDB NOSQL storage provider
* supports local and remote databases
* app-pouchedb-document element to access database

You can run CoucheDB databases and PoucheDB databases remote or local.

---
### PouchDB Elements
* app-pouchedb-document
* app-pouchedb-query
* app-pouchedb-index 
* app-pouchedb-conflict-resolution
* app-pouchedb-sync


---
### pouchedb setup
Steps
* Install a server (pouchedb-server)
* Use app-pouchedb elements to store state

---
### Firebase
Firebase is a product that offers
* Authentication
* Connected Database
* Push Notifications
* App Hosting

---
### Firebase tools 
PolymerFire
* Elements for Firebase

url: https://github.com/firebase/polymerfire

---
### Hybrid Storage
Sometimes one techni
