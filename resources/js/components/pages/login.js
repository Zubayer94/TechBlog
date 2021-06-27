import React, {useState, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom';
import '../../theme/css/login.css'
import { AuthContext } from '../../store/contexts/AuthContext'
import Validation from '../../utils/Validation'

const login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {userLogin, formError, responeloading} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        userLogin(email , password)
        .then(() => {
            history.push('/');
        })
        .catch(err => console.log(err))
    }

    const getError = (key) => {
        return (formError[key] !== undefined) ? formError[key][0] : null;
    }
    const clearError = (key) => {
        if (key) {
            delete formError[key];
            return;
        }
        errors = {};
    }

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit} > 
                <h2 className="text-center">Log in</h2>
                {!!formError.message ? <span className="text-center text-danger ">{formError.message}</span> : null}
                <div className="form-group">
                    <input className="form-control loginInput" onChange={(e) => {setEmail(e.target.value), clearError('email')}} value={email} type="text"  placeholder="Email"  />
                    <Validation errorText={getError('email')} type='email' />
                </div>
                <div className="form-group">
                    <input className="form-control loginInput" placeholder="Password" onChange={(e) => {setPassword(e.target.value), clearError('password')}} value={password} type="password" />
                    <Validation errorText={getError('password')} type='email' />

                </div>
                <div className="form-group">
                    { !responeloading ?  (<button type="submit" className="loginBtn btn btn-primary btn-block">Log in</button>) :    
                    (<button className="loginBtn btn btn-primary btn-block" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span className="sr-only">Loading...</span>
                    </button>)
                    }
                </div>
                <div className="clearfix">
                    <Link to="/signup" className="pull-right">Create an Account</Link>
                </div>        
            </form>
        </div>
    )
}

export default login
