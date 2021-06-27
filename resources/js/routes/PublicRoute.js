import React, {useContext} from 'react';
import {Redirect, Route} from 'react-router-dom';
import { AuthContext } from '../store/contexts/AuthContext';

const PublicRoute = ({children, ...rest}) => {
    const { isLoggedIn } = useContext(AuthContext)
    return (
        <Route
            {...rest}
            render={({location}) =>
                !! isLoggedIn ? (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: {from: location}
                        }}
                    />
                ) : (
                    children
                )
            }
        />
    );
};

export default PublicRoute;
