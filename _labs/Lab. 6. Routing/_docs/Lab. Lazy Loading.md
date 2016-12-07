## Lab 6. Lazy Loading
In this lab you will add lazy loading to the application to load the elements just in time and on demand.
> duration: 35 minutes

### Step 1. Setting the state
Open file 'index.html' inside your current folder. If the exercise was not successful in the last
lab, you can copy and paste a version from the _solution folder from the last exercise, this
can be found in './Lab. 6. Routing/_solution/Lab. Routing/index.html'.

Make sure that the current setup works. Ask the instructor for help if you do not have a valid setup.

### Step 2. Refactor the pages into elements
Add two files to your current directory. Name them 'vote-page' and 'details-page' respectively.

Open the index file and change the neon-animated-pages so it resembles
```
 <neon-animated-pages attr-for-selected="name" selected="{{routeData.view}}" id="pages" entry-animation="fade-in-animation" exit-animation="fade-out-animation">
   <vote-page name="vote" votes="[[votes]]" candidates="[[candidates]]" on-show-info="showInfo" on-vote="vote">Loading vote page...</vote-page>
   <details-page route="{{routeTail}}" name="details" selected-candidate="{{selectedCandidate}}" candidates="[[candidates]]" votes="[[votes]]" on-goback="goBack">Loading details...</details-page>
</neon-animated-pages>
```

Use the contents of the previous divs and create elements (dom-modules) in the correctly named files.
So the div with all the vote stuff goes into the vote-page (Remember to create a Polymer element).
The div with all the detail stiff goes into the details-page.

> Do not include these element into the page, we are going to lazy load them. 

If all went well, you should have the following three files:

vote-page.html
```
<dom-module id="vote-page">
    <template>
        <div name="vote"><strong>Candidates:</strong>
            <iron-list grid items="[[candidates]]" id="candidateGrid">
                <template>
                <paper-card heading="Vote for" style="margin-top:2px;zoom:96%;width:45%;">
                        <div class="card-content">  [[item.name]] [[item.lastname]] </div>
                        <div class="card-actions">
                            <paper-icon-button on-tap="showInfo" icon="info-outline"></paper-icon-button>
                            <paper-fab id on-tap="vote" mini icon="star" style="float:right;margin-bottom:5px;"></paper-fab>
                        </div>
                    </paper-card>
                </template>
            </iron-list>
            <div><strong>Votes:</strong>
                <template is="dom-repeat" items="[[votes]]" sort="_getSort" observe="time">
                    <div>[[item.time]] -> [[item.candidate.name]]</div>
                </template>
            </div>
            <div><strong>Result:</strong>
                <template is="dom-if" if="[[winner]]"> <div>The next president: {{ winner }}</div> </template>
            </div>
        </div>
    </template>
    <script>
       Polymer({
            is:'vote-page',
            properties:{
                votes: { type:Array},
                winner:{ type:String },
                animationConfig: {
                    value: function() {
                        return {
                            'vote':[ { name: 'scale-down-animation', node: this.$.candidateGrid}]
                }}}
            },
            behaviors: [ Polymer.NeonAnimationRunnerBehavior ],
            _getSort: function(a, b){  return b.created - a.created;  },
            getWinner: function(){
                            var filtered = this.votes.filter(function(item){
                                return item.candidate === this.candidates[0];
                            }.bind(this));
                            if (filtered.length == this.votes.length/2) return 'not defined, we need one more vote';
                            if (filtered.length < this.votes.length/2)  return this.candidates[1].name;
                            return this.candidates[0].name;
            },
            vote: function(){
                if (this.votes.length > 10) this.winner = this.getWinner();
                this.fire('vote', new Vote(event.model.item, new Date().toLocaleTimeString()));
                this.playAnimation('vote');
            },
            showInfo: function(){
                this.fire('show-info', event.model.item);
                this.playAnimation('vote');
            }
        });
    </script>
</dom-module>
```

details-page.html
```
<dom-module id="details-page">
    <template>
        <app-route id="router" pattern="/:id" route="{{route}}" data="{{routeData}}" tail="{{routeTail}}"></app-route>
        <div name="details">
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
        </div>
    </template>
    <script>
        Polymer({
            is:'details-page',
            properties:{
                selectedCand1idate:{ type:Object,   notify:true }
            },
            observers: ['_viewChanged(routeData.id)'],
            _viewChanged: function(view) {
                setTimeout(function(){
                    if (this.routeData.id)
                        this.selectedCandidate = this.candidates[parseInt(this.routeData.id)];
                }.bind(this), 50);
            },
            _voteCount: function(candidate, votes){
                return  this.votes.filter(function(item){  return  item.candidate == candidate;  }).length;
            },
             _goBack: function(){
                 this.fire('goback');
            }
        });
    </script>
</dom-module>
```

index.html
```
<html>
    <head>
        <link rel="import" href="/bower_components/polymer/polymer.html"/>
        <link rel="import" href="/bower_components/app-elements/app-elements.html"/>
        <link rel="import" href="/bower_components/iron-elements/iron-elements.html"/>
        <link rel="import" href="/bower_components/paper-elements/paper-elements.html"/>
        <link rel="import" href="/bower_components/neon-animation/neon-animation.html"/>
        <link rel="import" href="/bower_components/neon-animation/neon-animated-pages.html"/>
        
    </head>
    <body class="fullbleed layout vertical">
        <dom-module is="dom-bind" id="my-app">
            <template>
                <app-location route="{{route}}"></app-location>
                <app-route id="router" pattern="/:view" route="{{route}}" data="{{routeData}}" tail="{{routeTail}}"></app-route>
               
                <paper-header-panel>
                    <paper-toolbar><div>{{message}}</div></paper-toolbar>
                    <neon-animated-pages attr-for-selected="name" selected="{{routeData.view}}" id="pages" entry-animation="fade-in-animation" exit-animation="fade-out-animation">
                         <vote-page name="vote" votes="[[votes]]" candidates="[[candidates]]" on-show-info="showInfo" on-vote="vote">Loading vote page...</vote-page>
                         <details-page route="{{routeTail}}" name="details" selected-candidate="{{selectedCandidate}}" candidates="[[candidates]]" votes="[[votes]]" on-goback="goBack">Loading details...</details-page>
                    </neon-animated-pages>
                </paper-header-panel>
            </template>
             <script>
                    Polymer({
                        is:'my-app',
                        properties:{
                        },
                        goBack: function(){
                            this.set('route.path',"/vote");
                        },
                        showInfo: function(item){
                            this.set('route.path',"/details/" + this.candidates.indexOf(item.detail));
                        },
                        vote: function(e){
                            this.push('votes', e.detail);
                        }
                    });
            </script>
        </dom-module>

        <my-app></my-app>

        <script>
            var Candidate = function(name, lastname){
                this.name = name;
                this.lastname = lastname;  }
            var Vote = function(candidate, time){
                this.candidate = candidate;
                this.created = Date.now();
                this.time = time; }
            document.querySelector("my-app").message = "Election Day!";
            document.querySelector("my-app").candidates = [
                new Candidate('Donald', 'Dump'),
                new Candidate('Hillary', 'Reagan') ];
            document.querySelector("my-app").votes = [];
        </script>

    </body>
</html>
```

Try to understand the individual files. Note that there are no imports defined to the vote-page and the detail-page.
Save all files and test to see if it works as expected. You should see a placeholder text saying that the element is loading. 

### Step 3. Use observers to lazy load the elements
When the route changes, we want to load elements for the page. We use an observer to monitor route changes. When the route changes
we load the respective page.  Implement the following logic into the index.html
```
observers: ['_routeChanged(routeData.view)'],
_routeChanged: function(view){
    // lazyload the page
    this.importHref(this.resolveUrl('/' + view +'-page.html'))
},
```

Save the files and test your solution. Make sure that you have an eye on the terminal to see the details-page gets 
loaded only the first time when we switch pages! We've lazyloaded our application partly.

### Summary
We've implemented routing and lazy loading. But there is still work left to do. Let's make our app offline capable.

-= End of lab =-
  