import React, { useContext, useState  } from 'react'
import {Link, useHistory} from 'react-router-dom';
import '../../theme/css/signup.css'
import { AuthContext } from '../../store/contexts/AuthContext'
import Validation from '../../utils/Validation'

const register = () => {
    const history = useHistory();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [website, setWebsite] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPassword_confirmation] = useState('')
    const { userRegister, formError, responeloading } = useContext(AuthContext)

    const handlRegister = (e) => {
        e.preventDefault();
        let userinfo = {name, email, website, password, password_confirmation}
        userRegister(userinfo)
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
        <div className="signup-form">
            <form onSubmit={handlRegister} >
                <h2 className="text-center">Sign Up</h2>  
                {!!formError.message ? <span className="text-center text-danger ">{formError.message}</span> : null}
                <div className="form-group">
                    <input className="form-control signupInput" onChange={(e) => {setName(e.target.value), clearError('name')}} value={name} type="text" placeholder="Name" />
                    <Validation errorText={getError('name')} />
                </div>
                <div className="form-group">
                    <input className="form-control signupInput" onChange={(e) => {setEmail(e.target.value), clearError('email')}} value={email} type="email" placeholder="Email" />
                    <Validation errorText={getError('email')} />
                </div>
                <div className="form-group">
                    <input className="form-control signupInput" onChange={(e) => {setWebsite(e.target.value), clearError('website')}} value={website} type="text" placeholder="Website" />
                    <Validation errorText={getError('website')} />
                </div>
                <div className="form-group">
                    <input className="form-control signupInput" onChange={(e) => {setPassword(e.target.value), clearError('password')}} value={password} type="password" placeholder="Password" />
                    <Validation errorText={getError('password')} />
                </div>
                <div className="form-group">
                    <input className="form-control signupInput" onChange={(e) => {setPassword(e.target.value), clearError('password_confirmation')}} value={password_confirmation} type="password" placeholder="Confirm Password" />
                    <Validation errorText={getError('password_confirmation')} />
                </div>
                <div className="form-group">
                    { !responeloading ?  (<button type="submit" className="signupBtn btn btn-primary btn-block">Let's get Started</button>) :    
                    (<button className="loginBtn btn btn-primary btn-block" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span className="sr-only">Loading...</span>
                    </button>)
                    }

                </div>   
                <div className="clearfix">
                    <Link to="/login" className="pull-right">Already have an account?</Link>
                </div>       
            </form>
        </div>
    )
}

export default register
