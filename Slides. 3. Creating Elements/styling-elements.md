# Styling elements

---
### Styling elements

Elements can contain styles
* in a style tag inside the template
* styles just affect the local DOM
* light DOM can overrule local DOM

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
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Demo. Themable Element

---
### Custom CSS mixins

It may be tedious (or impossible) for an element author to predict 
every CSS property that may be important for theming.

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
* updateStyles on element
* Polymer.updateStyles for all elements

---
### Example imperative styling
```
<dom-module id="x-custom">
<template>
    <style>
        :host { --my-toolbar-color: red; }
    </style>
    <my-toolbar>My awesome app</my-toolbar>
    <button on-tap="changeTheme">Change theme</button>
</template>
<script>
Polymer({ is: 'x-custom',
    changeTheme: function() {
        this.customStyle['--my-toolbar-color'] = 'blue';
        this.updateStyles();
    }
});
</script>
</dom-module>
```

---
### Custom element for document styling (custom-style)
Polymer provides a `style is="custom-style"` custom element 
* Do not leak into local DOM when running on browsers 
without native Shadow DOM.
* Custom properties may be defined in an custom-style. Use 
the :root selector to define custom properties that apply to 
all custom elements.
* For backwards compatibility, 
the deprecated /deep/ combinator and ::shadow pseudo-element are shimmed
on browsers without native Shadow DOM. 

---
### Example custom-style
```
<!doctype html>
<html><head>
  <script src="components/webcomponentsjs/webcomponents-lite.js"></script>
  <link rel="import" href="components/polymer/polymer.html">
  <style is="custom-style">
    /* Will be prevented from affecting local DOM of Polymer elements */
    * { box-sizing: border-box; }
    /* Use the :root selector to define custom properties and mixins */
    /* at the document level  */
    :root { --my-toolbar-title-color: green; }
  </style>
</head><body>...</body>
</html>
```

---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Demo. Using the custom-style type extension

---
### Shared styles
* package a set of style declarations inside `dom-module`
* style module declares a named set of style rules that can 
be imported into an element definition
* or into a custom-style element

---
### Example shared style module
Define a shared style module
```
<!-- shared-styles.html -->
<dom-module id="shared-styles">
  <template>
    <style>
      .red { color: red; }
    </style>
  </template>
</dom-module>
```

---
### Example shared style module
Use the shared style module
```
<!-- import the module  -->
<link rel="import" href="../shared-styles/shared-styles.html">
<dom-module id="x-foo">
  <template>
    <!-- include the style module by name -->
    <style include="shared-styles"></style>
    <style>:host { display: block; }</style>
    Hi
  </template>
  <script>Polymer({is: 'x-foo'});</script>
</dom-module>
```

---
### Example shared style module
Use the shared style module
```
<!-- import the shared styles and include the shared styles  -->
<link rel="import" href="../shared-styles/shared-styles.html">
<style is="custom-style" include="shared-styles"></style>
```
A single style tag can both include shared styles and 
define local rules
```
<style include="shared-styles">
  :host { display: block; }
</style>
```

---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Demo 4. Using shared style modules 

---
<!-- .slide: data-background="url('images/lab2.jpg')" --> 
<!-- .slide: class="lab" -->
## Lab time!
Writing Styling Elements

