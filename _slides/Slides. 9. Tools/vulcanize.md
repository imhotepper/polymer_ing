# Tooling Support

---
### Agenda
* Vulcanize

---
### Vulcanize

> Process Web Components into one output file

---
### Installation

vulcanize is 
* available on npm
* should be installed globally

```
npm install -g vulcanize
```
This will install vulcanize to /usr/local/bin/vulcanize (sudo)

---
### Usage
The command
```
vulcanize target.html
```
will inline the HTML Imports of target.html and print the resulting HTML to standard output.

---
### Usage (2)
The command
```
vulcanize target.html > build.html
```
will inline the HTML Imports of target.html and print the result to build.html.

---
### Usage (3)
The command
```
vulcanize -p "path/to/target/" /target.html
```
will inline the HTML Imports of target.html, treat path/to/target/ as webroot of target.html, 
and make all urls absolute to the provided webroot.

---
### Usage (4)
The command
```
vulcanize --exclude "path/to/target/subpath/" --exclude "path/to/target/subpath2/" target.html
```
will inline the HTML Imports of target.html that are not in the 
directory path/to/target/subpath nor path/to/target/subpath2.


---
### Usage (5)
The command
```
vulcanize --inline-scripts target.html
```
will inline scripts in target.html as well as HTML Imports. 
Exclude flags will apply to both Imports and Scripts.

---
### Usage (6)
The command
```
vulcanize --inline-css target.html
```
will inline Polymerized stylesheets, <link rel="import" type="css">

---
### Usage (7)
The command
```
vulcanize --strip-comments target.html
```
will remove HTML comments, except for those that begin with @license. 
License comments will be deduplicated.

---
### Programmatically

```
var Vulcanize = require('vulcanize');
var hydrolysis = require('hydrolysis'); 
/* a Hydrolysis loader object (optional) */
var loader = new hydrolysis.loader(...)
var vulcan = new Vulcanize({
  abspath: '',
   ...
  loader: loader,
  inputUrl: ''
});
vulcan.process(target, function(err, inlinedHtml) {});
```

---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Demo 1. Vulcanize 
