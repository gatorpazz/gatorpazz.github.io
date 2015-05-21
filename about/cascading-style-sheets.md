# Reading CSS

## Properties

### Display

#### Block-level elements

Block-level elements stretch from left to right as far as they can

1. div: standard block-level element
2. p
3. form
4. header
5. footer
6. section

width: setting the width of a block-level element prevents it from stretching to the edges of its containers
  * max-width: using max-width instead of width improves the browser's handling of small windows, important for making sites usable on mobile, supported by all browsers
  * percent width: sets a unit relative to containing block
    * Examples: used with images to set image 50% the size of containing element, can be used with min-width and max-width to limit how big or small the image can get
margin: setting the margin to auto will horizontally center the element in its container

#### Inline

Wraps text within a paragraph without disrupting paragraph flow

1. span: standard inline-level element
2. a: most common inline-level element, used for links

#### Inline-block

inline-block: is used to create a grid of boxes that fills the browser width and wraps nicely
  * Use hasLayout to support on old browsers
  * Can be used for layouts
    * vertical-align property: will most likely want to set to top
    * Need to set the width of each column
    * There will be a gap between the columns if there is any whitespace between them in the HTML

#### None

Displays nothing, renders the page as though the element doesn't exist, used by javascript

1. script: defaults to none

### Position

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

#### Float

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

#### Column

Column is a new set of CSS properties that can be used to easily make multi-column text.
  * CSS columns are very new, so you need to use the prefixes, and it won't work through IE9 or in Opera Mini.
  * [Properties of Column](http://www.quirksmode.org/css/multicolumn.html)

## The Box Model

box-sizing: used to simplify sizing elements
  * Setting box-sizing: border-box; on an element prevents the padding and border of that element from increasing its width
  * box-sizing is new, should use -webkit- and -moz- to enable experimental features in specific browsers
  
## flexbox

The new flexbox layout mode is poised to redefine how we do layouts in CSS.

### font

The font property edits a lot of features in regards to how text looks.

* font-size: edits how big the text is in an element, takes many units such as px, em, in, pt, etc...
  * Examples: font-size: 4pt, font-size: 1in, font-size: 1 cm;
* font-family: uses predefined template of general text appearance, can have serifs or be without serifs.
  * Examples: font-family: "Times New Roman", font-family: "Arial"

### text

The text property edits more features in regards to how text looks, nothing to do with fonts.

* color: edits the color of the text, doesn't actually have the word text in it
  * Examples: color: red, color: blue
* text-align: edits where the text is aligned in the box of its element, right aligns the text to be flush right, left edits the text to be flush left (common), center will center the text, justify makes every line of text the same width (like in magazines).
  * Examples: text-align: right, text-align: justify, text-align: left
* text-transform: alters the capitalization of texts
  * Three Inputs
    * text-transform: uppercase, makes all of the text uppercase
    * text-transform: lowercase, makes all of the text lowercase
    * text-transform: capitalize, capitalizes the first letter of each word

*** line

* line-height: sets the space between lines in paragraphs


