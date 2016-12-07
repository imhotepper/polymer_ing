## Lab 1. Creating a custom element
In this lab you will create a custom behavior that highlights 'stuff'
> duration: 20 minutes

### Step 1. Setting the stage
Create a directory 'polymer_labs\behaviors' and navigate into it.
Install NodeJS from it's website and use npm to install lite-server globally
```
$ sudo npm install lite-server -g
```
Copy the solution items from the previous lab `lab. Creating Elements', found in the 
_solution folder from that location into the `polymer_labs\behaviors` folder.

Add the following file into the `product` subfolder.
- highlight.html

Open the file `.\product\product-detail.html` and include references to polymer and our 
behavior.

Save all files.

Open the file `.\product\highlight.html` and implement a behavior with the following
requirements:
- the behavior should contain a boolean property `highlight` that is reflected 
onto an attribute. 
- the behavior should listen for `click` events and handle them by assigning a value
to the property `highlight`.
- the behavior should add a class to the target element named `highlighted`

Save all the files.

Run the setup using the following command from the root of your labfolder:
```
lite-server
```

Make sure there are no errors displayed.

Select the component in the element view and check if clicking the product-details toggles the 
highligh attribute. Also check if the class is applied accordingly.


### Step 2. Add styles to the product-details
Open the file 'product/product-detail.html' and add styles to this element. 
Give the product-details a red background when the .highlighted class is set.

Save all the files.

Run the setup using the following command from the root of your labfolder:
```
lite-server
```

> Note how the background is ugly and non-containing. 

Fix the styles by adding styles ontothe host element.

Save all files and run/test again.


### Extra exercise. Add more product-details.
Open the file 'index.html' and add a few more 
product-details 
to the template.

Save all the files.

Run the setup using the following command from the root of your labfolder:
```
lite-server
```

### Summary
In this lab we have implemented a general behavior that makes elements highlightable. 
Clicking an item takes care of toggeling an attribute and a class. 
These changes can be used for styling our elements. 

-= End of lab =-
