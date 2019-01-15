var faker = require('faker');
var fs = require('fs');

var start = new Date().getTime();

var wstream = fs.createWriteStream('./photos.csv', {flags: 'w'});
var wstreamHome = fs.createWriteStream('./homes.csv', {flags: 'w'});

var capitalizeTitle = function(title) {
	var newTitle = title.split(" ").map((word) => word[0].toUpperCase() + word.substr(1)).join(" ")
	return newTitle;
}

var randomDate = function(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

var createHome = function(j) {
	for(; j < 10000001; j++) {
    var name = faker.lorem.words(4);
	  if(!wstreamHome.write(`${j},${name}\n`)) {
	  	wstreamHome.once('drain', () => createHome(j + 1));
	  	return;
	  }
  }
  wstreamHome.end();
  var end = new Date().getTime();
  console.log('Homes write time: ', (end - start) / 1000, ' seconds');

}
var createPhoto = function(i) {
	for(; i < 50000001; i++) {
		var homeId = (i % 10000000);
		if(homeId === 0) {
			homeId = 10000000;
		}
    var title = capitalizeTitle(faker.lorem.words(4));
    var timeCreated = randomDate(new Date(2012, 0, 1), new Date()).toString().slice(4,21);
    var size = faker.random.number() + ' kBs';
    var views = faker.random.number();
    var url = `https://s3-us-west-1.amazonaws.com/fec-errbnb/treehouse/treehouse${Math.floor(Math.random()*34)}.jpg`;
    var caption = faker.lorem.sentence();
		var photoData = `${homeId},${i},${caption},${size},${timeCreated},${title},${url},${views}\n`;
	  if(!wstream.write(photoData)) {
	  	wstream.once('drain', () => createPhoto(i + 1));
	  	return
	  }
  }
  wstream.end();
  var end = new Date().getTime();
  console.log('Photos write time: ', (end - start) / 1000, ' seconds');

}
createHome(0);
createPhoto(0);