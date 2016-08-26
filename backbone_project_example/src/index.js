var $ = require('jquery');
var MainView = require('./MainView');


mainView = new MainView();
$('body').append(mainView.render().el);
