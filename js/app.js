var viewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('https://ww.fickr.com');

	this.incrementCounter = function() {
		this.clickCount(this.clickCount() + 1);
	};

	this.powerLevel = ko.computed(function () {
		if (this.clickCount() < 50) {
			return "Newborn";
		}
		else if (this.clickCount() >= 50 && this.clickCount() < 100) {
			return "Toddler";
		}
		else if (this.clickCount() >= 100 && this.clickCount() < 150) {
			return "Child";
		}
		else if (this.clickCount() >= 150 && this.clickCount() < 200) {
			return "Teenager";
		}
		else {
			return "Adult";
		}
	},this)
}

ko.applyBindings(new viewModel());