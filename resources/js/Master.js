import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import PostContextProvider from './store/contexts/PostContext';
import AuthContextProvider from './store/contexts/AuthContext';
import AuthPostsContextProvider from './store/contexts/AuthPostsContext';
import Login from './components/pages/login'
import Register from './components/pages/register'
import MainRoutes from './components/mainRoutes';
import PublicRoute from './routes/PublicRoute'
import CommonRoute from './routes/CommonRoute'

function Master() {
    return (
        <>
            <Router>
                <AuthContextProvider>
                    <AuthPostsContextProvider>
                        <PostContextProvider>
                            <Switch>
                                <PublicRoute exact path="/login">
                                    <Login />
                                </PublicRoute>
                                <PublicRoute exact path="/signup">
                                    <Register />
                                </PublicRoute>
                                <CommonRoute path="/">
                                    <MainRoutes />
                                </CommonRoute>
                            </Switch>
                        </PostContextProvider>
                    </AuthPostsContextProvider>
                </AuthContextProvider>
            </Router>
        </>

    );
}

export default Master;

if (document.getElementById('app')) {
    ReactDOM.render(<Master />, document.getElementById('app'));
}
