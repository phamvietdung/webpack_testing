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

// Modal

require("../src/components/modal.js");
require("../src/components/modal.css");

// Dimmer and Transition to meet the Modal requirement
require("../src/components/dimmer.js");
require("../src/components/dimmer.css");


require("../src/components/transition.js");
require("../src/components/transition.css");


$(document).ready(function() {
    $('#fullpage').fullpage();
    
    $('.btn-modal').on('click',function(){
        $('.ui.modal').modal('show'); 
    });
});