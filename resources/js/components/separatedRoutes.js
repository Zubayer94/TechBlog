import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Post from './pages/post/post'
import Users from './pages/allUsers/Users'
import UserProfileVIew from './pages/allUsers/UserProfileVIew'
import AuthProfile from './pages/authProfile/AuthProfile'
import Error from './error'

const separatedRoutes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/post/:id" component={Post} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/user-profile/:id" component={UserProfileVIew} />
                <Route exact path="/profile" component={AuthProfile} />
                <Route component={Error} />
            </Switch>
        </>
    )
}

export default separatedRoutes