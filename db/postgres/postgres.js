// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'power_user',
//   host: '54.193.82.245',
//   database: 'img_carousel',
//   password: '$poweruserpassword',
// });

// pool.on('error', (err, client) => {
//   console.error('Unexpected error on idle client', err);
//   process.exit(-1);
// });


// const getPhotos = (houseId) => {
//   return new Promise((resolve, reject) => {
//     pool.connect((err, client, release) => {
//       if (err) { reject(err); }
//       const query = `SELECT * FROM photos WHERE house_id = ${houseId};`;
//       client.query(query, (err, result) => {
//         release();
//         if (err) { reject(err); }
//         resolve(result.rows);
//       });
//     });
//   });
// };
// const submitPhoto = (newPhoto) => {
//   return new Promise((resolve, reject) => {
//     pool.connect((err, client, release) => {
//       if (err) { reject(err); }
//       const query = 
//         `INSERT INTO photos (house_id, photo_id, caption, size, time_created, title, url, views)
//         VALUES (DEFAULT, DEFAULT, \'${newPhoto.caption}\', \'${newPhoto.size}\', \'${newPhoto.time_created}\', \'${newPhoto.title}\', \'${newPhoto.url}\', \'${newPhoto.views}\');`;
//       client.query(query, (err, result) => {
//         release();
//         if (err) { reject(err); }
//         resolve(result);
//       })
//     });
//   });
// };
// const updatePhoto = (update, id) => {
//   return new Promise((resolve, reject) => {
//       pool.connect((err, client, release) => {
//         if (err) { reject(err); }
//         const query = 
//           `UPDATE photos 
//           SET definition= \'${update.definition}\',
//           word= \'${update.word}\',
//           pos= \'${update.pos}\'
//           WHERE word_id = ${id};`;
//         client.query(query, (err, result) => {
//           release();
//           if (err) { reject(err); }
//           resolve();
//         })
//       });
//     });
// }
// const deletePhoto = (id) => {
//   return new Promise((resolve, reject) => {
//       pool.connect((err, client, release) => {
//         if (err) { reject(err); }
//         const query = 
//           `DELETE FROM photos
//           WHERE word_id = ${id};`;
//         client.query(query, (err, result) => {
//           release();
//           if (err) { reject(err); }
//           resolve();
//         })
//       });
//     });  
// }

// module.exports = {
//   getPhotos,
//   submitPhoto,
//   updatePhoto,
//   deletePhoto
// }

const { Pool } = require('pg');
const getPhotos = (houseId) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM photos WHERE house_id = ${houseId};`;
    client.query(query, (err, result) => {
      if (err) { reject(err); }
      resolve(result.rows);
    });
  });
};
const client = new Pool({
  user: 'power_user',
  host: '54.183.14.101',
  database: 'img_carousel',
  password: '$poweruserpassword',
});

client.connect((err) => {
  if (err) {
    console.error(err.stack);
  } else {
    console.log('connected');
  }
})

module.exports = {
  getPhotos,
  client
}
