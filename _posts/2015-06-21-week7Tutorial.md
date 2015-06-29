---
title: How to be sassy
date: 2015-06-21
categories: tutorial
---

Sass is a preprocessor for CSS that takes a simple semantic code and turns it into CSS via magic.  

You can use variables:  

```
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

You can nest selectors:

```
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

It's cool.
