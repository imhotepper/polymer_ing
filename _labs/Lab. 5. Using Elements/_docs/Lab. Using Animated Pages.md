## Lab 1. Using Neon Animated Pages
In the previous lab we've used iron-pages to create multiple 'pages'. Let's add some animations 
to our application.
> duration: 30 minutes

### Step 1. Use Neon-Animated-Pages
Open file 'index.html' inside your current folder. If the exercise was not successful in the last
lab, you can copy and paste a version from the _solution folder from the last exercise.

Replace the 'iron-pages' element with neon-animated-pages. 
Make use of the entry and exit animations from the list of element animations.

Don't forget to add the appropriate includes in the header of your HTML file.

Save your files. Run 'lite-server' with the following command:
```
$ lite-server
```

If all went well, our first animation is alive.

> Note that the animated pages are positioned absolute. It might be a good idea to
> store the votes and the results into the first page aswell.


### Step 2. Add another cool animation
Add an animation to fade out the iron-list upon voting.

Add the following behavior to the application
```
behaviors: [ Polymer.NeonAnimationRunnerBehavior ],
```

Add the following animationConfig to the application
```
animationConfig: {
    value: function() {
        return {
            'vote':[ { name: 'scale-down-animation', node: this.$.candidateGrid}]
}}}
```

Add the code to run the animation upon voting
```
vote: function(){
    this.push('votes', new Vote(event.model.item, new Date().toLocaleTimeString()));
    if (this.votes.length > 10) this.winner = this.getWinner();
    this.playAnimation('vote');
}
```

Save all files and test the solution. Add some voting, does all work well?

If you did not manage to get it working, look at the solution index.html in the 
folder '_solution/Lab. Using Animated Pages/index.html'.

### Extra Exercise
Create and use your own custom animation. You can look at the prebuilt animations from 
Polymer.

The final solution in the _solution folder contains a fully working example, compare your 
results with the  files from the solution.

### Summary
We've used animation to spice up the application. There is still more work to be done.
We will cover these topics in the next labs.


-= End of lab =-
  