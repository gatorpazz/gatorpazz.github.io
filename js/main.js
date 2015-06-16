(function(window) {
    var $rightNavLink = $('#rightNavBar a');
    var $blogs = $('.blog');

    $rightNavLink.click(function() {
        var $bridge = $($(this).attr('href'));
        $blogs.addClass('hidden');
        $bridge.removeClass('hidden');
    });

})(window);
