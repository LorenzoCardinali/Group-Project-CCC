'use strict';

const express = require('express');
const app = express();
app.use(express.static('.'));
app.listen(3000);
console.log('The web server started on http://localhost:3000');