var initialCats = [
        {
            clickCount: 0,
            title: 'Frank',
            imageSource: 'image/frank.jpg',
            imageAttribution: 'udacity Cat Clicker Exercises',
            catNickNames: ['Maico', 'Buddy', 'Little Boy', 'Russell']
        },
        {
            clickCount: 0,
            title: 'Tony',
            imageSource: 'image/tony.jpg',
            imageAttribution: 'udacity Cat Clicker Exercises',
            catNickNames: ['Anthony', 'Rulon']
        },
        {
            clickCount: 0,
            title: 'Cutey',
            imageSource: 'image/cat-636172__180.jpg',
            imageAttribution: 'https://pixabay.com',
            catNickNames: ['Snooty Patooty', 'Wannabee']
        },
        {
            clickCount: 0,
            title: 'Tiger',
            imageSource: 'image/leopard-694460__180.jpg',
            imageAttribution: 'https://pixabay.com',
            catNickNames: ['Tigger', 'Bouncy Pouncy']
        }
    ]

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.title = ko.observable(data.title);
    this.imageSource = ko.observable(data.imageSource);
    this.imageAttribution = ko.observable(data.imageAttribution);
    this.catLevel = ko.computed(function() {
        var retval = 'oldster';
        if (this.clickCount() < 5) {
            retval = 'infant';
        } else if (this.clickCount() < 10) {
            retval = 'youth'
        } else if (this.clickCount() < 20) {
            retval = 'teenager'
        } else if (this.clickCount() < 50) {
            retval = 'adult'
        } else if (this.clickCount() < 75) {
            retval = 'senior'
        }
        return retval;
    }, this);

    this.catNickNames = ko.observableArray(data.catNickNames);
};

var ViewModel = function() {
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    }

    this.selectCurrentCat = function(clickedCat) {
        self.currentCat(clickedCat);
    }
}

ko.applyBindings(new ViewModel());


/*var model = {
	currentCat: null,
	cats: [
		{
			clickCount: 0,
			title: 'Frank',
			imageSource: 'image/frank.jpg',
			imageAttribution: 'udacity Cat Clicker Exercises'
		},
		{
			clickCount: 0,
			title: 'Tony',
			imageSource: 'image/tony.jpg',
			imageAttribution: 'udacity Cat Clicker Exercises'
		},
		{
			clickCount: 0,
			title: 'Cutey',
			imageSource: 'image/cat-636172__180.jpg',
			imageAttribution: 'https://pixabay.com'
		},
		{
			clickCount: 0,
			title: 'Tiger',
			imageSource: 'image/leopard-694460__180.jpg',
			imageAttribution: 'https://pixabay.com'
		}
	]
};

var octopus = {
	init: function() {
		model.currentCat = model.cats[0];
		catListView.init();
		catView.init();
	},

	getCurrentCat: function() {
		return model.currentCat;
	},

	getCats: function() {
		return model.cats;
	},

	setCurrentCat: function (cat) {
		model.currentCat = cat;
		console.log(model.currentCat.title);
	},

	incrementCounter: function() {
		model.currentCat.clickCount++;
		catView.render();
	}
};

var catView = {
	init: function() {
		this.catElem = document.getElementById('cat');
		this.catNameElem = document.getElementById('cat-title');
		this.catImageElem = document.getElementById('cat-image');
		this.countElem = document.getElementById('cat-clicked');

		//set up on click to count number of clicks for this cat
		this.catImageElem.addEventListener('click', function(e){
			octopus.incrementCounter();
		});

		this.render()
	},

	render: function() {
		console.log('catView render')
		var currentCat = octopus.getCurrentCat();
		this.countElem.textContent = currentCat.clickCount;
		this.catNameElem.textContent = currentCat.title;
		this.catImageElem.src = currentCat.imageSource;
	}
};

var catListView = {
	init: function() {
		this.catListElem = document.getElementById('cat-list');
		this.render();
	},

	render: function() {
		var cats = octopus.getCats();
		this.catListElem.innerHTML = '';

		for (var i = 0; i < cats.length; i++) {
			var cat = cats[i];

			var elem = document.createElement('li');
			elem.textContent = cat.title;

			elem.addEventListener('click', (function(cat) {
				return function() {
					console.log('li click ' + cat.title);
					octopus.setCurrentCat(cat);
					catView.render();
				};
			})(cat));

			this.catListElem.appendChild(elem);
		}
	}
};

octopus.init();






var catTitle1="Frank";
var catTitle2="Jinx";
var timesCatImageClicked = 0;
$('.cat-image').click(function(e) {
    timesCatImageClicked = timesCatImageClicked + 1
    $('.cat-clicked').text('Number of times Cat Image Clicked: ' + timesCatImageClicked);
})

$(document).ready(function() {
    $('.cat-title1').text(catTitle1);
    $('.cat-title2').text(catTitle2);
});
*/