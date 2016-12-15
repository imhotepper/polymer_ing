# Creating Elements

---
### Creating Elements

Requirements of an element
* The custom element must have a - (dash)
* The element has to be register with Polymer

---
### Anatomy of an element
Elements can be writter pure imperative.
Typically an element definition has 
* an imperative part
    - call to Polymer({...})
* a declarative part. 
    - the 'dom-module' element. 
    
The parts of an element's definition may be placed in the same html file 
or separate files.

---
### Pure imperative element
```
MyElement = Polymer({
  is: 'my-element',
  created: function() {
      this.textContent = 'My element!';
  }});

// create an instance with createElement:
var el1 = document.createElement('my-element');

// ... or with the constructor:
var el2 = new MyElement();
```

---
### Pure imperative element
You can use factoryimpl for constructor fine-tuning:
```
MyElement = Polymer({
    is: 'my-element',
    factoryImpl: function(foo, bar) {
        this.foo = foo;
        this.configureWithBar(bar);
    },
    configureWithBar: function(bar) { ...}
});
var el = new MyElement(42, 'octopus');
```

---
### Pure imperative element
Some notes:
The factoryImpl method 
* only invoked when you create an element using constructor. 
* not called if the element is 
    - created from markup by the HTML parser, 
    - created using document.createElement.
* called after the element is initialized 

---
### Typical elements
Typical Polymer elements have 
* imparive part -> code 
* declarative part -> template and style 

These elements are auto registered

---
### Imperative part
The imperative part registers the element
with its API with Polymer
```
<dom-module id='my-element'>
  <script>
  Polymer({
        is:'my-element',
        properties:{...}
  });
</dom-module>
```

---
### Declarative part
The declarative part of an element has 
the following template

```
<dom-module id="icon-toggle">
<template>
    <style>
    :host { display: inline-block; }
    </style>
    <!-- local DOM goes here -->
   <span>Not much here yet.</span>
</template>
</dom-module>
```

---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Demo 1. Hello world element


---
### Polymer and Local DOM
Remeber the Shadow DOM?
Polymer defines
* Local DOM
    - DOM thats independent from the 'normal' DOM
    - Implemented as Shadow DOM
    - Implemented as Shady DOM (custom)
* Light DOM
    - the 'normal' DOM

Polymer will automatically clone  template's contents 
into the element's local DOM.

Currently Polymer uses shady DOM by default on all browsers.

---
### Defining properties
Any property that's part of your element's public 
API should be declared in the properties object.

The properties object can be used to specify:

* Property type.
* Default value.
* Property change observer. 
* Read-only status. 
* Two-way data binding support. 
* Computed property. 
* Property reflection to attribute.

---
### Example Element Properties
```
Polymer({
    is: 'x-custom',
    properties: {
        user: String,
        isHappy: Boolean,
        count: {
            type: Number,
            readOnly: true,
            notify: true
        }
  },
  ready: function() {
    this.textContent = 'Hello World, I am a Custom Element!';
  }
});
```

### readOnly properties
* Can't be set using regular assignment
```js
  this.readonlyprop = 'test' // does not work
```
* Can be set using the generated private setter
```js 
  this._setReadonlyprop = 'test'  // does work
```

---
### Property options

|Key|Details|
|---|---|
|type|Attribute type, used for deserializing from an attribute.|
|value|Default value for the property|
|reflectToAttribute|Set to true to cause the corresponding attribute to be set on the host node when the property value changes|
|readOnly|If true, the property can't be set directly by assignment or data binding|

---
### Property options continued..
|Key|Details|
|---|---|
|notify|If true, the property is available for two-way data binding|
|computed|The method is invoked to calculate the value whenever any of the argument values changes|
|observer|The value is interpreted as a method name to be invoked when the property value change|

---
### Computed properties
Computed properties are
* virtual properties whose values are calculated from other properties
* provided as a string with dependent properties as arguments in parenthesis 
* not invoked until all dependent properties are defined
The function will be called once for any observable change to the dependent properties.

---
### Example of a computed property
```
<dom-module id="x-custom">
  <template><span>{{fullName}}</span></template>
  <script>
    Polymer({ is: 'x-custom',
        properties: {
            first: String,
            last: String,
            fullName: {
                type: String,
                computed: 'computeFullName(first, last)'
            }
        },
        computeFullName: function(first, last) {
            return first + ' ' + last;
        }});
  </script>
</dom-module>
```

---
### Instance methods
Polymer elements can contain methods
* private methods have leading underscore
* public methods have not

Register your methods on the prototype

---
### Instance methods
Example private and public methods
```
Polymer({
    is: 'cat-element',
    _says: 'meow',
    speak: function() {
      console.log(this._says);
    }
});
```

---
### Instance methods
Invoke methods on the element
```
var cat1 = document.querySelector('cat-element');
cat1.speak();
var cat2 = document.createElement('cat-element');
cat2.speak();
```

---
### Built-in methods

All Polymer elements inherit from Polymer.Base, 
which provides useful convenience functions to use
* $$(selector)
    - Returns first node in local DOM that matches selector.
* fire(type, [detail], [options])
    - Fires a custom event. The options object can contain 
    the following properties:
        - node -> Node to fire the event on 
        - bubbles -> Whether the event should bubble
        - cancelable -> Whether the event can be canceled with preventDefault. 
        
---
### More Built-in methods
There are even more 

|Category|Method|
|---|---|
|Async and debounce|async, cancelAsync, debounce, cancelDebouncer,.. |
|Class and attribute manipulation|toggleClass, toggleAttribute,..|
|CSS Transforms| transform, translate3d|
|Imports and URLs|importHref, resolveURL|

More info here:
https://www.polymer-project.org/1.0/docs/devguide/instance-methods

---
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

* Statically created instance nodes only!
* Even nested elements can be queried

---
### Automatic Node Finding
* For locating dynamically-created nodes, use the $$ method
    - this.$$(selector)
        - returns first node in local DOM that matches selector
* $$ is alias for Polymer.dom(this.root).querySelector():

---
### Element events
A Polymer element can
* subscribe to events from the local DOM
* fire custom events

---
### Example events
```
<dom-module id="x-custom">
<template>
    <div>I will respond</div>
    <div id="special">I am special!</div>
</template>
<script>
    Polymer({ is: 'x-custom',
      listeners: {
        'tap': 'regularTap',
        'special.tap': 'specialTap'},
      regularTap: function(e) {
        alert("Thank you for tapping");},
      specialTap: function(e) {
        alert("It was special tapping");}
    });
</script>
</dom-module>
```

---
### Annotated event listener example
```
<dom-module id="x-custom">
  <template>
    <button on-tap="handleTap">Kick Me</button>
  </template>
  <script>
    Polymer({ is: 'x-custom',
      handleTap: function() {
        alert('Ow!');
    }});
  </script>
</dom-module>
```

---
### Imperatively add and remove listeners

Use automatic node finding and the convenience methods listen and unlisten.
```
this.listen(this.$.myButton, 'tap', 'onTap');
this.unlisten(this.$.myButton, 'tap', 'onTap');
```
The listener callbacks are invoked with this set to the element instance.

---
### Custom events

* To fire a custom event use the fire method 
* You can pass in arguments

---
### Example custom event
```
<dom-module id="x-custom">
<template>
    <button on-click="handleClick">Kick Me</button>
</template>
<script>
  Polymer({ is: 'x-custom',
    handleClick: function(e, detail) {
        this.fire('kick', {kicked: true});
    }
  });
  </script>
</dom-module>
<x-custom></x-custom>
```
---
### Event retargetting

* change an event's target as it bubbles up
* that target is always in the same scope as the receiving element 

(For example, for a listener in the main document, the target is
an element in the main document, not in a shadow tree.)

---
### Event retargetting

* Use Polymer.dom(event) to get  normalized event object 
that provides equivalent target data on both shady DOM 
and shadow DOM. 

Normalized event has the following properties
* rootTarget: The original or root target 
* localTarget: Retargeted event target 
* path: Array of nodes through which event will pass 

---
### Example event retargetting
the element 
```
<dom-module id="event-retargetting">
  <template>
    <button id="myButton">Click Me</button>
  </template>
  <script>
    Polymer({
        is: 'event-retargetting',
        listeners: {
          'click': 'handleClick',
        },
        handleClick: function(e) {
          console.info(e.target.id + ' was clicked.');
        }
      });
  </script>
</dom-module>
```

---
### Example event retargetting
```
<event-retargetting></event-retargetting>
<script>
  var el = document.querySelector('event-retargetting');
  el.addEventListener('click', function(){
    var normalizedEvent = Polymer.dom(event);
    // logs #myButton
    console.info('rootTarget is:', normalizedEvent.rootTarget);
    // logs the instance of event-targeting that hosts #myButton
    console.info('localTarget is:', normalizedEvent.localTarget);
    // logs [#myButton, document-fragment, event-retargeting,
    //       body, html, document, Window]
    console.info('path is:', normalizedEvent.path);
  });
</script>
```
---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Demo 2. Building an API

---
<!-- .slide: data-background="url('images/lab2.jpg')" --> 
<!-- .slide: class="lab" -->
## Lab time!
Building an API


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

---
### Work with local DOM
Polymer element this.root is the root of local DOM tree. 

```
// Append to local DOM
var toLocal = document.createElement('div');
Polymer.dom(this.root).appendChild(toLocal);

You can use the automatic node finding feature to locate local DOM nodes:
var item = document.createElement('li');
Polymer.dom(this.$.list).appendChild(item);
```

---
### Work with light DOM children
Access light DOM children
```
Polymer.dom(this).children
Polymer.dom(this).getEffectiveChildren().length;
```
You can think of getEffectiveChildren as a composition-friendly 
version of children. What does this mean?

---
### Work with the light DOM Childen
Suppose we had this:
```
<simple-carousel>
  <img src="one.jpg">
  <img src="two.jpg">
<simple-carousel>
```
Then we can do this:
```
attached: function() {
  this.childCount = Polymer.dom(this).children.length;
 }
```

---
### Work with the light DOM Children
This does not work:
```
<popup-carousel>
  <img src="one.jpg"><img src="two.jpg">
</popup-carousel>
<dom-module id="popup-carousel">
  <template>
    <simple-carousel><content></content></simple-carousel>
  </template>
</dom-module>
```
Polymer.dom(this).children.length will always return 
```
var effectiveChildren = Polymer.dom(element).getEffectiveChildNodes();
```
The code above does work


---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Demo 2. Building an API


---
### Bind the elements together
Elements have properties, methods and fire events
You can connect elements by using data binding and event handling

Here is an example of two connected elements
```
<iron-ajax auto url='/data/data.json' handle-as='json' last-response='{{response}}' />
<iron-list items="[[response]]">...</iron-list>
```

---
### Listen to element events
Elements fire events wich you can use to act upon

Below is an example of an event
```
<iron-ajax auto url='...' handle-as='json' on-response='handleResponse' />
<paper-button on-tap='handleClick' />
```

The eventhandlers are functions you have to provide, just like regular DOM




