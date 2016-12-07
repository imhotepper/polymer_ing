## Lab 6. Routing
In this lab you will add routing to reflect the state and parameters into the url. 
This enables the back and forward buttons for the browser and makes deeplinking possible.
> duration: 45 minutes

### Step 1. Setting the state
Open file 'index.html' inside your current folder. If the exercise was not successful in the last
lab, you can copy and paste a version from the _solution folder from the last exercise, this
can be found in './Lab. 5. Using Elements/_solution/Lab. Using Animated Pages/index.html'.

Make sure that the current setup works. Ask the instructor for help if you do not have a valid setup.

### Step 2. Install app-elements
Use the commandline in the current directory to install the app-elements with the following command 
```
$ bower install app-elements
```

Add the app-elements href import to the page. Save the file.

Include the following routing elements, just above the paper-header-panel in the index.html.
```
  <app-location route="{{route}}"></app-location>
  <app-route id="router" pattern="/:view" active="{{active}}" route="{{route}}" data="{{routeData}}" tail="{{routeTail}}"></app-route>         
```

The location element takes care of getting the url and stuffing it into the route property.
The route element takes the route object, if the patter matches and creates a routeData and routeTail object. 
The routeData object holds the placeholder properties from the pattern, view in this case. 

Adjust the neon-animated-pages so that the attr-for-selected is set to the 'name' attribute. The selected
property should be two way bound to the routeData.view property. Your code should look like this
```
 <neon-animated-pages 
    attr-for-selected="name" 
    selected="{{routeData.view}}" 
    id="pages" 
    entry-animation="fade-in-animation" 
    exit-animation="fade-out-animation">
                   
```

Because the selected now reflects the viewname, make sure the child page divs have a name attribute that is set to the following
```
  <div name="vote">...</div>
  <div name="details">...</div>
```

Save all files, start lite-server and reload the browser. Type the following into the address bar:
```
http://localhost:3000/vote
````

If all was implemented well, the vote page should display.
Now type 
```
http://localhost:3000/details
```
The details page should be displayed. However there is no parameter that reflects the candidate to display.

Save all files.

### Step 3. Using child routes to split up the path
Add another app-route that takes the routeTail from the parent route and creates a routeChildData. The pattern
should reflect an id placeholder. Place the following code beneath the first route
```
<app-location route="{{route}}"></app-location>
<app-route id="router" pattern="/:view" route="{{route}}" data="{{routeData}}" tail="{{routeTail}}"></app-route>
<app-route id="router" pattern="/:id" route="{{routeTail}}" data="{{routeChildData}}" tail="{{routeChildTail}}"></app-route>
```

We now can handle both the /vote and the /details/1 urls and get the respective values from the properties.

Add the code for the detailspage so the id of the routeChildData is used to display the appropriate candidate
> http://localhost:3000/details/1 should display details about Hillary

To implement this, we need to observe the routeChildData.id, each time this value changes, we need to set the this.selectedCandidate
The code to implement this is placed inside the application, after the properties and should look like
```
observers: ['_viewChanged(routeChildData.id)'],
_viewChanged: function(view) {
    setTimeout(function(){
        if (this.routeChildData.id)
            this.selectedCandidate = this.candidates[parseInt(this.routeChildData.id)];
    }.bind(this), 50);
},
```

The setTimeout takes care of postponing the setter until after the data is set in the script that executes on the bottom of the page.

Save all files and test the solution with the following urls
```
http://localhost:3000/vote
http://localhost:3000/details/0
http://localhost:3000/details/1
```

Do the urls work ok? Look in the solution file if it does not work!

### Step 4. Making the buttons work
Ok so now the deeplinking works, but when you press any button, the page is broken. Let's fix this.

Change the _goBack function so it looks like this
```
 _goBack: function(){
    this.set('route.path',"/vote");
},
```

Change the _showInfo function so it looke like this
```
 _showInfo: function(){
    this.selectedCandidate = event.model.item;
    this.set('route.path',"/details/" + this.candidates.indexOf(this.selectedCandidate));
},
```

Save all the work and reload the browser, does it all work? Congrats! Great Job!

### Summary
We've implemented routing and deeplinking in our application. Lets refactor out some elements to lazy load.

-= End of lab =-
  