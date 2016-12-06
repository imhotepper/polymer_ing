## Lab 1. Creating a custom element
In this lab you will create a custom element that holds product information
> duration: 45 minutes

### Step 1. Setting the stage
Create a directory 'polymer_labs\elements' and navigate into it.
Install NodeJS from it's website and use npm to install lite-server globally
```
$ sudo npm install lite-server -g
```
Create the following file and directory structure:
- product\product-detail.html
- index.html

Give the index.html appropriate content. Make sure to refer to the
Polymer html include inside the head section of your HTML page.

Include the 'products\product-detail.html' in the head of your index.html

Define an element that displays a product's title, price, stock and details. Define these
as properties on your element. 

An example of the element is given below. 

```
<dom-module is="product-detail">
  <template>
    <style>
          :host { display:inline block;}
    </style>
    <h1>{{ title}}</h1>
    <hr/>
    <p> {{ details }}</p>
    <div class="buttons">
        Current stock: {{ stock }} <br/>
    </div>
  </template>
  <script>
  Polymer({
      is:'product-detail',
      properties:{
          stock:{
              type:Number, 
              value:10,
              notify:true,
          },
          details: {
              type:String, 
              value:'An IPad is a revolutionary thing',
          },
          title: {
              type:String, 
              value:'IPad 7',
              notify:true,
          },
      }
  });
  </script>
</dom-module>
```
Use the element as an element on the index.html

Save all files.
Run the setup using the following command from the root of your labfolder:
```
lite-server
```

Make sure you see the component alive in the browser

### Step 2. Add a computed property
Open the file 'product/product-detail.html' and add the following button 
to the template 
```
 <button  disabled$="{{isOutOfStock}}">Buy this product</button>
```

This button lets the user buy the product, but only if it is in stock.

Add a computed property named `isOutOfStock` that is of type Boolean. 
The property should return false when the stock has a value larger than 0.

The computed function is already hooked to the button. 

Save the files.

Test the result by locating and selecting the element in the browser and 
typing the following in the console screen of Chrome:
```
$0.stock = 0
```
Is the button disabled?
Type the following in the console screen again:
```
$0.stock = 10
```
Is the button enabled again?

### Step 3. Add Methods to the product-detail component
Open the file 'product/product-detail.html' and add two methods to 
the component:
- add a method to buy the product. This method should 
decrement the stock value. 
- add a method to increase the stock. This method should 
increment the stock with a given value. 

Add code to the buy button in the template that let's the user buy 
the product. When the user taps the button, the product's stock 
should be decremented by one. 

The methods should look something like this:
```
buy: function(){
    this.stock--;
}
addStock: function(value){
    this.stock += value;
}
```

Test the component in the browser. Buy products and check if the button is disabled 
when the stock runs out.

### Step 4. Add events to the product-detail component
Open the file 'product/product-detail.html' and add two events to the product-detail
component:
- Add an event that gets fired when the item is bought.
Name this event `bought`.
This event should be fired when the user pressed the buy button.

- Add an event that gets fired when the stock runs out.
Name this event `outofstock`.
This event should be fired upon stock changes. Register an observer in 
the property that takes care of checking and perhaps firing the event.

Open the file 'index.html' and write code that declares handlers for 
these events and write their occurence to the console.log.

Note that you have to rewrite the index.html so that it uses an automatic dom-module
which wrappes the product-detail module.

Your html should look like this:
```
<html>
<head>
    <link rel="import" href="https://cdn.rawgit.com/download/polymer-cdn/1.5.0/lib/polymer/polymer.html"/>
    <link rel="import" href="./product/product-detail.html"/>
</head>
<body>
    <dom-module id="my-app">
        <template>
            <product-detail on-bought="_bought" on-outofstock="_outofstock"></product-detail>
        </template>
        <script>          
            Polymer({
                is:'my-app',
                _outofstock:function(){ console.log("product out of stock")},
                _bought:function(){ console.log("product bought")}
            })
        </script>
    </dom-module>
    <my-app><my-app>
</body>
</html>
```


Save all the files and test the workings in the browser. Buy products while having the 
developer tools open with the console tab selected. Check if the events are 
written to the log.

If you did not manage to complete the labs, be sure to inspect the solution in the _solution folder. 
In this folder you can find a working copy of the code with the completed labs.

### Summary
We have written a component with its own API. We have written a couple of properties, a few methods
and we subscribed to and raised some events. This is, hover, still a single, unstyled element.

Let's add some more logic to this element in future labs.

-= End of lab =-
