# Service Workers

---
### Introduction

* Service Worker is a promise-based cache and proxy script for implementing
url and data-caching strategies. 

Service Workers provide base technology for
* Rich offline experiences
* periodic background syncs, 
* push notifications—functionality

Service Worker is part of HTML5

---
### Service Worker

> A service worker is a script that your browser runs in the background, 
> separate from a web page, opening the door to features that don't need a 
> web page or user interaction

* Service Worker is the better version of the Application cache
* The service worker is a specific kind of web worker

---
### Service Worker

Some point about service workers:
* It's a JavaScript Worker, so it can't access the DOM directly.
* Service worker is a programmable network proxy, allowing you to control how network requests from your page are handled.
* It's terminated when not in use, and restarted when it's next needed
* Service workers do have access to the IndexedDB API.
* Service workers make extensive use of promises

---
### Service worker lifecycle

First installation<br/>
<img height="450" src="/images/sw-lifecycle.png"/>

---
### Service worker requirements

* Service worker requires HTTPS, localhost with http will work but 
upon deployment HTTPS is required!
* Service workser have a scope
    * Catch requests from clients under scope only
    * Max scope is the location of the workers

---
### How to use service worker
 Steps to implement 
1. Registering the worker
2. Add eventlisteners for different stages of the service worker

---
### Example service worker
The implementation could look like
```
// Use a cacheName for cache versioning
var cacheName = 'v1:static';
// During the installation phase, you'll usually want to cache static assets.
self.addEventListener('install', function(e) {
    // Once the service worker is installed, 
    // go ahead and fetch the resources to make this work offline.
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll([
                './',
                './css/style.css',
                './offline.html'
            ]).then(function() {
                self.skipWaiting();
});}));});

// when the browser fetches a URL…
self.addEventListener('fetch', function(event) {
    // … either respond with the cached object or go ahead and fetch the actual URL
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                return response;
            }
            // fetch as normal
            return fetch(event.request);
}));});
```

---
### Serice Worker Registration
The registration could look like this
```
// Register the service worker if available.
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(function(reg) {
        console.log('Successfully registered service worker', reg);
    }).catch(function(err) {
        console.warn('Error whilst registering service worker', err);
    });
}
```

---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!

---
### Platinum-sw-worker
Looks like a lot of code?
> There are elements for that!

Platinum Service Worker Elements

---
### Platinum Service Worker Elements
A set of Polymer elements that simplify service worker registration and caching

Prerequisites
* application must be served over HTTPS. 
* local system works without a SSL certificate, localhost is secure origin

---
### Platinum-sw-elements
The service worker elements are
* platinum-sw-register
* platinum-sw-cache
* platinum-sw-fetch
* platinum-sw-import-script
* platinum-sw-offline-analytics

---
### Platinum-sw-register
The 'platinum-sw-register' element handles 
* service worker registration
* overall service worker state
* coordinates the configuration provided by other sw Elements

---
### platinum-sw-cache 
This element
* precache specific resources
* perform runtime caching 
* serve cached resources when network is unavailable
* uses the sw-toolbox library
* needs to be a child of platinum-sw-register
* uses the default defaultCacheStrategy of "networkFirst"

---
### Example 
```
 <platinum-sw-register 
    skip-waiting
    auto-register
    clients-claim
    reload-on-install
    state="{{state}}">
<platinum-sw-cache 
    default-cache-strategy="networkFirst"
    precache="{{precacheList}}"></platinum-sw-cache>
</platinum-sw-register>
```

---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Platinum Service Workers

---
<!-- .slide: data-background="url('images/lab2.jpg')" --> 
<!-- .slide: class="lab" -->
## Lab time!
Lab Implement offline support
