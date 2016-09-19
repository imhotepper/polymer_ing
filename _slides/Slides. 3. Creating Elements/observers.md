# Creating Elements

--- 

### Creating Elements

Lessons:
- Anatomy of an element
- Properties
- Methods
- Event Listeners
- Data Binding
--- 

### Anatomy of an element
An element definition has an 
* imperative part
    - call to Polymer({...})
* declarative part. T
    - the 'dom-module' element. 
    
The parts of an element's definition may be placed in the same html file 
or separate files.
---

### Declarative part
The declarative part of an element has 
the following template

```
<dom-module id="icon-toggle">
  <template>
    <style>
      /* local styles go here */
      :host {
        display: inline-
        block;
      }
    </style>
    <!-- local DOM goes here -->
    <span>Not much here yet.</span>
  </template>
```

### Declarative part(2)
* The 'dom-module' tag wraps the local DOM definition. 
The id attribute shows that this module is called icon-toggle.
* The 'template' defines the local DOM structure and styling. 
This is where you'll add markup for your custom element.
* The 'style' element define styles scoped to the local DOM.
They don't affect the rest of the document.
* The :host pseudo-class matches the element defined.
This is the element that contains or hosts the local DOM tree.

What is the local DOM?
---

### Local DOM

* Local DOM
    - DOM thats independent from the 'normal' DOM
    - Implemented as Shadow DOM
    - Implemented as Shady DOM (custom implementation)
* Light DOM
    - the 'normal' DOM

Polymer will automatically clone the template's contents 
into the element's local DOM.

Currently Polymer uses shady DOM by default on all browsers.

### Automatic Node Finding

Nodes specified in template with an id is stored on the this.$ hash by id.
```
<template>
    Hello <span id="name"></span>!
</template>
<script>
    Polymer({
      is: 'x-custom',
      ready: function() {
        this.$.name.textContent = this.tagName;
    }});
</script>
```

Statically created instance nodes only!
--- 

### Automatic Node Finding(2)
* For locating dynamically-created nodes, use the $$ method
    - this.$$(selector)
        - returns first node in local DOM that matches selector
* $$ is alias for Polymer.dom(this.root).querySelector():
---

### DOM distribution
Composition of element's light DOM with its local DOM
* Content Element
    - provides insertion point
    - supports select attribute

```
<template>
  <header>Local dom header followed by distributed dom.</header>
  <content select=".content"></content>
  <footer>Footer after distributed dom.</footer>
</template>
```


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



