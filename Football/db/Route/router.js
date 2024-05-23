const express = require('express');
const route = express.Router();

const {submitControl} = require('../Controller/subControl')
route.post('/submit',submitControl);

module.exports = route;