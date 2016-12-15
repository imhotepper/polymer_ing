# Layouts

---
### Layouts
* Flexboxes in HTML5
* Flexboxes in Polymer

---
### Flexboxes in HTML5
Really basics of Flexboxes
* container is 'display:flex'
* childs are positioned 'flow' style
* childs are sized 'flexible' style
* ...and a lot more...
    * row-reverse, align-content, 
    align-items, flow-direction etc..

---
### Flexboxes in HTML5

An example
```
<div style="display:flex">
    <div style="flex:1;background-color:green"></div>
    <div style="flex:2;background-color:blue"></div>
    <div style="flex:1;background-color:yellow"></div>
</div>
```

---
### Flexboxes in Polymer
* Iron-flex-layout component 
* Two different ways to use flexbox
    * Layout classes
    * Custom CSS mixins

---
### Layout classes
To use, import the iron-flex-layout-classes file
```html
<link rel="import" href="bower_components/iron-flex-layout/iron-flex-layout-classes.html">
```
then include the module(s) you need
```
<style is="custom-style" include="iron-flex iron-flex-alignment">
<!-- -or- -->
<style include="iron-flex iron-flex-alignment">
```
then simply apply the classes to any element
```html
<div class="layout horizontal wrap">
```

---
### Layout class modules
Polymer has  5 modules

* iron-flex -> Basic flex layouts
* iron-flex-reverse -> Reverse flexbox layouts
* iron-flex-alignment -> Main axis, cross axis and self alignment
* iron-flex-factors -> All the available flex factors
* iron-positioning -> Generic, non-flexbox positioning helpers


---
### Complete example
```html
<head>
  ...
  <link rel="import" href="bower_components/iron-flex-layout/iron-flex-layout-classes.html">
  ...
  <!-- main document -- include the module you need in a custom-style element -->
  <style is="custom-style" include="iron-flex"></style>
</head>
<body>
  <div class="layout horizontal">
    <div>One</div>
    <div>Two</div>
    <div>Three</div>
  </div>
</body>
```