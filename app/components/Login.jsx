import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

export var Login = React.createClass({
    onGitLogin() {
        var {dispatch} = this.props;
        dispatch(actions.startGitLogin());
    },
    onTwitterLogin() {
        var {dispatch} = this.props;
        dispatch(actions.startTwitterLogin());
    },
    render(){
        return (
            <div>
                <h1 className="page-title">Todo React Application</h1>
                <div className="row">
                    <div className="columns small-centered small-10 medium-6 large-4">
                        <div className="callout callout-off">
                            <h3>Login</h3>
                            <p>
                                Login securely with a social provider below.
                            </p>
                            <button className="button" onClick={this.onGitLogin}>Login With GitHub</button>
                            <button className="button" onClick={this.onTwitterLogin}>Login With Twitter</button>
                            <p>
                                This allows for secure login by allowing a 3rd party to handle user data.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
export default Redux.connect()(Login);