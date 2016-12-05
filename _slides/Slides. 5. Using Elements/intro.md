# Using Elements

---
### Agenda

* Basic Polymer Application
* Helper Elements
* Polymer Element Catalog
* Customelements.io

---
### Basics of Polymer
A Polymer app has
* Composition of elements
* Mediator pattern
* Data binding
* Event handling

---
### Composition of elements

Application composition
<img src="./images/components.png" />

---
### Mediator pattern

Mediator mediates between the child components
<img src="./images/mediator.gif" />

---
### Data binding
```
<dom-module id="host-element">
  <template>
    <target-element target-property="{{hostProperty}}"></target-element>
    <target-element target-property="[[hostProperty]]"></target-element>
  </template>
</dom-module>
```
* Updating data bindings is a property effect.


---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Basic Polymer

---
### Helper Elements

Inside of your template, you can make use of helper elements
* Template repeater
    Creates instance of contents for each item in array
* Array selector
    Manages selection state for array of data
* Conditional template
    Stamps its contents if condition is true
* Auto-binding template 
    Allows data binding outside of Polymer element.

---
### Template Repeater
For each instance, it creates a new data binding 
scope that includes the following properties
* item 
* index 

Template repeater is a type-extension custom element
```
<template is="dom-repeat">.
```

---
### Example Template Repeater

```
  <template is="dom-repeat" items="{{data}}">
    <div># <span>{{index}}</span></div>
    <div>Name: <span>{{item.name}}</span></div>
  </template>
```

---
### Handling Events

Map the element firing the event to the model data
* Add a declarative event handler inside the `dom-repeat` 
* The repeater adds a model property to each event sent 
* The model object contains scope data used to generate the instance
* So the item data is model.item

---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Template repeater

---
### Filtering and Sorting 

* Filter/sort only displayed items in your list
* Filter attribute -> Specifies sort callback following Array filter API
* Sort attribute -> Specifies sort callback following Array sort API

Filter and sort functions only run 
* An observable change is made to array
* The filter/sort function changed

---
### Example Filtering and Sorting
```
<template is="dom-repeat" items="{{todos}}"
    filter="isDone" observe="todo.done">
```
```
isDone: function(todo) {
    return todo.done == false;
}
```

---
### Example filtering and sorting (2)
Changing a todo.done field should cause the list to be re-evaluated

```
this.set('todos.0.todo.done', true);
```

---
### Large lists
When there is a large list
* initialCount property enables chunked mode 
* targetFramerate property further drives chunking

---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Sorting and Filtering

---
### Array selector

An element to hold selection(s) for arrays
* maintains a reference of selected item
* maintains a reference to an array of selected items

To select an item into the selector
```
 this.$.selector.select(event.model.item);
```

---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Selection and multi-selection

---
### Conditional Template
Elements can be conditionally stamped based on a boolean property
* type-extension called `dom-if`
* Contents into DOM only when if property becomes truthy
* If if property becomes falsy again, elements are hidden (remain in DOM)
    * restamp property drives this

---
### Condition Template example

```
    <template is="dom-if" if="{{user.isAdmin}}">
      Only admins
      <div>{{user.secretAdminStuff}}</div>
    </template>
```

---
### Conditional Template 
Considerations
* Only use conditional templates when
    template condition is falsy mostly
* Alternative option
    *  attribute-binding hidden attribute
      `div hidden$="{{!shouldShow}}`

---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Conditional Template

---
### Autobinding template
Use Polymer bindings without defining custom element
* template immediately stamps contents into main document
* template itself is the binding scope

* All features in dom-bind are already available inside Polymer element
* Auto-binding templates should only be used outside of Polymer element

---
### Autobinding template
An example
```
 <template is="dom-bind">
    <iron-ajax url="..." last-response="{{data}}" auto></iron-ajax>
    <template is="dom-repeat" items="{{data}}">
        <div><span>{{item.first}}</span></div>
    </template>
  </template>
```

---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Autobinding Template

---
<!-- .slide: data-background="url('images/lab2.jpg')" --> 
<!-- .slide: class="lab" -->
## Lab time!
Using template helpers

---
### Polymer Element Catalog

---
### Element Collections
* App Elements - Application level Elements (Routing)
* Iron Elements - Core Elements (icons etc)
* Paper Elements - Material Design Elements
* Neon Elements - Elements related to animation
* Gold Elements - E-Commerce Elements (ccard)
* Platinum Elements - HTML5 Elements (Offline, Push, etc)
* Google Web Components - Wrapper Elements for Google API
* Molecules - Custom Wrapper Elements for 3th parties

---
### Some usefull elements
* Paper Toolbar
* Paper Header Panel
* Paper Drawer Panel
* Paper Input
* Paper Icon Button
* Paper Tabs
* Iron Pages
* Iron List
* Iron Icons

---
### How to use the elements
By including the html 
```
<link rel="import" href="/element-{set}/element-{set}.html" />
```
into your page, you can use the elements like

```
<paper-toolbar></paper-toolbar>
```

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


---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Polymer Element Catalog

---
<!-- .slide: data-background="url('images/lab2.jpg')" --> 
<!-- .slide: class="lab" -->
## Lab time!
Create a nicer layout




