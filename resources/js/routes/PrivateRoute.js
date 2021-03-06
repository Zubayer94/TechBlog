import React, {useContext} from 'react';
import {Redirect, Route} from 'react-router-dom';
import { AuthContext } from '../store/contexts/AuthContext';

const PrivateRoute = ({children, ...rest}) => {
    const { isLoggedIn } = useContext(AuthContext)
    return (
        <Route
            {...rest}
            render={({location}) =>
                isLoggedIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
