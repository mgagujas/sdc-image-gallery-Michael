require('newrelic')
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 1337;
// const model = require('../db/index');
const model = require('../db/postgres/postgres.js');
// const model = require('../db/cassandra/cassandra.js');

app.use('/rooms/:id', express.static('./client/dist'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// for mongoose
// app.get('/rooms/:id/photos', (req, res) => {
//   var id = req.params.id;
//   model.getPhotosById(id, (err, response) => {
//     if (err) {
//       res.status(501).send();
//     } else {
//       res.end(JSON.stringify(response));
//     }
//   });
// });

// for cassandra
// app.get('/rooms/:id/photos', (req, res) => {
//   var id = req.params.id;
//   model.getPhotos()

//     .then(photos => {
//     	res.end(JSON.stringify(photos))
//     })
//     .catch(err => {if(err) throw err; });
// });

// for postgres
app.get('/rooms/:id/photos', (req, res) => {
  var id = req.params.id;
  var start = Date.now()
  model.getPhotos(id)
    .then(photos => {

    	console.log('TIME', Date.now() - start)
    	res.end(JSON.stringify(photos))
    })
    .catch(err => {if(err) throw err; });
});


app.listen(PORT, () => {
  console.log(`server listening on port, ${PORT}`);
});