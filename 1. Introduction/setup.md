## Polymer introduction
What is polymer
---
### What is Polymer
From the site:
> The Polymer Project helps you deliver amazing user experiences by 
> unlocking the full potential of the web platform.

Use the Polymer library to 
* make the most of Web Components, a powerful new platform feature for extending HTML and componentizing your apps.
Use the Polymer App Toolbox to
* build cutting-edge Progressive Web Apps that load quickly, respond instantly and work from anywhere.

---
## What is Polymer
Polymer is built upon Web Component technology
Web Components:
> Web Components are a set of features added by W3C to the HTML and DOM 
> specs that allow for the creation of reusable widgets or components 
> in web documents and web applications. 

---
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
Web components allow you to create
```js
<slide-show transition="fade">
<slide src="slideone.jpg" thumb="slideone_thumb.jpg" caption="Look at this image">
<slide src="slidetwo.jpg" thumb="slidetwo_thumb.jpg" caption="Look at this other image">
</slide-show>
```
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