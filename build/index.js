"use strict";

var _require = require('./components/app'),
    App = _require.App;

document.addEventListener("DOMContentLoaded", function () {
  ReactDom.render(React.createElement(App, null), document.getElementById('app'));
});