// preload.js
const _setImmediate = setImmediate
const _clearImmediate = clearImmediate
const React = require("react");
const ReactDom = require("react-dom");

process.once('loaded', () => {
    global.setImmediate = _setImmediate;
    global.clearImmediate = _clearImmediate;
    global.React = React;
    global.ReactDom = ReactDom;
    global.electronconnect = require('electron-connect');
})

console.log("preload.js was loaded.");
