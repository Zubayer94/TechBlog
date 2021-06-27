import React from 'react'
import {Switch, Route} from 'react-router-dom'
import NavigationTab from './layout/navigationTab'
import Footer from './layout/footer'
import Index from './pages/home/index'
import About from './pages/about'
import Contact from './pages/contact'
import PrivateRoute from '../routes/PrivateRoute'
import SeparatedRoutes from './separatedRoutes'

const mainRoutes = () => {
    return (
        <>
            <NavigationTab />
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <PrivateRoute>
                    <SeparatedRoutes />
                </PrivateRoute>
            </Switch>
            <Footer />
        </>
    )
}

export default mainRoutes
