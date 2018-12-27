const mongoose = require('mongoose');
const db = require('../index.js');
let count = 0;

const listingGenerator = function() {

    // bali
    let photoArr = [];
    for (let i = 1; i < 28; i++) {
      photoArr.push({url: `https://s3-us-west-1.amazonaws.com/fec-errbnb/bali/bali${i}.jpg`, caption:'lorem ipsum'});
      let arr = photoArr.map(el => el);
    }
    let listing = new db.Listing ({_id: count, photo: arr});
    listing.save();
    count++;
    //art
    photoArr = [];
    for (let i = 0; i < 16; i++) {
      photoArr.push({url: `https://s3-us-west-1.amazonaws.com/fec-errbnb/art/art${i}.jpg`, caption:'lorem ipsum'});
      let arr = photoArr.map(el => el);
    }
    let listing = new db.Listing ({_id: count, photo: arr});
    listing.save();
    count++;
    //art
    photoArr = [];
    for (let i = 16; i < 33; i++) {
      photoArr.push({url: `https://s3-us-west-1.amazonaws.com/fec-errbnb/art/art${i}.jpg`, caption:'lorem ipsum'});
      let arr = photoArr.map(el => el);
    }
    let listing = new db.Listing ({_id: count, photo: arr});
    listing.save();
    count++;
    //artist
    photoArr = [];
    for (let i = 0; i < 19; i++) {
      photoArr.push({url: `https://s3-us-west-1.amazonaws.com/fec-errbnb/artist/artist${i}.jpg`, caption:'lorem ipsum'});
      let arr = photoArr.map(el => el);
    }
    let listing = new db.Listing ({_id: count, photo: arr});
    listing.save();
    count++;
    //cabana
    photoArr = [];
    for (let i = 0; i < 11; i++) {
      photoArr.push({url: `https://s3-us-west-1.amazonaws.com/fec-errbnb/cabana/cabana${i}.jpg`, caption:'lorem ipsum'});
      let arr = photoArr.map(el => el);
    }
    let listing = new db.Listing ({_id: count, photo: arr});
    listing.save();
    count++;
    //nautica
    photoArr = [];
    for (let i = 0; i < 16; i++) {
      photoArr.push({url: `https://s3-us-west-1.amazonaws.com/fec-errbnb/nautica/nautica${i}.jpg`, caption:'lorem ipsum'});
      let arr = photoArr.map(el => el);
    }
    let listing = new db.Listing ({_id: count, photo: arr});
    listing.save();
    count++;
    //outdoor
    photoArr = [];
    for (let i = 0; i < 19; i++) {
      photoArr.push({url: `https://s3-us-west-1.amazonaws.com/fec-errbnb/outdoor/outdoor${i}.jpg`, caption:'lorem ipsum'});
      let arr = photoArr.map(el => el);
    }
    let listing = new db.Listing ({_id: count, photo: arr});
    listing.save();
    count++;
    //sunny
    photoArr = [];
    for (let i = 0; i < 24; i++) {
      photoArr.push({url: `https://s3-us-west-1.amazonaws.com/fec-errbnb/sunny/sunny${i}.jpg`, caption:'lorem ipsum'});
      let arr = photoArr.map(el => el);
    }
    let listing = new db.Listing ({_id: count, photo: arr});
    listing.save();
    count++;
    //terrace
    photoArr = [];
    for (let i = 0; i < 18; i++) {
      photoArr.push({url: `https://s3-us-west-1.amazonaws.com/fec-errbnb/terrace/terrace${i}.jpg`, caption:'lorem ipsum'});
      let arr = photoArr.map(el => el);
    }
    let listing = new db.Listing ({_id: count, photo: arr});
    listing.save();
    count++;
    //treehouse
    phtoArr = [];
    for (let i = 0; i < 35; i++) {
      photoArr.push({url:`https://s3-us-west-1.amazonaws.com/fec-errbnb/treehouse/treehouse${i}.jpg`,caption: 'lorem ipsum'});
      let arr = photoArr.map(el => el);
    }
    let listing = new db.Listing ({_id: count, photo: arr});
    listing.save();
    count++;
    //winter
    photoArr = [];
    for (let i = 0; i < 25; i++) {
      photoArr.push({url:`https://s3-us-west-1.amazonaws.com/fec-errbnb/winter/winter${i}.jpg`, caption:'lorem ipsum'});
      let arr = photoArr.map(el => el);
    }
    let listing = new db.Listing ({_id: count, photo: arr});
    listing.save();
    count++;
}

const seedDB = function() {
  for (let i = 0; i < 10; i++) {
    listingGenerator();
  }
}