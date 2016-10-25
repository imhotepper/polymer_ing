# Animating Elements

---
### Agenda
* Animation behaviors
* Animation Config
* Single Element Animation
* Shared Element Animation
* Neon Animated Pages
* Custom Animations

---
### Neon animation
Polymer has support for animation
* predefined neon animations 
* animation behavior
    * animationConfig
    * animation API

---
### Animation behaviors
Animation exists of two behaviors
* NeonAnimatableBehavior
  * Allows for animation of elements
* NeonAnimationRunnerBehavior
  * Gives animation API to your element
        * playAnimation
        * cancelAnimation
  * Implements NeonAnimatableBehavior

---
### Simple animation example

```
...
behaviors: [ Polymer.NeonAnimationRunnerBehavior ],
properties: {
    animationConfig: {
        value: function() {
            return {
                name: 'scale-down-animation',
                node: this
    }}}
},
animate: function() {
    this.playAnimation();
},
...
```

---
### Animation Configuration

Animations can have more named configs
```
animationConfig: { value: function() {
        return {
          'entry': {
            name: 'scale-up-animation',
            node: this
          },
          'exit': {
            name: 'fade-out-animation',
            node: this
          }}}}
  },
  show: function() {
    this.playAnimation('entry');
  },
  hide: function() {
    this.playAnimation('exit');
  },
```

---
### Animation Configuration
Configuration properties

Animation configuration object properties
* name: The name of an animation
* node: The target node to apply the animation to. Defaults to this.
* timing: Timing properties to use in this animation. 
    * duration in milliseconds.
    * delay in milliseconds.
    * easing timing function 

Animations may define additional configuration properties 
listed in their documentation.

---
### Multiple Animations
The following animations run in parallell
```
animationConfig: { value: function() {
    return {
      'entry': [{
        name: 'slide-down-animation',
        node: this
      }, {
        name: 'fade-in-animation',
        node: this,
        timing: {delay: 50}
      }]
    }}}
```
Timing property is used for sequential animations

---
### Run child animations

Running animations encapsulated in children nodes
```
animationConfig: { value: function() {
    return {
      // run fade-in-animation on this, and the entry animation on this.$.myAnimatable
      'entry': [
        {name: 'fade-in-animation', node: this},
        {animatable: this.$.myAnimatable, type: 'entry'}
      ]
    }}}
```

---
### Animation events
NeonAnimationRunnerBehavior fires the following event
* neon-animation-finish

listen for these using listeners
```
listeners:{
    'neon-animation-finish':'_onNeonAnimationFinish'
}
```

---
### Animation Configuration

IMPORTANT: Web animations do not preserve state
* after the animation has run, all is restored
* use listeners object to listen for neon-animation-finish event

---
### Included animations
Included animations
* Single element animations
    * works on single element only
* Shared element animations
    * Animate from one element to another element
* Group animations
    * Applys an animation to an array of elements 

---
### Single Element Animations
* fade-in-animation: opacity from 0 to 1
* fade-out-animation: opacity from 1 to 0
* scale-down-animation: from scale(1) to scale(0)
* scale-up-animation: from scale(0) to scale(1)
* slide-down-animation: from translateY(-100%) to none
* slide-up-animation: from none to translateY(-100%)
* slide-left-animation: from none to translateX(-100%)
* slide-right-animation: from none to translateX(100%)
* slide-from-left-animation: from translateX(-100%) to none
* slide-from-right-animation: from translateX(100%) to none
* transform-animation: a custom animation.

---
### Shared animations

* hero-animation: like it scales and transforms from another element
* ripple-animation: like it ripples from element to fullscreen

---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
hero animation 


---
### Neon-animated-pages

An element to show pages ANIMATED!
* Children should implement Polymer.NeonAnimatableBehavior
* Entry and exit animations run when switching pages

---
### Example Neon-animated-pages
```
  <template>
    <neon-animated-pages entry-animation="fade-in-animation" exit-animation="fade-out-animation">
      <neon-animatable>
        First Page
      </neon-animatable>
      <neon-animatable>
        Second Page
      </neon-animatable>
    </neon-animated-pages>
  </template>
```

---
### Write your own animation
You can write your own animation
* implement NeonAnimationBehavior
* use the configure function to configure the animation
* return KeyFrameEffect object

---
### Example custom animation
```
Polymer({
    is:'my-cool-animation',
    behaviors:[Polymer.NeonAnimationBehavior],
    configure: function(config){
        this._effect = new KeyframeEffect(
            config.node, 
            [ {'opacity': '0'},
              {'opacity': '1'} ], 
            this.timingFromConfig(config));
        return this._effect;
    }
});
```

---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Neon-Animated-Pages 

---
<!-- .slide: data-background="url('images/lab2.jpg')" --> 
<!-- .slide: class="lab" -->
## Lab time!
Create a nicer layout
