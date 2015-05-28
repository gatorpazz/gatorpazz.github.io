# HTML

I'll start off this document with <!DOCTYPE html>. HTML is made up of only tags except this thing which is stuck at the very beginning. All this basically does is tell the browser what form of html you're using (which should be 5 or else you're doing it wrong...). Earlier Versions of HTML had a bunch of other crap about DTD which referred to the markup language used which was based on SGML and yada yada yada people just copy pasted that crap each time. The <! part of the thing was based on SGML and referred to a declaration. In HTML5 it serves no real purpose except at the beginning to tell us that we're using HTML5 and later in HTML comments.  

## Tags

HTML tags are the the basic skeleton of web pages and define elements on a blank page.  

### Basic Structure

To begin, every single HTML tag is made up of angle brackets or <>, and without exception every single HTML tag will start with a < and end with a >. The structure of this varies but this basically tells the browser where an element starts and where an element ends.  

Tags can either be block or inline, each with their own basic syntax. Block-level elements and inline elements both start with a < and a word describing the kind of tag it's going to be, whether that be a paragraph, a header, image, whatever.

So we have <WORD for our structure so far. After that word we can declare a number of attributes about that element if we so wish. This can range from classes, to IDs, to data attributes. To continue the syntax we have <WORD ATTRIBUTE="something" and something can generally be anything of our choosing. If we want to define multiple attributes, we only have to space them out: <WORD ATTRIBUTE="something" OTHERATTRIBUTE="something else". So far this applies to all tags. Once our attributes, if any, are declared, we can close the tag with a >. If it's a tag that doesn't need a closing tag then we close it with a />. Forward slashes / are used to basically close tags whether with a /> or with a closing tag of its own such as </WORD>.

#### Types of Tags  

##### List Tags  

* `<ul>`: these are tags that make unordered lists using `li` elements in html documents. They have an opening and a closing tag. They automatically display bullets in the document unless nested deeper or specified.  
  * Attributes:
    * No unique ones besides the typical class and id ones, unique ones have been depecrated  
* `<ol>`: these are tags that make unordered lists using `li` elements in html documents. They have an opening and a closing tag. They automatically display numbers unless nested deeper or specified.
  * Attributes:
    * reversed: specifies that the items in the list will be in reverse order
    * start: specifies the start of the order, list can be ordered in with multiple styles but start always takes a number value.
    * type: specifies the type of character to be used in the ol, such as roman numerals.
* `<dl>`: a description list element encloses a list of pairs of terms and definitions. Commonly used for glossaries and key value pairs. `<dt>` is used for the terms and `<dd>` for the descriptions.
