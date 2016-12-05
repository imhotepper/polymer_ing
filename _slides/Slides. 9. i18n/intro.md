# Internationalisation (i18n)

---
### Agenda
* Intl object
* Format.js
* Hybrid Storage
* Polymer.AppLocalizeBehavior

---
### Intl object Core Features

The Intl namespace covers three main areas of functionality
* Formatting numbers
* Formatting dates
* Sorting strings

> The Intl object is the namespace for the ECMAScript Internationalization API, 
> which provides language sensitive string comparison, number formatting, and 
> date and time formatting.

---
### Intl properties

* Intl.Collator
Constructor for collators, objects that enable language sensitive string comparison.
* Intl.DateTimeFormat
Constructor for objects that enable language sensitive date and time formatting.
* Intl.NumberFormat
Constructor for objects that enable language sensitive number formatting.

---
### Intl methods

* Intl.getCanonicalLocales()
A method returning the canonical locale names.

---
### Example Intl JavaScript

```
function numberFormat(n) {
    //cache the formatter once
    if(window.Intl && !window.numberFormatter) window.numberFormatter = window.Intl.NumberFormat();

    if(window.numberFormatter) {
        return window.numberFormatter.format(n);
    } else {
        return n;   
    }
}
```

---
### Example Intl JavaScript with language

```
function numberFormat(n) {
    if(window.Intl) {
        var lang = $("#langDropdown").val();
        if(lang === "") lang = navigator.language;
        var formatter = new window.Intl.NumberFormat(lang);
        return formatter.format(n);
    } else {
        return n;   
    }
}
```

### Example Intl Date formatting
```
function dateFormat(n) {
    //Used for date display
    var opts = {};
    opts.day = "numeric";
    opts.weekday = "long";
    opts.year = "numeric";
    opts.month = "long";
 
    if(window.Intl) {
        var lang = $("#langDropdown").val();
        if(lang === "") lang = navigator.language;
        var formatter = new window.Intl.DateTimeFormat(lang, opts);
        n = new Date(n);
        return formatter.format(n);
    } else {
        return n;   
    }
}
```

---
### Collators
Collators allow you to handle text sorting. 
While some languages follow a simple A to Z ordering system other languages have different rules. 
Things get even more interesting when you start adding accents. 
Can you say, for certain
* if ä comes after a? 

---
### Collators example
```
function sorter(x,y) {
    if(window.Intl) {
        var lang = $("#langDropdown").val();
        if(lang === "") lang = navigator.language;      
        return window.Intl.Collator(lang).compare(x,y);
    } else {
        return x.localeCompare(y);  
    }
}
```

---
### FormatJS

A library that wraps Intl API
* localization resources json definition
* comprehensive message syntax

Steps
1. determine language
2. define and load resources
3. parse strings to localize 
    * using message syntax

---
### 1. determine language
* let the user set a language
* determine the language automatically
    * using the server-header
    * using navigator.language || navigator.browserLanguage

---
### 2. define and load resources

include a JSON file, example:
```
{
  "en": {
    "hello": "Translation and localization {name}"
  },
  "fr": {
    "hello": "Traduction et localisation {name}"
  }
}
```

---
### 3. parse strings

Use message syntax to parse strings
* literal strings "hello world"
* argumented strings "hello {name}"
* formatted argument strings 
    * "I have {numCats, number} cats"
    * "Almost {pctBlack, number, percent} of them are black"
    * "Sale begins {start, date, medium}"

---
### Parse Strings: custom formatters

You can define custom formatters
```
formats = {
    number: {
        usd: { style: 'currency', currency: 'USD' }
    }
};
Your total is {total, number, usd}
```
---
### Parse Strings: switches

```
{gender, select,
    male {He}
    female {She}
    other {They}
} will respond shortly.
```
---
### Parse Strings: nested arguments
```
{taxableArea, select,
    yes {An additional {taxRate, number, percent} tax will be collected.}
    other {No taxes apply.}
}
```

---
### Parse Strings: pluralisation
```
You have {itemCount, plural,
    =0 {no items}
    one {# item}
    few {couple items}
    other {# items}
}
```

---
### Parse Strings: ordinal selection
```
It's my cat's {year, selectordinal,
    one {#st}
    two {#nd}
    few {#rd}
    other {#th}
} birthday!
```

---
### Polymer AppLocalizeBehavior

* Wraps the Formatjs library
* Implements Localize function
* Takes care of resource loading
    * local resources
    * remote resources

---
### Use Polymer AppLocalizeBehavior

* Include the html page for the element
```
```
* Implement the behavior
* Use Localize function to localize strings

---
### Example localization
```
Polymer({
    is:"my-app",
    behaviors:[Polymer.AppLocalizeBehavior],
    properties: {
        language: {
        value: 'fr'
        },
        resources: {
        value: function() {
            return {
                'en': { 'hello': 'My name is {name}.' },
                'fr': { 'hello': 'Je m\'apelle {name}.' }
}}}});
```

---
### Example localization
```
<template>
    <div>{{localize('hello', 'name', 'Batman')}}</div>
</template>
```


--- 
<!-- .slide: data-background="url('images/demo.jpg')" --> 
<!-- .slide: class="lab" -->
## Demo time!
Demo 1. Localization

---
<!-- .slide: data-background="url('images/lab2.jpg')" --> 
<!-- .slide: class="lab" -->
## Lab time!
Localization
