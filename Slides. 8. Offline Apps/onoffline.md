# Offline Apps

---
### Agenda
* Whats needed
* ViewPort meta tag
* On/Offline detection
* Service Workers
  * Platinum Elements
* Web App manifest

---
### Whats needed
To make apps work offline, we need to 
* Set appropriate meta tags
* Cache the resources
* Cache the data
* Make App Installable
    * Manifest.JSON

---
### ViewPorts 
* Websites are scaled by default
    * very small, bearely readable
```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
Example: http://www.w3schools.com/css/css_rwd_viewport.asp

---
### On- Offline detection
Following options
* using vanilla JavaScript
* using Polymer Behavior
  * Polymer.appNetworkStatusBehavior

---
### JavaScript On- and Offline
just HTML5
To detect
* get current state
  * navigate.onLine property
* subscribe to change events
```
   addEventListener('online', function(){});
   addEventListener('offline', function(){});
```

---
### Polymer.appNetworkStatusBehavior
Include this behavior to get the networkstatus
* does fire events
  * on-online

---
### Polymer.appNetworkStatusBehavior
Include this behavior to get the networkstatus
* does fire events
  * on-online

--- 
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Demo Polymer.appNetworkStatusBehavior

---
<!-- .slide: data-background="url('images/lab2.jpg')" --> 
<!-- .slide: class="lab" -->
## Lab time!
Lab On- and Offline
