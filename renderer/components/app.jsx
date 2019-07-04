const { Person } = require('./person');
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>hello electron+react+webpack world!</h1>
                <Person food="sushi" />
            </div>
        );
    }
}

module.exports = {
    App: App,
};