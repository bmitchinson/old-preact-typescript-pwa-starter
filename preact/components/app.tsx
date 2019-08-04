import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header/header';

// Code-splitting is automated for routes
import Home from '../routes/home/home';
import Profile from '../routes/profile/profile';

interface MyProps {}
interface MyState {}

export default class App extends Component<MyProps, MyState> {
    /** Gets fired when the route changes.
     *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
     *	@param {string} event.url	The newly routed URL
     */
    currentUrl;

    handleRoute = e => {
        this.currentUrl = e.url;
    };

    render() {
        return (
            <div id="app">
                <Header />
                <Router onChange={this.handleRoute}>
                    <Home path="/" />
                    <Profile path="/profile/" user="me" />
                    <Profile path="/profile/:user" />
                </Router>
            </div>
        );
    }
}
