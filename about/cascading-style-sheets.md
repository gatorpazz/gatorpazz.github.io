#Reading CSS

##Properties

###Display

####Block-level elements

Block-level elements stretch from left to right as far as they can

1. div: standard block-level element
2. p
3. form
4. header
5. footer
6. section

width: setting the width of a block-level element prevents it from stretching to the edges of its containers
  * max-width: using max-width instead of width improves the browser's handling of small windows, important for making sites usable on mobile, supported by all browsers
margin: setting the margin to auto will horizontally center the element in its container

####Inline

Wraps text within a paragraph without disrupting paragraph flow

1. span: standard inline-level element
2. a: most common inline-level element, used for links

####None

Displays nothing, renders the page as though the element doesn't exist, used by javascript

1. script: defaults to none

####Position

position has a bunch of possible values:

1. static: default value, said to be not positioned, isn't positioned in any special way
  * If you set an element to anything besides static, it's said to be positioned
2. relative: acts the same as static unless additional properties are specified
  * top, right, bottom, left properties will adjust an element away from its normal position, other content won't fill gap left by element
3. fixed: element positioned relative to the viewport, in layman's terms it stays in the same place even if the viewer scrolls
  * top, right, bottom, left also used with fixed
  * fixed element doesn't leave a gap where it would have normally been
  * Mobile browsers have shaky support for fixed
4. absolute: behaves like fixed except it's fixed relative to the nearest positioned ancestor instead of the viewport
  * If no positioned ancestors then it's the same as port and is fixed to the viewport

####Float

float: is intended for wrapping text around images

clear: controls the behavior of floats
  * can move elements down past floating elements that come prior
    * left, right, both, determines the postion of the elements to be cleared
  * clearfix hack: used to fix elements where the image is too big and overflowing out of the element
    * supported by most modern browsers
````
.clearfix {
  overflow: auto;
  zoom: 1;  //use for IE6
}
````

##The Box Model

box-sizing: used to simplify sizing elements
  * Setting box-sizing: border-box; on an element prevents the padding and border of that element from increasing its width
  * box-sizing is new, should use -webkit- and -moz- to enable experimental features in specific browsers
  
