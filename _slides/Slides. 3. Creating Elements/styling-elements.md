# Styling elements

---

### Styling elements

Elements can contain styles
* in a style tag inside the template

Styles just affect the local DOM.

---
### Example styling
```
<dom-module id="my-element">
  <template>
    <style>
      :host { display: block; border: 1px solid red; }
      #child-element { background: yellow; }
      .content-wrapper ::content > .special {
        background: orange;
      }
    </style>
    <div id="child-element">In local DOM!</div>
    <div class="content-wrapper"><content></content></div>
  </template>
  <script>
      Polymer({ is: 'my-element'});
  </script>
</dom-module>
```

---
### Cross-scope styling
* Style are isolated
* What about intentionally customizing the style of a custom element's 
local DOM?

* use custom css properties (HTML 5 standard)

---
### Custom CSS properties
Polymer includes a shim for custom CSS properties
* Rather than exposing  details of element's internal implementation 
for theming, instead an element author defines one or more custom
CSS properties

---
### Example element ready for theming
```
Example:
<dom-module id="my-toolbar">
  <template>
    <style>
      :host { padding: 4px; background-color: gray;}
      .title {
        color: var(--my-toolbar-title-color, blue);
      }
    </style>
    <span class="title">{{title}}</span>
  </template>
  <script>
    Polymer({
      is: 'my-toolbar',
      properties: { title: String }
    });
  </script>
</dom-module>
```

---
### Example usage of theming
```
Example usage of my-toolbar:
<dom-module id="my-element">
  <template>
    <style>
      /* Make all toolbar titles in this host green by default */
      :host { --my-toolbar-title-color: green; }
      /* Make only toolbars with the .warning class red */
      .warning { --my-toolbar-title-color: red; }
    </style>
    <my-toolbar title="This one is green."></my-toolbar>
    <my-toolbar title="This one is green too."></my-toolbar>
    <my-toolbar class="warning" title="This one is red."></my-toolbar>
  </template>
  <script>
    Polymer({ is: 'my-element'});
  </script>
</dom-module>
```

---
### Custom CSS mixins

It may be tedious (or impossible) for an element author to predict 
every CSS property that may be important for theming, 
let alone expose every property individually.

Use @apply to apply a mixin:
```
@apply(--mixin-name);
```
Defining a mixin is just like defining a custom property, but the value is an 
object that defines one or more rules:

selector {
  --mixin-name: {
    /* rules */
  };
}

---
### Custom CSS mixin example
```
    <dom-module id="my-toolbar">
    <template>
    <style>
      :host {
        padding: 4px;
        background-color: gray;
        @apply(--my-toolbar-theme);
      }
      .title {
        @apply(--my-toolbar-title-theme);
      }
    </style>
    <span class="title">{{title}}</span>
  </template>
  ...
</dom-module>
```

---
### Example usage
```
Example usage of my-toolbar:
<dom-module id="my-element">
  <template>
    <style>
      /* Apply custom theme to toolbars */
      :host {
        --my-toolbar-theme: {
          background-color: green;
          border-radius: 4px;
          border: 1px solid gray;
        };
        --my-toolbar-title-theme: {
          color: green;
        };
      }
      /* Make only toolbars with the .warning class red and bold */
      .warning {
        --my-toolbar-title-theme: {
          color: red;font-weight: bold;
        };
      }
    </style>
    <my-toolbar title="This one is green."></my-toolbar>
    <my-toolbar title="This one is green too."></my-toolbar>
    <my-toolbar class="warning" title="This one is red."></my-toolbar>
  </template>
  <script>
    Polymer({ is: 'my-element'});
  </script>

</dom-module>
```
---
### Custom property API for Polymer elements

In order to have an element re-evaluate custom property values due 
to dynamic changes such as application of CSS classes, etc., 
* call the updateStyles method on the element.

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



