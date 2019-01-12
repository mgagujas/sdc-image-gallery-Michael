const faker = require('faker');
const fs = require('fs');

const wstream = fs.createWriteStream('./photos.csv', {flags: 'w'});

const createHom = function(i) {
	for(; i < 100000; i++) {

		let dataEntry = `${i},\"[`
		let randomPhotoAmount = Math.floor(Math.random()*29)+5;
		for(var j = 0; j < randomPhotoAmount; j++) {
			dataEntry += `{photo_id: ${j+1}, url: \'https://s3-us-west-1.amazonaws.com/fec-errbnb/treehouse/treehouse${Math.floor(Math.random()*34)}.jpg\', caption: \'${faker.lorem.sentence()}\'},`
		}
    dataEntry = dataEntry.slice(0, dataEntry.length - 1);
    dataEntry += ']\"\n'
	  if(!wstream.write(dataEntry)) {
	  	wstream.once('drain', () => createPhoto(i + 1));
	  	return
	  }
	}
	wstream.end()

}

createPhoto(1);
