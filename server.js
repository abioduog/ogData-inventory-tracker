const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const Inventory = require('./models/inventory.model');
const port = process.env.PORT || 5001;

const app = express();

// Use body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.set('strictQuery', false);

// Connect to MongoDB database
mongoose.connect(process.env.DB_URL_LOCAL, { useNewUrlParser: true, useUnifiedTopology: true });

// Set up a simple route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// add new issue
app.post('/new-entry', (req, res) => {
    const newInventory = new Inventory({
        'mtn-direct': req.body.mtnDirect,
        'sme-plug-tobi': req.body.smePlugTobi,
        'sme-plug-abiodun': req.body.smePlugAbiodun,
        'glo-direct': req.body.gloDirect,
        'coralpay': req.body.coralPay,
        'fashola': req.body.fashola
      });
      
      newInventory.save((error) => {
        if (error) {
          res.send('error')
          console.log(error);
        } else {
          res.send(newInventory)
          console.log('Inventory updated successfully');
        }
      });
});

// get issue

// get all issues

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
