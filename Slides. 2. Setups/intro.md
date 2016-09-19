# Polymer Setup

---
### Polymer Setup
Polymer exists totally client-side, so no complex setup. 
We just need the Polymer HTML includes...

To get these, we can use:
- CDN
- Bower
- YO/Yeoman
- Polymer-CLI

---
### CDN 

The HTML files that contain Polymer can be obtained from a CDN

* CDN stands for Content Deployment Network
* The polymer lib is located at this URL
```
https://cdn.rawgit.com/download/polymer-cdn/1.5.0/lib/polymer/polymer.html
```

In general, given an element named my-cool-element, the CDN url for it will be:
```
https://cdn.rawgit.com/download/polymer-cdn/1.5.0/lib/my-cool-element/my-cool-element.html
```

---
### CDN Pros and Cons

* CDN imports are easy
* CDN imports work on collaboration platforms like JSFiddle, CodePen, etc..
* Does not require anything besides an HTML editor

* The CDN can be very slow!
* CDN imports are not vulcanized


---
### Bower
To get the polymer HTML pages, type:
```
npm install bower -g 
```
and then type
```
bower install polymer --save
```

Wait for the installation to complete.. You now can create polymer apps..

---
### Bower Pros and Cons

* Simple setup and install
* Downloads just whats needed
* Imports can be vulcanized

* Bower has no scaffolding for applications, elements and tests
* Requires NodeJS

---
### Yo/Yeoman
To install polymer and scaffold applations and elements
you can use YO/Yeoman.

To install Yo/Yeoman, type
```
npm install yo generator-polymer -g 
```
To create a polymer application type
```
yo polymer
```
To create a polymer element inside the application, type
```
yo polymer:el 
```

---
### Yo Pros and Cons

* Generates Applications, Elements and Tests 
* Known Scaffolding tool for NodeJS

* Uses Gulp as build tool
* Requires NodeJS


---
### Polymer-cli
To install polymer and scaffold applations and elements
you can use Polymer-CLI.

To install Polymer-cli, type
```
npm install polymer-cli -g 
```
To create a polymer application type
```
polymer init
```
Choose to create an element or application

---
### Polymer-cli Pros and Cons

* Scaffolds Applications, Elements and Tests 
* Is Polymer aware and hosts elements correctly
* Has support for linting, deploying, testing and serving apps.

* Again Another tool 
* Requires NodeJS

---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Demo 1. Setups

---
<!-- .slide: data-background="url('images/lab2.jpg')" --> 
<!-- .slide: class="lab" -->
## Lab time!
Testing Setups