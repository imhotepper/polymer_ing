# Web Components

---
### Web Components

> Encapsulation is one of the pillars on which the Object Oriented Programming paradigm was founded and is normally used to restrict the internal representation of an object from the outside world.

--- 

### Web Components
Web Components consist of 4 main features from HTML5:

* Custom Elements 
    * APIs to define new HTML elements
* Shadow DOM 
    * Encapsulated DOM and styling, with composition
* HTML Imports 
    * Importing HTML documents into other documents
* HTML Templates 
    * The template tag, inert chunks of DOM

These features can be used separately or all together

---
### Web Components
You probably already use and know web components syntax
For instance:
    The HTML5 the &lt;video&gt; tag is also a web component

<img src="images/videoelement.png" />

--- 

### Web Components
But the video tag is actually
<img src="images/videoshadowdom.png" />

--- 

### Web Components
Examples of web components
* [Voice Recognition](http://zenorocha.github.io/voice-elements/)
* [Presentation Builder](http://viniciusalmeida.github.io/ninja-presentation/#1)
* [QR Code Generation](http://educastellano.github.io/qr-code/demo/)
* [Gangnam style element](http://html5-demos.appspot.com/gangnam)

--- 

### Web Components
You can create your own
```js
<slide-show transition="fade">
<slide src="slideone.jpg" thumb="slideone_thumb.jpg" caption="Look at this image">
<slide src="slidetwo.jpg" thumb="slidetwo_thumb.jpg" caption="Look at this other image">
</slide-show>
```

--- 

### Create your own elements
What makes a web component again?
* Custom Elements
* Shadow DOM
* Templates
* HTML Imports

--- 

### Custom Elements
To define a new HTML element we need the power of JavaScript!

The <code>customElements</code> global is used for defining
custom element.

Call <code>customElements.define()</code> 
and give the class an API

--- 

### Custom Elements
An Example
```
class AppDrawer extends HTMLElement {...}
window.customElements.define('app-drawer', AppDrawer);
```
Usage
```
<app-drawer></app-drawer>
```

--- 

### Custom Elements
Use the class to create a public JavaScript API for your tag.

Extending the example
```
class AppDrawer extends HTMLElement {
  get open() { return this.hasAttribute('open'); }
  set open(val) { 
    if (val) { this.setAttribute('open', '');} 
    else { this.removeAttribute('open'); } this.toggleDrawer();
  }
  constructor() { super(); this.addEventListener('click', e => { this.toggleDrawer();}); } 
  toggleDrawer() { ... }
} 
customElements.define('app-drawer', AppDrawer);
```

--- 

### Shadow DOM

> Take all code that doesn't need to be seen during markup 
> placement and obscures it in Shadow DOM

* Each instance is self contained 
* Styling and scripts inside won't effect anything on the page. 
* CSS and JavaScript elsewhere won't effect your web component
    * Except for style hooks to allow external CSS targeting
    
--- 

### Shadow DOM
How to use

```
<div id="host"></div>
<script>
  var shadow = document.querySelector('#host').createShadowRoot();
  shadow.innerHTML = '<span>Host node</span>';
</script>
```

--- 
### Shadow DOM
What you gain? 

Encapsulation of
* Styles
* DOM Elements
* Scripts

--- 

### Shadow Host & Shadow Root

* Shadow Host
    * DOM element hosting the Shadow DOM subtree
* Shadow Root
    * root of the DOM subtree containing the shadow DOM nodes
    * creates the boundary between normal DOM nodes and Shadow DOM nodes
* Shadow DOM
    * allows for multiple DOM subtrees to be composed into one larger tree
    * next slide shows concept 
* Shadow Boundary
    * The separation between normal DOM world and Shadow DOM world
    * Scripts from either side cannot cross boundary

--- 

### Shadow Host & Shadow Root

<img src="images/sd_composition1.png" />

--- 

### Shadow Host & Shadow Root

<img src="images/sd_composition2.png" />

--- 

### Templates (1)

>>> template (n) - A document or file having a preset format, used as a starting 
>>> point for a particular application so that the format does not have to be recreated each time it is used.

So we can declare a piece of HTML/Script/Style inside of a tempate for later 
or repetetive use

--- 

### Templates (2)

To use a template we use the template tag
```
<template id="mytemplate">
  .... html/script ...
</template>
```

--- 

### Templates (3) 

A few important characteristics of Templates
* Its content is effectively inert until activated

Your markup is hidden DOM and does not render.

--- 

### Templates (4) 

* Any content within a template won't have side effects. 

Script doesn't run, images don't load, audio doesn't play,
...until the template is used.

--- 

### Templates (5) 

* Content is considered not to be in the document. 

Using document.getElementById() or querySelector() in the main 
page won't return child nodes of a template.

--- 

### Templates (6) 

* Templates can be placed anywhere inside of <head>, <body>, or <frameset> 
and can contain any type of content which is allowed in those elements. 

It can also be placed as a child of <table> or <select>:

```
<table>
<tr>
  <template id="cells-to-repeat">
    <td>some content</td>
  </template>
</tr>
```

--- 

### Templates (7) 

To use a template, you need to activate it. Otherwise its content will never render. 
The simplest way to do this is by creating a deep copy of its 
.content using document.importNode(). 

The .content property is a read-only DocumentFragment containing the 
guts of the template.

--- 

### Templates (8) 
```
var t = document.querySelector('#mytemplate');
// Populate the src at runtime.
t.content.querySelector('img').src = 'logo.png';

var clone = document.importNode(t.content, true);
document.body.appendChild(clone);
```
After stamping out a template, its content "goes live". 
In this particular example, the content is cloned, 
the image request is made, and the final markup is rendered.

--- 

### Example 
Here is a full example
```
<button onclick="useIt()">Use me</button>
<div id="container"></div>
<script>
  function useIt() {
    var content = document.querySelector('template').content;
    // Update something in the template DOM.
    var span = content.querySelector('span');
    span.textContent = parseInt(span.textContent) + 1;
    document.querySelector('#container').appendChild(
        document.importNode(content, true));
  }
</script>

<template>
  <div>Template used: <span>0</span></div>
  <script>alert('Thanks!')</script>
</template> 
```

--- 

### Template and Shadow DOM
Lets combine the template and the shadow DOM

```html
<template>
<style>...</style>
<div>...</div>
</template>

<div id="host"><p>...</p></div>

<script>
  var shadow = document.querySelector('#host').createShadowRoot();
  shadow.appendChild(document.querySelector('template').content);
</script>
```

### HTML Imports

--- 

### Create your own element
Define your element in a html file

```html
// hello-world.html
<template>
    <p>Hello <strong>world</strong> :)</p>
</template>
<script>
(function(window, document, undefined) {
    /// code
})(window, document);
</script>
```

--- 

### Create your own element
use your defined element
```js
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>&lt;hello-world&gt;</title>
    <!-- Imports custom element -->
    <link rel="import" href="hello-world.html">
</head>
<body>
    <!-- Runs custom element -->
    <hello-world></hello-world>
</body>
</html>
```
--- 


### Browser compatibility
The Polymer library and the Polymer App Toolbox work in all major browsers
<div style="display:flex;justify-content:center;">
          <img src="images/chrome_128x128.png" style="padding:12px" height="70" alt="chrome logo">
          <img src="images/firefox_128x128.png" style="padding:12px" height="70" alt="firefox logo">
          <img src="images/internet-explorer_128x128.png" style="padding:12px" height="70"  alt="internet explorer logo">
          <img src="images/edge_128x128.png" style="padding:12px" height="70" alt="edge logo">
          <img src="images/safari_128x128.png" style="padding:12px" height="70" alt="safari logo">
          <img src="images/opera_128x128.png" style="padding:12px" height="70" alt="opera logo">
        </div>

--- 

<!-- .slide: data-background="url('images/lab2.jpg')" --> 
<!-- .slide: class="lab" -->
## Lab time!
create a web component