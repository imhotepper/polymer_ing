## Web Components
Web Components consist of 4 main features:

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
## Web Components
You probably already use and know web components

The HTML5 the &lt;video&gt; tag is also a web component

<img src="images/videoelement.png" />
---
## Web Components
But the video tag is actually
<img src="images/videoshadowdom.png" />
---

## Web Components
Examples of web components
* [Voice Recognition](http://zenorocha.github.io/voice-elements/)
* [Presentation Builder](http://viniciusalmeida.github.io/ninja-presentation/#1)
* [QR Code Generation](http://educastellano.github.io/qr-code/demo/)
* [Gangnam style element](http://html5-demos.appspot.com/gangnam)

---
## Web Components
You can create your own
```js
<slide-show transition="fade">
<slide src="slideone.jpg" thumb="slideone_thumb.jpg" caption="Look at this image">
<slide src="slidetwo.jpg" thumb="slidetwo_thumb.jpg" caption="Look at this other image">
</slide-show>
```
---

## Create your own elements
What makes a web component again?
* Custom Elements
* Shadow DOM
* Templates
* HTML Imports

---
## Custom Elements
Define the public part of your component

For example

```js
<hello-world></hello-world>
```
---
## Shadow DOM

> Take all code that doesn't need to be seen during markup 
> placement and obscures it in Shadow DOM

* Each instance is self contained 
* Styling and scripts inside won't effect anything on the page. 
* CSS and JavaScript elsewhere won't effect your web component
    * Except for style hooks to allow external CSS targeting
    
---
## Templates

---
## HTML Imports

---
## Create your own element
define your element in a html file

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
## Create your own element
use your defined element
```js
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>&lt;hello-world&gt;</title>
    <!-- Imports polyfill -->
    <script src="../webcomponentsjs/webcomponents.min.js"></script>
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
We need
- Modularisation

Note:
This results in larger amounts of code on the client side. Generally speaking, utilising a 
module system should enhance not only the development but also the user experience.
If you happen to be working with a large codebase or just researching, you will no doubt 
understand it is critical to keep your code organised. One of the best ways to handle the 
organisation of JavaScript it to break your code into modules.
When it comes to module systems there are a few popular ones which you might of either 
used or heard about like Browserify or RequireJS. Both of these are extremely helpful and 
do a great job but webpack does some extra radness. 

--- 
### Why do we need Webpack
Webpack enables professional and maintainable JavaScript programming
> Webpack enables us to write JavaScript code into maintainable modules
> while taking care of packaging and bundeling it for runtime use. 

---
### Why do we need Webpack
Webpack supports:
- module traversing and bundeling, you can organise code into modules
- on demand loading, reducing the initial load time of application
- module hashing, make chunks cache friendly
- plugins, making it super extensible
- loaders, it can build and bundle CSS, compile-to-JS languages (CoffeeScript), 
images and more

---
### What does Webpack do
- Webpack roams over your application source code, looking for import 
statements, building a dependency graph, and emitting one (or more) 
bundles. 

- With plugin "loaders" Webpack can preprocess and minify different 
non-JavaScript files such as TypeScript, SASS, and LESS files.

---
### What is a bundle
> A bundle is a JavaScript file that incorporate assets that belong together 
> and should be served to the client in a response to a single file request. 

A bundle can include JavaScript, CSS styles, HTML, and almost any other 
kind of file.


---
### picture overview
<img src="./1. introduction/what-is-webpack.png" />

---
### How does Webpack does it
Webpack works with a JavaScript configuration file(s)
```
webpack.config.js
```

You just have to call it:
```
webpack
```