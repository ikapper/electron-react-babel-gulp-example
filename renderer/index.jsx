class App extends React.Component {
    render() {
        return (
            <h1>hello electron+react world!</h1>
        );
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDom.render(<App />, document.getElementById('app'));
})