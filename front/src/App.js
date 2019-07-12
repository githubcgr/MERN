import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './App.css';
import axios from 'axios';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.executeLogin = this.executeLogin.bind(this);
    }

    executeLogin() {
        console.log(this.state);

        axios.post("http://localhost:3001/login-user", this.state)
            .then(function (response) {
                console.log(response.data);
            });
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;


        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="App-header">
                <form noValidate>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Email Address"
                                name="login"
                                autoComplete="email"
                                autoFocus
                                onChange={this.handleChange}
                                login={this.state.value}
                            />
                            <TextField
                                variant="outlined"
                                required
                                margin="normal"
                                fullWidth
                                id="password"
                                label="Password"
                                name="password"
                                type="passowrd"
                                onChange={this.handleChange}
                                password={this.state.value}
                            />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                        <Button variant="contained" color="primary" onClick={this.executeLogin}>
                            Log in
                        </Button>
                    </Grid>
                </form>
            </div>
        )
    }
}

function App() {

    return (<LoginForm/>);
}

export default App;
