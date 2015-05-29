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

##### Form Elements

HTML has a lot of useful form elements used to receive input from the user.  

* `<form>`; the form element is the foundation for all html forms. It contains everything needed for a form.
* `<fieldset>`: the fieldset element is used to group together controls and labels of the form.
  * Attributes:
    * disabled: disables the form controls that are its descendants.   
    * form: This attribute has the value of the id attribute of the `<form>` element its related to. Its default value is the id of the nearest `<form>` element it is a descendant of.
    * name: The name associated with the group, which is submitted with the form data.
* `<legend>`: represents a caption for the content of its parent `<fieldset>`.
![alt text](http://www.allthingsdiscussed.com/images/Legend_HTML_form.png)
* `<input>`: input tags represent elements that the user can actually interact with. How an input works is associated with its type attribute.
  * Types of input
    * button: A push button with no default behavior.
    * checkbox: A check box. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected. You can also use the indeterminate attribute to indicate that the checkbox is in an indeterminate state (on most platforms, this draws a horizontal line across the checkbox).
    * color: HTML5 A control for specifying a color. A color picker's UI has no required features other than accepting simple colors as text (more info).
    * date: HTML5 A control for entering a date (year, month, and day, with no time).
    * datetime: HTML5 A control for entering a date and time (hour, minute, second, and fraction of a second) based on UTC time zone.
    * datetime-local: HTML5 A control for entering a date and time, with no time zone.
    * email: HTML5 A field for editing an e-mail address. The input value is validated to contain either the empty string or a single valid e-mail address before submitting. The :valid and :invalid CSS pseudo-classes are applied as appropriate.
    * file: A control that lets the user select a file. Use the accept attribute to define the types of files that the control can select.
    * hidden: A control that is not displayed, but whose value is submitted to the server.
    * image: A graphical submit button. You must use the src attribute to define the source of the image and the alt attribute to define alternative text. You can use the height and width attributes to define the size of the image in pixels.
    * month: HTML5 A control for entering a month and year, with no time zone.
    * number: HTML5 A control for entering a floating point number.
    * password: A single-line text field whose value is obscured. Use the maxlength attribute to specify the maximum length of the value that can be entered.
    * radio: A radio button. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected by default. Radio buttons that have the same value for the name attribute are in the same "radio button group"; only one radio button in a group can be selected at one time.
    * range: HTML5 A control for entering a number whose exact value is not important. This type control uses the following default values if the corresponding attributes are not specified:
      * min: 0
      * max: 100
      * value: min + (max-min)/2, or min if max is less than min
      * step: 1
    * reset: A button that resets the contents of the form to default values.
    * search: HTML5 A single-line text field for entering search strings; line-breaks are automatically removed from the input value.
    * submit: A button that submits the form.
    * tel: HTML5 A control for entering a telephone number; line-breaks are automatically removed from the input value, but no other syntax is enforced. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate.
    * text: A single-line text field; line-breaks are automatically removed from the input value.
    * time: HTML5 A control for entering a time value with no time zone.
    * url: HTML5 A field for editing a URL. The input value is validated to contain either the empty string or a valid absolute URL before submitting. Line-breaks and leading or trailing whitespace are automatically removed from the input value. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate.
    * week: HTML5 A control for entering a date consisting of a week-year number and a week number with no time zone.

[Link to HTML5 form types](http://cdn.sixrevisions.com/demos/0345-new_html5_form_input_types/new-html5-form-input-types.html)

* `<label>`: A label tag surrounds an input tag to provide context for that input field.
Examples:  
```html
<label>Click me <input type="text" name="username"></label>
```
Picture:  
![alt text](http://www.allthingsdiscussed.com/images/Label_HTML_form.png)

* `<button>`: represents a clickable button.
Example:  
```html
<button name="button">Click me</button>
```

* `<select>`: represents a control that presents a menu of options. The options within the menu are represented by `<option>` elements, which can be grouped by `<optgroup>` elements. Options can be pre-selected for the user.
Example:  
```html
<!-- The second value will be selected initially -->
<select name="select">
  <option value="value1">Value 1</option> 
  <option value="value2" selected>Value 2</option>
  <option value="value3">Value 3</option>
</select>
```
Picture Example:  
![alt text](http://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2009/02/html-select-optgroup.png)

* `<textarea>`: Used when the input needs a lot of crap typed by the user. We're talking multiple lines here.  
Example:
```html
<textarea name="textarea" rows="10" cols="50">Write something here</textarea>
```
Picture Example:
![alt text](http://www.developer.am/pic/struts/Struts-textarea-example1.jpg)

* `<datalist>`:contains a set of <option> elements that represent the values available for other controls.  
Example:
```html
<div>Choose a browser from this list:</div>
<input list="browsers" />
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Internet Explorer">
  <option value="Opera">
  <option value="Safari">
</datalist>
```
Picture Example:  
![alt text](http://minimul.com/images/html5-datalist-click.png)

##### Table Elements

* `<table>`: this is the foundation for making a table with HTML, It is filled with `<tr>` tags to make rows. It uses all of the global attributes but any unique attributes have been deprecated.
  * `<caption>`: this is the element that specifies the title of a table. It is always the first descendant of a `<table>`  
  * `<colgroup>`: defines a group of columns within HTML.  
    * `<col>`: defines a column within HTML, sits in a `<colgroup>`.
  * `<thead>`: defines a set of rows defining the head of the columns of the table.
    * `<th>`: defines header cells in the `<thead>` element
  * `<tbody>`: the main body of a table and has a bunch of `<tr>` elements that will make up the rows of the table.
  * `<tfoot>`: makes the footer of the table, summarizes the columns.
  * `<tr>`: defines a row of cells in html.
  * `<td>`: defines an individual cell of data in a table.
