# Routing

---
### Agenda
* Routing and Location
* Lazy Loading
* Lazy Routing

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

---
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
<link rel="import" href="/app-elements/app-elements.html" />
```
into your page, you can use the elements like

```
<app-route></app-route>
```

---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Routing Location Element

---
### App-Route
App Route takes and dissects a route object
* can be used for 2 way binding
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
Route Converter

---
<!-- .slide: data-background="url('images/lab2.jpg')" --> 
<!-- .slide: class="lab" -->
## Lab time!
Add Routing to the application

---
### Lazy Loading
Elements can be Lazy Loaded on demand
* Add element to the page
* Don't include the href import
* Use this.importHref API to load element on demand

---
### Lazy Loading Example 
```
 <button id="load" on-tap="loadElement">load element</button>
```
```
loadElement: function(){
    this.importHref(this.resolveUrl('./my-element.html'));
}
```

---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Lazy Loading

---
### Lazy Routing
Third party router created by Erik Ringsmuth 
* https://github.com/erikringsmuth/app-router

* Loads elements when a route matches
* supports 404 not found elements

```
bower install app-router
```

---
### Lazy Routing Example
```
<app-router>
   <app-route path="/home" import="/pages/home-page.html"></app-route>
   <app-route path="/customer/*" import="/pages/customer-page.html"></app-route>
   <app-route path="/order/:id" import="/pages/order-page.html"></app-route>
   <app-route path="*" import="/pages/not-found-page.html"></app-route>
</app-router>
```

---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Lazy Routing

---
<!-- .slide: data-background="url('images/lab2.jpg')" --> 
<!-- .slide: class="lab" -->
## Lab time!
Add Lazy loading to the application




