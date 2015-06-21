(function(window) {
    var $rightNavLink = $('#rightNavBar a');
    var $blogs = $('.blog');
    var $home = $('#home');
    var $homepage = $('#homepage');

    $rightNavLink.click(function() {
        var $bridge = $($(this).attr('href'));
        $blogs.addClass('hidden');
        $homepage.addClass('hidden');
        $bridge.removeClass('hidden');
    });

    $home.click(function() {
      $blogs.addClass('hidden');
      $homepage.removeClass('hidden');
    })

})(window);
