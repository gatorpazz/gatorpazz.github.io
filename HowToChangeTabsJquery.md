### How To Change Tabs With jQuery

So thanks to the lovely people at Stack Overflow I learned how to efficiently change tabs in my FullWidthTabs homework. This code is also just a good way to link one set of HTML elements with another far off set in an easy manner.  

So let's start off with my original code that I used to click tabs and change content:  

```javascript
  $('a.tab1').click(function(){
    $('section').removeClass('content-current');
    $('#section-1').addClass('content-current');
    $('a').removeClass('tab-current');
    $('a.tab1').addClass('tab-current');
  });

  $('a.tab2').click(function(){
    $('section').removeClass('content-current');
    $('#section-2').addClass('content-current');
    $('a').removeClass('tab-current');
    $('a.tab2').addClass('tab-current');
  });

  $('a.tab3').click(function(){
    $('section').removeClass('content-current')
    $('#section-3').addClass('content-current')
    $('a').removeClass('tab-current');
    $('a.tab3').addClass('tab-current');
  });

  $('a.tab4').click(function(){
    $('section').removeClass('content-current')
    $('#section-4').addClass('content-current')
    $('a').removeClass('tab-current');
    $('a.tab4').addClass('tab-current');
  });

  $('a.tab5').click(function(){
    $('section').removeClass('content-current')
    $('#section-5').addClass('content-current')
    $('a').removeClass('tab-current');
    $('a.tab5').addClass('tab-current');
  });
```

Yeah that's horrendous, over 30 lines of code to individually add these event listeners that did what I want. Now let's take a look at the not idiotic way:  

```javascript
$tabs.on('click', function() { //with help from stackoverflow
    $('section').removeClass('content-current');
    $($(this).attr('href')).addClass('content-current');
    $('a').removeClass('tab-current');
    $(this).addClass('tab-current');
});
```
So bascially with this small tiny efficient section of jQuery we did what that big chunk did. To break it down more easily instead of individually adding event listeners to each of my tabs we took all of them and added the same event listener. Using $(this) makes sure that when we click we only reference that specific tab that we clicked. The only confusing part to me was the third line which I simplified. So if you take $($(this).attr('href')), look at the inner parentheses. It takes the href of the clicked tab which in this case was linked to each content section. The outer parentheses now reference that section and add and remove classes. So much better.  
