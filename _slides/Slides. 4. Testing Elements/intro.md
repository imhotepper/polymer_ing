# Testing

---
### Agenda
* Unit Testing
* Testing in Polymer
* Documenting
* Linting

---
### Unit Testing
Why do we test?

> Applications tend to grow

---
### Polymer Testing
Polymer uses a tool called Web Component Tester
Web Component Tester is 
* end-to-end testing environment 
* built by the Polymer team 

It enables you to test your elements 
* locally against all of your installed browsers
* remotely, via Sauce Labs. 

---
### Polymer Testing
It is built on top of popular third-party tools
* Mocha for a test framework, complete with support for BDD and TDD
* Chai for more assertion types that can be used with your Mocha tests
* Sinon for spies, stubs, and mocks
* Selenium for running tests against multiple browsers
* Accessibility Developer Tools for accessibility audits

---
### Quickstart

* Install Web Component Tester or Polymer-cli
* Create an element project
* cd to the base directory of your project.
* Run the test
```
polymer test
```

---
### OSX Requirement
IF you run on a MAC
* Manually install the latest SafariDriver extension for Selenium 
(SafariDriver.safariextz) 

---
### Creating Tests
Include test library
````
 <script src="../../web-component-tester/browser.js"></script>
```
write tests
```
      suite('my-el', function() {
        test('instantiating the element works', function() {
          var element = document.createElement('my-el');
          assert.equal(element.is, 'my-el');
        });
      });
````

---
### Run the tests
Use one of the following options
* wct
* polymer test

> Note: Chrome needs a manual shutdown

---
### Asynchronous tests
Test can run asynchronous. The framework waits for
* done() method call 
* if done() is not called, timeout causes test failure

```
test('fires lasers', function(done) {
  myEl.addEventListener('seed-element-lasers', function(event) {
    assert.equal(event.detail.sound, 'Pew pew!');
    done();
  });
  myEl.fireLasers();
});
```

---
### Test Fixtures
Enable a clean, new instance of content into each test suite
To use a test fixture

* define test fixture template and give it an ID
* define a variable in test script to reference  template
* instantiate a new instance of fixture in setup() method

---
### Test Fixtures Example
Example of a test fixture
```
<test-fixture id="seed-element-fixture">
  <template>
    <seed-element>
      <h2>seed-element</h2>
    </seed-element>
  </template>
</test-fixture>
```

---
### Test Fixtures Example
```
<script>
  suite('<seed-element>', function() {
    var myEl;
    setup(function() {
      myEl = fixture('seed-element-fixture');
    });
    test('defines the "author" property', function() {
      assert.equal(myEl.author.name, 'Dimitri Glazkov');
    });
  });
</script>
```

---
### Stub Methods
Stubs replace default implementations with custom methods. 
Useful for catching side effects.
```
setup(function() {
  stub('paper-button', {
    click: function() {
      console.log('paper-button.click called');
    }
  });
});
```
You can override the implementation for all elements of a given type.

---
### Stub Elements
To test elements in isolation
* Use replace() to create stub elements
```
setup(function() {
  replace('paper-button').with('fake-paper-button');
});
```

---
### Example Stub Element
Using the sample replace() above and the element below:
```
<dom-module id='x-el'>
  <template>
    <paper-button id="pb">button</paper-button>
  </template>
</dom-module>
```

---
### Example Stub Element
At runtime, the content template would be
```
<dom-module id='x-el'>
  <template>
    <fake-paper-button id="pb">button</fake-paper-button>
  </template>
</dom-module>
```

---
### AJAX testing
Web Component Tester includes Sinon
* mock XHR requests 
* create fake servers

---
### AJAX testing Example
```
setup(function() {
    server = sinon.fakeServer.create();
    server.respondWith( 'GET',
    /\/responds_to_get_with_json.*/, [
    200, responseHeaders.json, '{"success":true}']);
```
```
test('has sane defaults', function() {
    request = ajax.generateRequest();
    server.respond();
    expect(request.response).to.be.ok;
```

---
### Test sets
run a set of tests
* create an HTML file and call loadSuites()
* Start wtc with HTML file as argument
```
wct test/my-test-set.html
```

---
### Example Test Sets
```
<html><head>
    <meta charset="utf-8">
    <script src=”../bower_components/webcomponentsjs/webcomponents-lite.js”></script>
    <script src=”../bower_components/web-component-tester/browser.js”></script>
</head><body>
    <script>
      WCT.loadSuites([
        'basic.html',
        'async.html'
      ]);
</script></body></html>
```

---
### Test Local DOM
Use DOM API to access and modify local DOM children
* myEl.$$('button') returns the first button element

```
test('click sets isWaiting to true', function() {
  myEl.$$('button').click();
  assert(myEl.isWaiting, true);
});
```


---
### Test DOM mutations
When mutating local DOM
* wrap your test in flush
    * ensures asynchronous changes have taken place
* call done() at the end of flush

---
### Example DOM mutation
```
suite('my-list tests', function() {
  var list, listItems;
  setup(function() { list = fixture('basic'); });
  test('Item lengths should be equal', function(done) {
    list.items = [
      'Responsive Web App boilerplate',
      'Unit testing with Web Component Tester',
      '..'
    ];
    // Data bindings will stamp out new DOM asynchronously
    flush(function() {
      listItems = Polymer.dom(list.root).querySelectorAll('li');
      assert.equal(list.items.length, listItems.length);
      done();
    });
});)};
```

---
### Test with native shadow DOM
Test how test suite behaves in native shadow DOM
* pass dom=shadow as query string 
```
WCT.loadSuites([
  'basic-test.html',
  'basic-test.html?dom=shadow'
]);
```

---
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Demo testing

<!-- .slide: data-background="url('images/lab2.jpg')" --> 
<!-- .slide: class="lab" -->
## Lab time!
Test your Elements



