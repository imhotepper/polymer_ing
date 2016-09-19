# Observers

---
### Observers

Observers are methods invoked when observable changes occur
to the element's data. 

There are two basic types of observers
* Simple observers observe a single property
* Complex observers observe one or more properties or paths

A computed property is a complex observer that returns value

---
### Observers
An observer is
* a property effect
* synchronous

---
### Simple observers
* declared in the properties object
* always observe a single property
* fired the first time the property becomes defined (!= undefined)
* on every change thereafter
    -even if the property becomes undefined
* don't fire on subproperty changes, or array mutation
* observer method receives the new and old values

---
### Example observer
```
Polymer({ is: 'x-custom',
  properties: {
    disabled: {
      type: Boolean,
      observer: '_disabledChanged'
  },
  _disabledChanged: function(newValue, oldValue) {
    this.toggleClass('disabled', newValue);
  },
});
```

---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Demo. Simple observers 

---
### Complex observers
* declared in the observers array
```
observers: [
  'userListChanged(users.*, filter)'
]
```
* can monitor one or more paths
    -  called the observer's dependencies

---
### Complex observer dependencies
Each dependency represents
* a specific property 
    - for example, firstName
* a specific subproperty 
    - for example, address.street
* mutations on a specific array 
    - for example, users.splices
* all subproperty changes and array mutations below a given path 
    - for example, users.*

---
### Complex observer dependencies
* The observer method is called with one argument for each dependency
* The argument type varies depending on the path being observed.
    - simple (sub)property dependencies argument is new value 
    - array mutation or wildcard paths argument is change record 

---
### Handling of undefined values 
* depends on the number of properties being observed
    - The initial call is deferred until all of the dependencies are defined
    - For a single property observer
        - called each time even when undefined
    - multi prop observer
        - called each time unless one of props is undefined

---
### Example complex observer
```
Polymer({
  is: 'x-custom',
  properties: {
    preload: Boolean, src: String, size: String
  },
  observers: [
    'updateImage(preload, src, size)'
  ],
  updateImage: function(preload, src, size) {
    // ... do work using dependent values
  }
});
```

---
### Observe sub-property changes
To observe changes in object sub-properties
* define an observers array
* add an item to the observers array
    - or `onNameChange(dog.name)` 
* define the method in your element prototype. 

To properly detect the sub-property change, updated it
in one of the following two ways
* via a property binding
* By calling set

---
### Example sub-prop observer
```
 <template>
    <!-- Sub-property is updated via property binding. -->
    <input value="{{user.name::input}}">
  </template>
  <script>
    Polymer({ is: 'x-sub-property-observer',
      properties: {
        user: { type: Object,
                value: function() {return {};}
        }
      },
      observers: [
        'userNameChanged(user.name)'
      ],
      userNameChanged: function(name) {
        console.log('new name: ' + name);
      },
    });
  </script>
```

---
### Observe array mutations
* to call an observer function whenever an array item is added or deleted
* observer receives change record with the mutation as set of array splices

To observe array mutations and changes to sub-properties 
of array items, use a wildcard path!

---
### Splice observer
* specify a path to an array followed by .splices 
in your observers array.
```
observers: [
  'usersAddedOrRemoved(users.splices)'
]
```

---
### Splice observer
* observer receives change record of mutations. 
* each record provides `indexSplices`
* each `indexSplices` record contains
    - index. Position where the splice started
    - removed. Array of removed items
    - addedCount. Number of new items inserted at index
    - object: A reference to the array in question
    - type: The string literal 'splice'

```
---
### Example array observer
```
Polymer({ is: 'x-custom',
  properties: {
    users: { type: Array,
            value: function() {
                return []; }}
  },
  observers: [ 'usersAddedOrRemoved(users.splices)'],
  usersAddedOrRemoved: function(changeRecord) {
    if (changeRecord) {
      changeRecord.indexSplices.forEach(function(s) {
        s.removed.forEach(function(user) {
          console.log(user.name + ' was removed');
        }); }, this); }
  },
  ready: function() { this.push('users', {name: "Jack Aubrey"}); },
});
```

---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Demo. Array observers 

---
### Observe all path changes 
use the wildcard path (*)
* when any (deep) sub-property of an object or array changes

argument passed to observer holds
* path: path to the property that changed
* value: new value of the path that changed
* base: object matching the non-wildcard portion of the path

---
### Example deep observer
```
<dom-module id="x-deep-observer">
  <template>
    <input value="{{user.name.first::input}}"
           placeholder="First Name">
    <input value="{{user.name.last::input}}"
           placeholder="Last Name">
  </template>
  <script>
    Polymer({ is: 'x-deep-observer',
      properties: {
        user: {
          type: Object,
          value: function() { return {'name':{}};}}
        },
      observers: ['userNameChanged(user.name.*)'],
      userNameChanged: function(changeRecord) {
        console.log('value: ' + changeRecord.value);
      },});
  </script>
</dom-module>
```

---
### ANTI PATTERN!
```
properties: {
  firstName: { type: String, observer: 'nameChanged'},
  lastName: { type: String }
},
// WARNING: ANTI-PATTERN! DO NOT USE
nameChanged: function(newFirstName, oldFirstName) {
  // this.lastName could be undefined!
  console.log('new name:', newFirstName, this.lastName);
}
```

---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Demo. Deep observers 

---
<!-- .slide: data-background="url('images/lab2.jpg')" --> 
<!-- .slide: class="lab" -->
## Lab time!
Creating observers
