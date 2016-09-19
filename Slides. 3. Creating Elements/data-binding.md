# Data Binding

---
### Data Binding
A data binding establishes a connection between data on the host element 
and a property or attribute of a target node in the host's local DOM.

Annotations are attribute values set on a target element 
that include the data binding delimiters {{ }} or [[ ]].

Two-way property binding:
```
target-property="{{hostProperty}}"
```
One-way property binding:
```
target-property="[[hostProperty]]"
```
Attribute binding:
```
target-attribute$="[[hostProperty]]"
```

---
### Data Binding
The left-hand side of the binding identifies the target property or attribute.
To bind to a property, use the property name in attribute 
form (dash-case not camelCase)
```
<my-element my-property="{{hostProperty}}">
```
To bind to an attribute instead, use the attribute name followed by $:
```
<a href$="{{hostProperty}}">
```

---
### Data Binding
You can also use a data binding annotation in the body of an element, 
which is equivalent to binding to the element's textContent property.

```
<div>{{hostProperty}}</div>
```

---
### Data Binding
The text inside the delimiters can be one of the following:

* A property or subproperty path (users, address.street).
* A computed binding (_computeName(firstName, lastName, locale))
* Any of the above, preceded by the negation operator (!).

---
### Data Binding
So data bindings link an element's model with the elements in its local DOM.
Consider a very simple element:

```
<dom-module id="name-card">
  <template>
    <div>[[name.first]] [[name.last]]</div>
  </template>
  <script>Polymer({ is: 'name-card' });</script>
</dom-module>
```
The path "name" refers to the element's name property (an object).
The paths "name.first" and "name.last" refer to properties of that object.

---
### Data Binding
Paths lead to observable changes
Observable changes result in property effects
* Observers. 
An observable change is a data change that Polymer can associate with a path
Callbacks invoked when data changes.
* Computed properties. 
Virtual properties computed based on other properties, and recomputed when the input data changes.
* Data bindings. 
Annotations that update the properties, attributes, or text content of a DOM node when data changes. 

---
### Unobservable changes
Changes that imperatively mutate an object or array are not observable
* Setting a subproperty of an object:
```
// unobservable subproperty change
this.address.street = 'Elm Street';
```
* Mutating an array:
```
// unobservable change using native Array.push
this.users.push({ name: 'Maturin});
```
In both cases, you need to use Polymer methods to ensure 
that the changes are observable.

---
### Mutating objects and arrays observably 
Polymer provides methods for making observable 
changes to subproperties and arrays:
```
// mutate an object observably
this.set('address.street', 'Half Moon Street');

// mutate an array observably
this.push('users', { name: 'Maturin'});
```
---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Demo 6. Databinding arrays

---
### Linking Paths
Suppose:
A 'user-profile' element has a property primaryAddress that refers to a JavaScript object.
An 'address-card' element has a property address that refers to the same object.

Polymer doesn't  know that these properties refer to the same object. 
If 'address-card' makes a change to the object, no property effects are
invoked on 'user-profile'.

---
### Linking Paths
Data bindings can create links between paths on different elements

```
<dom-module id="user-profile">
  <template>
    <address-card
        address="{{primaryAddress}}"></address-card>
  </template>
</dom-module>
```
If 'address-card' makes an observable change 
to the object, property effects are invoked 
on 'user-profile' as well.

---
### Special Paths
In most cases, each path segment is a property name.
There are a few special types of path segments.
* The wildcard character
    - like foo.* -> all changes to a given path and its subproperties, including array mutations.
* splices 
    - like foo.splices -> all array mutations to a given array.
    - you won't see changes to subproperties of objects inside the array
    - In most cases, it's more useful to use a wildcard observer for arrays.

---
### Paths to array items
Two ways of identifying an array item in a path: 
* by index 
    - "myArray.1" indicates the array item at position 1
* by an opaque, immutable key.
    - "myArray.#1" indicates the array item with the key "1".

Polymer uses keys internally to provide a stable path to a specific 
array item, regardless of its current position in the array. 

---
### Data flow
The type of data flow supported by an individual binding depends on

* The type of binding annotation used.
* The configuration of the target property.


---
### Data flow 
The two types of data binding annotations are:

* Automatic, allows upward (target to host) and downwards (host to target) data flow. 
Automatic bindings use double curly brackets ({{ }}):
```
<my-input value="{{name}}"></my-input>
```
* One-way,  only downwards data flow. Upward data flow is disabled. 
One-way bindings use double square brackets ([[ ]]).
```
<name-tag name="[[name]]"></name-tag>
```

---
### Data flow 
The following configuration flags affect data flow to and from target properties
* notify -> supports upward data flow. 
 By default, properties are non-notifying, so don't support upward data flow.
* readOnly -> prevents downward data flow
By default, properties are read/write, and support downward data flow.

---
### Data flow 
Example property definitions
```
properties: {
  // default prop, read/write, non-notifying.
  basicProp:    { },
  // read/write, notifying
  notifyingProp:{ notify: true },
  // read-only, notifying
  fancyProp:    { readOnly: true, notify: true }
}
```

---
### Data flow 
This table shows what kind of data flow is supported by automatic bindings based on the configuration of the target property:

| Configuration  | Result  |   
|---|---|
| notify: false, readonly: false | oneway downward  |  
| notify: false, readOnly: true | No data flow |
| notify: true, readOnly: false | Two-way | 
| notify: true, readOnly: true |  One-way, upward |

---
### Data flow 
By contrast, one-way bindings only allow one-way, downward data flow, so the notify flag doesn't affect the outcome:

| Configuration  | Result  |   
|---|---|
| readOnly: false | One-way, downward |
| readOnly: true | No data flow |


---
### Data flow examples
Two way binding example
```
<script>
  Polymer({
    is: 'custom-element',
    properties: {
      someProp: {
        type: String,
        notify: true
      }
    }
  });
</script>
...

<!-- changes to "value" propagate downward to "someProp" on child -->
<!-- changes to "someProp" propagate upward to "value" on host  -->
<custom-element some-prop="{{value}}"></custom-element>
```

---
### Data flow examples
Downward data flow example
```
<script>
  Polymer({
    is: 'custom-element',
    properties: {
      someProp: {
        type: String,
        notify: true
      }
    }
  });
</script>

...

<!-- changes to "value" propagate downward to "someProp" on child -->
<!-- changes to "someProp" are ignored by host due to square-bracket syntax -->
<custom-element some-prop="[[value]]"></custom-element>
```

---
### Data flow examples
Downward data flow example 2
```
<script>

  Polymer({
    is: 'custom-element',
    properties: {
      someProp: String    // no notify:true!
    }
  });

</script>
...

<!-- changes to "value" propagate downward to "someProp" on child -->
<!-- changes to "someProp" are not notified to host due to notify:falsey -->
<custom-element some-prop="{{value}}"></custom-element>
```

---
### Data flow examples 
One-way binding (upward, child-to-host)

```
<script>
  Polymer({
    is: 'custom-element',
    properties: {
      someProp: {
        type: String,
        notify: true,
        readOnly: true
      }
    }
  });
</script>

...

<!-- changes to "value" are ignored by child due to readOnly:true -->
<!-- changes to "someProp" propagate upward to "value" on host  -->
<custom-element some-prop="{{value}}"></custom-element>
```

---
### Data flow examples
Non-sensical state
```
<script>
  Polymer({
    is: 'custom-element',
    properties: {
      someProp: {
        type: String,
        notify: true,
        readOnly: true
      }
    }
  });
</script>
...
<!-- changes to "value" are ignored by child due to readOnly:true -->
<!-- changes to "someProp" are ignored by host due to square-bracket syntax -->
<!-- binding serves no purpose -->
<custom-element some-prop="[[value]]"></custom-element>
```

---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Demo 7. Data flows

---
### Change notification events
An element fires a change notification event when one of the 
following observable changes occurs
* a change to a notifying property.
* a subproperty change.
* an array mutation

The event's type property indicates which property changed: 
> this.firstName fires first-name-changed

---
### Change notification events 
You can manually attach a property-changed listener to an element
to notify external elements, frameworks, or libraries of property changes.

The contents of the event vary depending on the change.
* property change
    - the new value is detail.value
* subproperty change
    - the path to the subproperty is detail.path 
    - the new value is detail.value 
* array mutation
    - the detail.path is array mutation path
   -  the new value is detail.value

---
### Change nofitication events 
To support two-way data binding of native input elements, Polymer lets 
you associate a custom change notification event with a data binding
```
<!-- Listens for `input` event and sets hostValue to <input>.value -->
<input value="{{hostValue::input}}">

<!-- Listens for `change` event and sets hostChecked to <input>.checked -->
<input type="checkbox" checked="{{hostChecked::change}}">

<!-- Listens for `timeupdate ` event and sets hostTime to <video>.currentTime -->
<video url="..." current-time="{{hostTime::timeupdate}}">
```

---
### Change nofitication events 
When binding to standard notifying properties on Polymer elements, 
specifying the event name is unnecessary, as the default convention 
will be to listen for property-changed events. 

The following constructions are equivalent:
```
<!-- Listens for `value-changed` event -->
<my-element value="{{hostValue::value-changed}}">

<!-- Listens for `value-changed` event using Polymer convention by default -->
<my-element value="{{hostValue}}">
```

---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Demo 8. Native event binding

---
<!-- .slide: data-background="url('images/lab2.jpg')" --> 
<!-- .slide: class="lab" -->
## Lab time!
Data binding