const { App } = require('./components/app');

document.addEventListener("DOMContentLoaded", () => {
    ReactDom.render(<App />, document.getElementById('app'));
})