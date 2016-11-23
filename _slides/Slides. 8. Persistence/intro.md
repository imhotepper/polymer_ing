# Persistence

---
### Agenda
* Local Storage
* Remote Storage
* Hybrid Storage
* Polymer Storage Behavior

---
### Local Storage
* Data persisted on the client
    *  Local Storage
        * iron-localstorage
        * app-localstorage-document
    *  IndexedDb/WebSQL
        * polymer-localforage

---
### Local Storage
Example
```
<paper-input value="{{idee}}"></paper-input>
<iron-localstorage name="idee" data="{{idee}}">
</iron-localstorage>
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
    content-type="application/json"
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

