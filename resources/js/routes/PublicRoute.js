import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const PublicRoute = ({children, ...rest}) => {
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

export default PublicRoute;
// const PublicRoute = ({children, isLoggedIn, ...rest}) => {
//     const isAuthenticated = isLoggedIn || localStorage.getItem('token');

//     return (
//         <Route
//             {...rest}
//             render={({location}) =>
//                 isAuthenticated ? (
//                     <Redirect
//                         to={{
//                             pathname: '/',
//                             state: {from: location}
//                         }}
//                     />
//                 ) : (
//                     children
//                 )
//             }
//         />
//     );
// };

// export default PublicRoute;
