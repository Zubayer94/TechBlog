import React from 'react';
import {Route} from 'react-router-dom';

const CommonRoute = ({children, ...rest}) => {
    return (
        <Route
            {...rest}
            render={({location}) => (
                    children
                )
            }
        />
    );
};

export default CommonRoute;
