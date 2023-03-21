import React, { Component } from 'react';
import {Hello} from './Hello';

class Login extends Component {

    constructor(props) {
        super(props);
        
        //default state values
        this.state = {username: '', password: '', loggedIn: false}
    }

    handleLogin = (e) => {
        e.preventDefault();
        console.log(this.state)

        //login successful/true if both values exist and match
        let isLoggedIn = (this.state.username && this.state.password && this.state.username === this.state.password)

        this.setState({loggedIn: isLoggedIn})
    }

    handleInputChange = (event) => {
        const target = event.target;
        console.log(target)
    
        this.setState({
            [target.name]: target.value
        });
    }    

    render() {

        //we can also save JSX into variables to simplify rendering
        //const message = this.state.loggedIn ? <Hello name={this.state.username}/> : 'Please log in';

        return (
            <div className="Login componentBox">
                <h2>Login</h2>

                {/* if we're logged in, use the Hello component to say hello */}
                <div>{this.state.loggedIn ? <Hello name={this.state.username}/> : 'Please log in'}</div>

                {!this.state.loggedIn &&

                    <form onSubmit={this.handleLogin}>
                        <div className="formRow">
                            <label htmlFor="username">Username: </label>
                            {/* every time the input changes, store the latest value into state */}
                            <input id="username" value={this.state.username} name="username" onChange={ this.handleInputChange }/>
                        </div>

                        {/* add another form field for email address */}

                        <div className="formRow">
                            <label htmlFor="password">Password: </label>
                            {/* every time the input changes, store the latest value into state */}
                            <input type="password" id="password" name="password" value={this.state.password} onChange={ this.handleInputChange } />
                        </div>
                        <br></br>
                        <button>Login</button>
                    </form>
                }
                
            </div>
        );
    }
}

export default Login;

//create a hooks based functional component version
//display a useful error message if the login was unsuccessful
//add a counter to record the number of unsuccessful login attempts - hide the form if more than 5