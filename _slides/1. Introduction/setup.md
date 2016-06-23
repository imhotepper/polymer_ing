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
### Browser compatibility
The Polymer library and the Polymer App Toolbox work in all major browsers
<div style="display:flex;justify-content:center;">
          <img src="images/chrome_128x128.png" alt="chrome logo">
          <img src="images/firefox_128x128.png" alt="firefox logo">
          <img src="images/internet-explorer_128x128.png" alt="internet explorer logo">
          <img src="images/edge_128x128.png" alt="edge logo">
          <img src="images/safari_128x128.png" alt="safari logo">
          <img src="images/opera_128x128.png" alt="opera logo">
        </div>

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