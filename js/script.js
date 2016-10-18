var model = {
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
