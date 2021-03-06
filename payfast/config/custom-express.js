var express = require('express');
var consign = require('consign');

module.express = function () {
    var app = express();
    
    consign().include('controllers').into(app);

    return app;
}
