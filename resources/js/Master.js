import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import PostContextProvider from './store/contexts/PostContext';
import AuthContextProvider from './store/contexts/AuthContext';
import Login from './components/pages/login'
import Register from './components/pages/register'
import MainRoutes from './components/mainRoutes';
import PublicRoute from './routes/PublicRoute'
import PrivateRoute from './routes/PrivateRoute'

function Master() {
    return (
        <>
            <Router>
                <AuthContextProvider>
                    <PostContextProvider>
                        <Switch>
                            <PublicRoute exact path="/login">
                                <Login />
                            </PublicRoute>
                            <PublicRoute exact path="/signup">
                                <Register />
                            </PublicRoute>
                            <PrivateRoute path="/">
                                <MainRoutes />
                            </PrivateRoute>
                        </Switch>
                    </PostContextProvider>
                </AuthContextProvider>
            </Router>
        </>

    );
}

export default Master;

if (document.getElementById('app')) {
    ReactDOM.render(<Master />, document.getElementById('app'));
}
