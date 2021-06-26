import { createContext, useState} from "react";

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const [user, setUser] = useState('')
    const [responeloading, setResponeloading] = useState(false)
    const [formError, setFormError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(!!JSON.parse(localStorage.getItem('user'))?.token);
    
    const userLogin = async(email, password) => {
        setResponeloading(true)
        setFormError('')
        await axios.post('/login', {
            email,
            password,
        })
        .then((response) => {
            const userResponse = {
                user: response.data.user,
                token: response.data.access_token,
            }
            setUser(userResponse);
            localStorage.setItem('user', JSON.stringify(userResponse));
            setResponeloading(false)
        })
        .catch(error => {
            setFormError(error.response.data)
            setResponeloading(false)
        })
    }
    const userRegister = async(userinfo) => {
        setResponeloading(true)
        setFormError('');
        await axios.post('/register', userinfo)
        .then((response) => {
            setResponeloading(false)
            console.log(response);
        })
        .catch(error => {
            setResponeloading(false)
            setFormError(error.response.data);
            // console.log(error.response.data.message);
        })
    }
    const logout = () => {
        setUser('')
        setIsLoggedIn(false)
        localStorage.removeItem('user')
    }
    return (
        <AuthContext.Provider value={{user, userLogin, setUser, logout, userRegister, formError, isLoggedIn, responeloading}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;