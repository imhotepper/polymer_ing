## Lab 1. Basic Setup
In this lab you will start to create a web application using helper elements. We are going to create an election app.. The idea is that we can select 2 opponents and select one for 
president. This case is used throughout the rest of the course. Each lab builds onto the next.
> duration: 45 minutes

### Step 1. Create a polymer setup
Create a directory 'polymer_labs' and navigate into it.
Install NodeJS from it's website and use npm to install lite-server globally
```
$ npm install lite-server -g
```

Create a file 'index.html' inside your current folder and write a html page like this:

```
<html>
  <head>...</head>
  <body>...</body>
</html>
```

Download Polymer with the following command:
```
$ bower install polymer
```

Add the bower html import to the head of the page and add the following markup inside your HTML file:
```
<template is="dom-bind" id="myapp">
    <h1>Hello {{message}}</h1>
</template>
<script>
document.querySelector("#myapp").message = "Polymer!";
</script>
```

Save your files. Run 'lite-server' with the following command:
```
$ lite-server
```

If all went well, you should see a welcome page in the browser.


### Step 2. Creating an election app
Open 'index.html' and add code to display 2 candidates. Use an array to hold the two candidates and hold 
an array to hold the votes. Use two template repeater elements to display the candidates and the results.

The code to create the model and add the data is given below. Your code to display the data has to be added 
to the snippet below:

```
 <dom-module is="dom-bind" id="my-app">
    <template>
        <h1>{{message}}</h1>
        <div><strong>Candidates:</strong>
            ... your code here ...
        </div>
        <div><strong>Votes:</strong>
            ... your code here ...
        </div>
    </template>
      <script>
            Polymer({ is:'my-app' });
    </script>
</dom-module>

<my-app></my-app>

<script>
    var Candidate = function(name, lastname){
        this.name = name;
        this.lastname = lastname;  }
    var Vote = function(candidate, time){
        this.candidate = candidate;
        this.time = time; }
    document.querySelector("my-app").message = "Election Day!";
    document.querySelector("my-app").candidates = [
        new Candidate('Donald', 'Dump'),
        new Candidate('Hillary', 'Clint') ];
    document.querySelector("my-app").votes = [];
</script>
```

Save the files and test your code in the browser...


### Step 3. Add code to make voting possible
Open 'index.html' and add code to click on a candidate and update the vote array.
Your vote list should list the time and candidate voted.

The snippet to add a vote is given below, copy and paste this code into the Polymer call
for 'my-app' 

```
vote: function(){
  this.push('votes', new Vote(event.model.item, new Date().toLocaleTimeString()));
}
```

Update the template so this code is called upon voting.
Save your files and test the solution.

Use sorting on the second template-repeater to sort the votes where the last vote is shown first.
hint: add a created field to the vote to sort upon. This field could be defined as follows:

```
var Vote = function(candidate, time){    
                this.candidate = candidate;
                this.created = Date.now();
                this.time = time; 
            }
```

### Step 4. Conditional Templates
Add a pane (div) that shows the election result. If there are more than 10 votes, the results should
be shown and the winning candidate shoud be displayed.

In the snippet below is an example of the winner calculation:
```
 Polymer({
    is:'my-app',
    properties:{
        winner:{
            type:String
        }
    },
    _getSort: function(a, b){
        return b.created - a.created;
    },
    getWinner: function(){
        var filtered = this.votes.filter(function(item){
            return item.candidate === this.candidates[0];
        }.bind(this));
        if (filtered.length == this.votes.length/2) return 'not defined, we need one more vote';
        if (filtered.length < this.votes.length/2)  return this.candidates[1].name;
        return this.candidates[0].name;
    },
    vote: function(){
        this.push('votes', new Vote(event.model.item, new Date().toLocaleTimeString()));
        if (this.votes.length > 10) this.winner = this.getWinner();
    }
});
```


### Extra Exercise
Make the application better looking using CSS and theming. 
Go to the site https://www.materialpalette.com/ and apply your styles to the site.


The final solution in the _solution folder contains a fully working example, compare your 
results with the  files from the solution.

### Summary
We've used template helpers to create a small election app. This app is the basis for next
lab exercises. The app works but is not materialized, does not persist its data and is not
offline capable.


-= End of lab =-
  
