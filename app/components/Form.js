import React from 'react';
import userLogin from '../actions.js';
import { connect } from 'react-redux';

const mapStateToProps = (store, ownProps) => {
    return {loggedIn: store.loggedIn}
};

@connect(mapStateToProps)

class Form extends React.Component {
    login(e) {
        e.preventDefault();

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;

        document.getElementById("username").value = "";
        document.getElementById("password").value = "";

        this.props.dispatch(userLogin(username,password));
    }

    render() {

        return(
            <div>
                {this.props.loggedIn ? <p>Login Successful</p> : null}
                <form onSubmit={this.login.bind(this)} class="form-horizontal">
                    <legend>Login</legend>
                    <div class="form-group">
                        <label for="username" class="col-sm-2 control-label">Username</label>
                        <div class="col-sm-10">
                            <input type="text" id="username" placeholder="Username" class="form-control"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="username" class="col-sm-2 control-label">Password</label>
                        <div class="col-sm-10">
                            <input type="password" id="password" placeholder="Password" class="form-control"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-10 col-sm-offset-2">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}

export default Form;
