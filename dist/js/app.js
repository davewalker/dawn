(function ($, window, document, undefined) {
    var utilities = {
        $element: $('body'),
        init: function () {
            // enable FastClick plugin
            // http://ftlabs.github.io/fastclick/
            FastClick.attach(document.body);
            // enable enquire.js plugin
            // http://wicky.nillia.ms/enquire.js/#quick-start
            // place the below code in each component - this is just an example
            enquire.register('screen and (max-width: 1000px)', {
                match: function () {
                },
                unmatch: function () {
                }
            });
        }
    };
    if (utilities.$element.length) {
        utilities.init();
    }
    var Navigation = {
        $dropdown: $('.navigation__dropdown'),
        $trigger: $('.header__burger'),
        init: function () {
            var self = this;
            self.$trigger.on('click', function (e) {
                self.$dropdown.slideToggle(400);
            });
        }
    };
    if (Navigation.$trigger) {
        Navigation.init();
    }
    var Project = {
        $element: $('.project'),
        $tooltip: $('.project__tooltip'),
        $tooltip_reveal: $('.project__detail'),
        init: function () {
            var self = this;
            self.$tooltip.on('click', function (e) {
                e.preventDefault();
                $(this).parents('.project').find('.project__detail').slideToggle();
            });
        }
    };
    if (Project.$element) {
        Project.init();
    }
}(jQuery, window, document));