import React from 'react';
import {Link} from 'react-router-dom';


export class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="container">
            <div  className="text-center">
                <form className="form-signin ">
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required
                           autofocus/>
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                    <Link className="btn btn-lg btn-primary btn-block" to="/courses">Sign in</Link>
                </form>
            </div>
        </div>
    }
}