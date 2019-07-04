class Person extends React.Component {
    render() {
        return (
            <p>I want to eat {this.props.food}!</p>
        )
    }
}

module.exports = {
    Person: Person,
};