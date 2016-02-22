var Project = {
    $element: $('.project'),
    $tooltip: $('.project__tooltip'),
    $tooltip_reveal: $('.project__detail'),

    init: function() {
        var self = this;

        self.$tooltip.on('click', function(e) {
            e.preventDefault();

            $(this).parents('.project').find('.project__detail').slideToggle();
        });
    }

};

if (Project.$element) {
    Project.init();
}
