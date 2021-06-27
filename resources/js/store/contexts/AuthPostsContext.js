import { createContext, useReducer } from "react";
import { AuthPostsReducer } from "../reducers/AuthPostsReducer";

export const AuthPostsContext = createContext();

const AuthPostsContextProvider = (props) => {
    const [authPosts, dispatch] = useReducer(AuthPostsReducer, [])

    return (
        <AuthPostsContext.Provider value={{authPosts, dispatch}}>
            {props.children}
        </AuthPostsContext.Provider>
    )
}

export default AuthPostsContextProvider;