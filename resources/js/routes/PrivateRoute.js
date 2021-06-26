import React from 'react';
import {Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
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

export default PrivateRoute;
// const PrivateRoute = ({children, isLoggedIn, ...rest}) => {
//     return (
//         <Route
//             {...rest}
//             render={({location}) =>
//                 isLoggedIn ? (
//                     children
//                 ) : (
//                     <Redirect
//                         to={{
//                             pathname: '/login',
//                             state: {from: location}
//                         }}
//                     />
//                 )
//             }
//         />
//     );
// };

// export default PrivateRoute;
