# Element Lifecycles

---
### Element Lifecycles

Each element has a lifecycle 

* Lifecycle callbacks are called by Polymer
* Behaviors have Lifecycles as well

---
### Lifecycles

| Callback | Description|
|---|---|
|created|Called when the element has been created, but before property values are set and local DOM is initialized. 
|ready|Called after property values are set and local DOM is initialized. 
|attached| Called after the element is attached to the document. Can be called multiple times during the lifetime of an element. 

---
### Lifecycles continued...

| Callback | Description|
|---|---|
|detached|	Called after the element is detached from the document. Can be called multiple times during the lifetime of an element. 
|attributeChanged|Called when one of the element's attributes is changed. 

---
### Example
```
MyElement = Polymer({ is: 'my-element',
      created: function() {
        console.log(this.localName + '#' + this.id + ' was created');
      },
      ready: function() { ... },
      attached: function() { ... },
      detached: function() { ... },
      attributeChanged: function(name, type) {
        console.log(this.localName + '#' + this.id + ' attribute ' + name +
          ' was changed to ' + this.getAttribute(name));
      }
});
```

---
### Initialization order and timing

The element's basic initialization order for a given element is:

* created callback.
* Local DOM initialized (This means that local DOM children 
 their property values are set as specified in the template, 
 and ready has been called on them, assuming they are 
 registered).
* ready callback.
* factoryImpl callback.
* attached callback.

---
### Registration Callback

Polymer also provides two registration-time callbacks
* beforeRegister
    - to transform an element's prototype before registration. 
    - This is useful when registering an element using an ES6 class, as described in the article, Building web components using ES6 classes.
* registered
    - to perform one-time initialization when an element is registered. 
    - This is primarily useful when implementing behaviors.


---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Demo 4. Lifecycle Events

---
<!-- .slide: data-background="url('images/lab2.jpg')" --> 
<!-- .slide: class="lab" -->
## Lab time!
Writing lifecycle events
