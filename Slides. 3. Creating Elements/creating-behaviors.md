# Creating Behaviors

---
### What is a behavior
A behavior is 
* a shared code module that can be used on other elements
* an object that looks similar to a typical Polymer prototype

---
### Add a behavior to an element
Include behavior to array on the prototype.
```
Polymer({
  is: 'super-element',
  behaviors: [SuperBehavior]
});
```

---
### Behavior methods
Any non-lifecycle functions on the behavior object 
are mixed into the base prototype

Unless the prototype already defines a function of the same name!

---
### Defining a behavior
To define a behavior, create a JavaScript object that you can reference 
from your element definition.

```
<script>
    HighlightBehavior = {
      properties: {
        isHL: {
          type: Boolean, value: false,
          notify: true, observer: '_highlightChanged'
        }
      },
      listeners: { click: '_toggleHighlight' },
      created: function() {
        console.log('Highlighting ', this, 'enabled!');
      },
      _toggleHighlight: function() { this.isHL = !this.isHL; },
      _highlightChanged: function(value) {
        this.toggleClass('highlighted', value);
      }};
</script>
```

---
### Namespaces

* avoid collisions with future Polymer behaviors. 

For example:
```
window.MyBehaviors = window.MyBehaviors || {};
MyBehaviors.HighlightBehavior = { ... }
```

* MyBehaviors namespace is explicitly added to the global window object
* Use MyBehaviors.HighlightBehavior inside the array declaration

---
### Extending behaviors
To extend a behavior define a behavior as an array of behaviors
```
<link rel="import" href="oldbehavior.html">
<script>
  // Implement the extended behavior
  NewBehaviorImpl = {
    // new stuff here
  }
  // Define the behavior
  NewBehavior = [ OldBehavior, NewBehaviorImpl ]
</script>
```

The rightmost behavior takes precedence over earlier behaviors

---
### Performing work on register
In some cases, a behavior may need to perform one-time 
work when an element is registered

```
registered: function() {
  // collate keyBindings objects from behaviors & element prototype
  var keyBindings = this.behaviors.map(function(behavior) {
    return behavior.keyBindings;
  });
  if (keyBindings.indexOf(this.keyBindings) === -1) {
    keyBindings.push(this.keyBindings);
  }
  // process key bindings in order
  keyBindings.forEach(function() { ... });
}
```

---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Demo 1. Defining a behavior

---
<!-- .slide: data-background="url('images/lab2.jpg')" --> 
<!-- .slide: class="lab" -->
## Lab time!
Writing a behavior