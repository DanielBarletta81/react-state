
// Task 1: Code Correction
// Incorrect code sample

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex' };
    }

    // Incorrect function
    changeName() {
        this.state.name = 'Charlie';
    }

    render() {
        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

// Corrected code sample for Task 1

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Alex' };
        this.changeName = this.changeName.bind(this);
    }

    // corrected function
    changeName() {
        this.setState({ name: 'Charlie' });
    }

    render() {
        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}
