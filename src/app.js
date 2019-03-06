const config = require("./config.js");
const utils = require('util');
const components_url = config.components;



require("../src/components/accordion.css");
require("../src/components/accordion.js");

require("../src/components/input.css");
require("../src/components/loader.css");

require("../src/components/form");

console.log(utils.format(components_url + "accordion.css"));


$('.ui.accordion')
  .accordion()
;