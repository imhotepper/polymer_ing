# Extending Elements

---
### Extending Elements
Sometimes HTML elements needs to be extended
* custom form elements
* custom table rows

Only native elements can be extended for now!

---
### Register your element as extends
```
MyInput = Polymer({
      is: 'my-input',
      extends: 'input',
      created: function() {
        this.style.border = '1px solid red';
      }
    });

    var el1 = new MyInput();
    console.log(el1 instanceof HTMLInputElement); // true
    var el2 = document.createElement('input', 'my-input');
    console.log(el2 instanceof HTMLInputElement); // true
    // or use:
    <input is="my-input">
``` 

---
### Using a type-extension
Use the native tag and add an is attribute 

```
<input is="my-input">
```

---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Demo 5. Defining a type-extension

---
<!-- .slide: data-background="url('images/lab2.jpg')" --> 
<!-- .slide: class="lab" -->
## Lab time!
Writing a type-extension