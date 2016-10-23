# Service Worker in HTML5

---

### Introduction

* Service Worker is a promise-based cache and proxy script for implementing
url and data-caching strategies. 

Service Workers provide base technology for
* Rich offline experiences
* periodic background syncs, 
* push notifications—functionality

Service Worker is part of HTML5

### Service Worker

> A service worker is a script that your browser runs in the background, 
> separate from a web page, opening the door to features that don't need a 
> web page or user interaction

* Service Worker is the better version of the Application cache
* The service worker is a specific kind of web worker

### Service Worker

Some point about service workers:
* It's a JavaScript Worker, so it can't access the DOM directly.
* Service worker is a programmable network proxy, allowing you to control how network requests from your page are handled.
* It's terminated when not in use, and restarted when it's next needed
* Service workers do have access to the IndexedDB API.
* Service workers make extensive use of promises

### Service worker lifecycle

First installation
<img src="./images/sw-lifecylce.png"/>


### Service worker requirements

* Service worker requires HTTPS, localhost with http will work but 
upon deployment HTTPS is required!
* Serivce workser have a scope
    * Catch requests from clients under scope only
    * Max scope is the location of the workers

### How to use service worker
 
Steps to implement 
1. Registering the worker
2. Add eventlisteners for different stages of the service worker

---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!



