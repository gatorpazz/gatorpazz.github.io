(function(window) {
    var $rightNavLink = $('#rightNavBar a');
    var $blogs = $('.blog');

    $rightNavLink.click(function() {
        var $bridge = $($(this).attr('href'));
        $blogs.addClass('hidden');
        $bridge.removeClass('hidden');
    });

    $('#topNavBar select').change(function() {
        var $bridge = $($(this).val());
        if ($(this).val() == 'navigation') {
            return;
        } else {
            $blogs.addClass('hidden');
            $bridge.removeClass('hidden');
        }
    })
})(window);
