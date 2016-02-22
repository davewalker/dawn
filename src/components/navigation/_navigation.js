var Navigation = {
	$dropdown: $('.navigation__dropdown'),
	$trigger: $('.header__burger'),

	init: function() {
		var self = this;

		self.$trigger.on('click', function(e) {

			self.$dropdown.slideToggle(400);

		});



	}

};

if (Navigation.$trigger) {
	Navigation.init();
}
