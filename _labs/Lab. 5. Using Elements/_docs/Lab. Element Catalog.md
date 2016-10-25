## Lab 1. Element Catalog
In this lab you will use elements from the Polymer Catalog to smooth up the experience to vote.
> duration: 45 minutes

### Step 1. Create a floating header panel
Open file 'index.html' inside your current folder. If the exercise was not successful in the last
lab, you can copy and paste a version from the _solution folder from the last exercise.


Download iron and paper elements with the following command:
```
$ bower install iron-elements paper-elements
```

Add import links to the page to import paper-elements.
Define a fullbleed body to get rid of the margins
```
  <body class="fullbleed layout vertical">
```

Give the 'index.html' page an appropriate header using the paper-header-panel element.
Make sure to set the header div into a paper-toolbar. The header panel wraps the toolbar
and a div with the rest of the content.


Save your files. Run 'lite-server' with the following command:
```
$ lite-server
```

If all went well, you should see a working page in the browser.


### Step 2. Create an iron grid list for the votes containing paper-cards
Open 'index.html' and change the code that displays then 2 candidates. 
Make use of an iron-list to display two paper-cards for the different candidates.

You can use 'grid' as an attribute to set the iron-list to grid mode like so 
```
<iron-list grid items=".."></iron-list>
```

The paper card is implemented with styles like this
```
<paper-card heading="Vote for" style="margin-top:2px;zoom:96%;width:45%;">
   ... your code here...
</paper-card>
```

Save the files and test your code in the browser, all should still work.

### Step 3. Using FAB and Icons
Change the paper card-actions div. Replace the current content to hold a paper-icon-button with an icon 'info-outline' and
a paper-fab with an icon 'star'. This last button should become the vote button.

The code should look like 
```
 <div class="card-actions">
    <paper-icon-button icon="info-outline"></paper-icon-button>
    <paper-fab on-tap="vote" mini icon="star" style="float:right;margin-bottom:5px;"></paper-fab>
</div>
```

Save the files and test your code in the browser, all should still work.


### Step 4. Iron pages
The info button in the action-card does not implement behavior.

Wrap the whole div for the candidates into an iron-pages element and add a div
for the details page, like this
```
 <iron-pages selected="0" id="pages">
        <div><strong>Candidates:</strong>
        ...
        </div>
        <div>two</div>
</iron-pages>
```

When someone clicks on the info button, the selected candidate should be set.
You need to implement a property to hold the selected candidate.
The _showInfo should also switch pages to the next page. Implement the _showInfo as 

```
 _showInfo: function(){
    this.selectedCandidate = event.model.item;
    this.$.pages.selected = 1;
},
```

Dont forget to add a property to hold the selectedCandidate.

Add the handler above and add the code that calls this function from the info button.
Save all files and test the solution.


### Step 5. Paper-card for detail information
Add paper-cards to display detail information for the given candidate..
The card show show:
- name and lastname
- current count of votes
- a back paper-button to navigate back to the main screen

Here are some snippets of code you need to place in the page

The paper card should look like this
```
<paper-card>
    <div class="card-content">
    <div class="header">[[selectedCandidate.name]] [[selectedCandidate.lastname]] </div>
    <p>Biography for....</p>
    </div>
    <div class="card-actions">
    <p>Current votecount: {{_voteCount(selectedCandidate, votes.*)}} </p>
    <paper-button on-tap="_goBack">Back</paper-button>
    </div>
</paper-card>
```

The _voteCount method is calculated as follows
```
 _voteCount: function(candidate, votes){
    return  this.votes.filter(function(item){ 
        return  item.candidate == candidate;
    }).length;
},
```

The _goBack function should be implemented like this
```
 _goBack: function(){
    this.$.pages.selected=0;
},
```

Try to implement the paper card and the polymer functions with the definition given above.
Save all files and test the solution. Does your solution work?


If it did not work to get the code working, copy the solution file from the folder 
'_solution/Lab. Element Catalog/index.html'. Compare your results with the results from the solution.

### Extra Exercise
Browse though the customelements.io website and see if there are interesting elements
to add to the application.


Try to find the animated-countdown and implement a number of seconds before election-day.

The final solution in the _solution folder contains a fully working example, compare your 
results with the  files from the solution.

### Summary
We've implemented polymer catalog elements to implement basic user-interfaces for our
vote-application. In the next labs we are going to implement routing, offline support and AJAX.

-= End of lab =-
  