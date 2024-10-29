'use strict';

const fs = require("fs")


const accessLogStream = fs.createWriteStream(
    ("./log/access.log"),
    { flags: 'a' }
);

module.exports = accessLogStream;