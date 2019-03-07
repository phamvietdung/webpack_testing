const config = require("./config.js");
const utils = require('util');

// Who the hell need a 3.0.0 version with a GPL 3.0 license key.
const fullpage  = require("fullpage.js");


// Semantic UI loader
require("../src/components/accordion.css");
require("../src/components/accordion.js");

require("../src/components/input.css");
require("../src/components/loader.css");

require("../src/components/form");

require("../src/components/menu.css");


$(document).ready(function() {
  $('#fullpage').fullpage();
});