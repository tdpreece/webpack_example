# Webpack example


## Getting started
First, I pretty much followed Webpack's getting [started tutorial](http://webpack.github.io/docs/tutorials/getting-started/).

I created a new pm project and installed webpack
```bash
npm init
npm install --save-dev webpack
```

I then created two Javascript files to demonstrate how to use Javascript defined in another module.

```Javascript
// content.js
module.exports = "It works from content.js.";
```

```Javascript
// entry.js
document.write(require("./content.js"));
```

I then compiled this into a bundle file by running,
```bash
./node_modules/webpack/bin/webpack.js ./entry.js bundle.js
```

I tested the bundle.js file by referencing it in an html file and viewing this
file in my browser.

```html
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <script type="text/javascript" src="bundle.js" charset="utf-8"></script>
  </body>
</html>
```

Viewing index.html in a browser simple displays `It works from content.js.`.


Created aInclude Javascript files

Created index.html, content.js and entry.js

./node_modules/webpack/bin/webpack.js ./entry.js bundle.js


## Webpack with Backbone

npm install --save-dev backbone
npm install --save-dev jquery
npm install --save-dev underscore


Created an index.html file.
```html
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <script type="text/javascript" src="bundle.js" charset="utf-8"></script>
  </body>
</html>
```

Created an index.js file along with a simple backbone view,
```javascript
// index.js
var $ = require('jquery');
var MainView = require('./MainView');

mainView = new MainView();
$('body').append(mainView.render().el);
```

```javascript
// MainView.js
var Backbone = require('backbone');
var _ = require('underscore');

module.exports = Backbone.View.extend({

  tagName: "div",

  template: require('./MainView.html'),

  events: {
  },

  initialize: function() {
  },

  render: function() {
	this.$el.html(
        this.template({ 'msg': 'This is the Main View' }));
	return this;
  }

});
```

```html
// MainView.html
<h1>{{ msg }}</h1>
```

As I wanted to keep the template file in a separate file I needed to install a
loader

```bash
npm install --save-dev mustache-loader
```

and configure it's use in the webpack.config.js,

```javascript
// webpack.config.js
...
    module: {
        loaders: [{
            test: /\.html$/,
            loader: 'mustache',
        },],
    },
...
```

Built the bundle via the command,
```bash
./node_modules/webpack/bin/webpack.js ./index.js bundle.js
```

Then opened the `index.html` file in a browser.

## Move to separate dirs for src and dist,


```bash
npm run build
```


TODO:
- Move out into src dir and add the following to webpack conf
http://stackoverflow.com/questions/32155154/webpack-config-how-to-just-copy-the-index-html-to-the-dist-folder

- Add something like the following to webpack conf
    entry: './src/index.js',

    output: {
        path: './www/',
        filename: 'bundle.js',
    },
