const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  'mtn-direct': Object,
  'sme-plug-tobi': Object,
  'sme-plug-abiodun': Object,
  'glo-direct': Object,
  'coralpay': Object,
  'fashola': Object,
});

const Inventory = mongoose.model('Inventory', inventorySchema);

module.exports = Inventory;
