# Routing

--- 

### Routing  
Routing is the technique to connect a location (with state) to a page in SPA.
* location could be the url
* page is the reflection of state in SPA


--- 

### Elements for Routing
* App Elements - Application level Elements (Routing)
    * app-location
    * app-route
    * app-route-converter


### App-location

App-Location is an element that reflects the current location from the url
and updates the url when the location property is set.

```
<app-location route="{{route}}" use-hash-as-path></app-location>
```

--- 

### How to use the elements
By including the html 
```
<link rel="import" href="/element-set/element-set.html" />
```
into your page, you can use the elements like

```
<page-toolbar></page-toolbar>
```

--- 

<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Routing Location Element

### App-Route
App Route takes and dissectes a route object
* can be used fot 2 way binding
* Route object contains
    * Prefix
    * path
    * queryParams

--- 

### App-Route example

Simple example

```
<app-location route="{{route}}"></app-location>
<app-route
    route="{{route}}" pattern="/:page"
    data="{{data}}" tail="{{tail}}">
</app-route>
```

---

### App-Route example

Simple example with tail

```
<app-location route="{{route}}"></app-location>
<app-route
    route="{{route}}" pattern="/:page"
    data="{{routeData}}" tail="{{subroute}}">
</app-route>
<app-route
    route="{{subroute}}" pattern="/:id"
    data="{{subrouteData}}">
</app-route>
```

--- 

<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
App-Route demo

---

### App Route Converter
Build a route object to use for route or location
programatically

---

### example

```
<iron-location path="{{p}}" query="{{q}}"></iron-location>
<iron-query-params params-string="{{q}}" params-object="{{qp}}">
</iron-query-params>
<app-route-converter
    path="{{p}}" query-params="{{qp}}" route="{{r}}">
</app-route-converter>
<app-route route='{{r}}' pattern='/:page' data='{{d}}'>
</app-route>
```

--- 

<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
App-Route demo

---

### Using inline modules
Polymer provides <code>dom-module</code> to provide for document level 
elements. 
It is usefull to wrap the elements in a dom-module for
* databinding support
* theming support
* scoping

### Using inline modules
To declare an inline dom-module, you write
```
<dom-module id='my-app' [is='dom-bind|dom-if|dom-repeat']>
<style>... your styles here ...</style>
<template>... your markup here ...</template>
<script>... your script here ...</script>
</dom-module>
```




