import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../store/contexts/AuthContext'

const navigationTab = () => {
    const {isLoggedIn, logout} = useContext(AuthContext)
    return (
        <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand" to="/">TechBlog</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto py-4 py-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link px-lg-3 py-3 py-lg-4" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-lg-3 py-3 py-lg-4" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-lg-3 py-3 py-lg-4" to="/contact">Contact</Link>
                        </li>
                        { isLoggedIn ?  (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link px-lg-3 py-3 py-lg-4" to="/users">All Users</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link px-lg-3 py-3 py-lg-4" to="/profile">Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link px-lg-3 py-3 py-lg-4" href="#" onClick={() => logout()} >Logout</a>
                                    </li>
                                </>
                            ) : null
                            
                        }

                        { !isLoggedIn ?  (
                            <li className="nav-item">
                                <Link className="nav-link px-lg-3 py-3 py-lg-4" to="/login">Login</Link>
                            </li>
                            ) : null
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default navigationTab;