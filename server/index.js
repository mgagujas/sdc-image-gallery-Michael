const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 1337;
const model = require('../db/index');

app.use(express.static('./client/dist'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get(`/rooms/:id/photos`, (req, res) => {
  var id = req.params.id;
  model.getPhotosById(id, (response) => {
    res.end(JSON.stringify(response));
  })
})

app.listen(PORT, () => {
    console.log(`server listening on port, ${PORT}`);
})