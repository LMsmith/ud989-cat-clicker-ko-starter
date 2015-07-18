var initialCats = [
  {
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
    nicknames: ['Tabtab', 'T-Bone', 'Tabitha', 'Mr. T']
  },

  {
    clickCount: 0,
    name: 'Tiger',
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/xshamx/4154543904',
    nicknames: ['Tigger']
  },

  {
    clickCount: 0,
    name: 'Scaredy',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/kpjas/22252709',
    nicknames: ['Aaaah']
  },

  {
    clickCount: 0,
    name: 'Shadow',
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/malfet/1413379559',
    nicknames: ['Shady']
  },

  {
    clickCount: 0,
    name: 'Sleepy',
    imgSrc: 'img/9648464288_2516b35537_z.jpg',
    imgAttribution: 'https://www.flickr.com/photos/onesharp/9648464288',
    nicknames: ['Zzzz']
  }
]

var Cat = function(data){
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.level = ko.computed(function(){
    var title;
    var clicks = this.clickCount();
    if(clicks < 3) {
      title = 'Newborn';
    }
    else if (clicks < 6) {
      title = 'Infant'
    }
    else if (clicks < 10) {
      title = 'Child'
    }
    else if (clicks < 20) {
      title = 'Teen'
    }
    else {
      title = 'Adult'
    }
    return title;
  }, this);
  this.nicknames = ko.observableArray(data.nicknames);
}

// put cats in a list
// make currentCat change when you click cats on the list

var ViewModel = function(){
  var self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem){
    self.catList.push(new Cat(catItem));
  });

  this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function(){
      this.clickCount(this.clickCount() + 1);
    };

  this.setCat = function(clickedCat) {
    self.currentCat(clickedCat);
  }
}

ko.applyBindings(new ViewModel());
