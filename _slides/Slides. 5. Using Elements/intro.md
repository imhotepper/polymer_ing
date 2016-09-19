# Using Elements

--- 

### Polymer Element Catalog
Google has created a  set of mid-level and high level
components to help create applications. These elements
are bundled into a catalog.

[Element Catalog](https://elements.polymer-project.org/)

--- 

### Element Collections
* App Elements - Application level Elements (Routing)
* Iron Elements - Core Elements (icons etc)
* Paper Elements - Material Design Elements
* Neon Elements - Elements related to animation
* Gold Elements - E-Commerce Elements (ccard)
* Platinum Elements - HTML5 Elements (Offline, Push, etc)
* Google Web Components - Wrapper Elements for Google API
* Molecules - Custom Wrapper Elements for 3th parties

### Some usefull elements
* Paper Toolbar
* Paper Header Panel
* Paper Drawer Panel
* Paper Tabs
* Iron Pages
* Iron List
* Iron Pages
* App Routing
* Iron Ajax
* Local Storage

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

### Bind the elements together
Elements have properties, methods and fire events
You can connect elements by using data binding and event handling

Here is an example of two connected elements
```
<iron-ajax auto url='/data/data.json' handle-as='json' last-response='{{response}}' />
<iron-list items="[[response]]">...</iron-list>
```

### Listen to element events
Elements fire events wich you can use to act upon

Below is an example of an event
```
<iron-ajax auto url='...' handle-as='json' on-response='handleResponse' />
<paper-button on-tap='handleClick' />
```

The eventhandlers are functions you have to provide, just like regular DOM

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



