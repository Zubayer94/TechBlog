import React from 'react'
import contactbg from '../../theme/assets/img/contact-bg.jpg';
import aboutbg from '../../theme/assets/img/about-bg.jpg';
import indexBg from '../../theme/assets/img/index-bg.jpg';
import postBg from '../../theme/assets/img/post-bg.jpg';
import usersBg from '../../theme/assets/img/users-bg.jpg';
import notFoundBg from '../../theme/assets/img/404-bg.jpg';

const header = ({type, payload}) => {
    switch (type) {
        case 'indexheader':
            return (
                <header className="masthead" style={{backgroundImage: `url(${indexBg})`}} >
                    <div className="container position-relative px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <div className="site-heading">
                                    <h1>Clean Blog</h1>
                                    <span className="subheading">A Blog Theme by Start Bootstrap</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            )

        case 'postheader':
            return (
                <header className="masthead" style={{backgroundImage: `url(${postBg})`}} >
                    <div className="container position-relative px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <div className="post-heading">
                                    <h1>{payload?.title}</h1>
                                    <span className="meta">
                                        Posted by <b>{payload?.user?.name}</b>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            )

        case 'allUsersheader':
            return (
                <header className="masthead" style={{backgroundImage: `url(${usersBg})`}} >
                    <div className="container position-relative px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <div className="page-heading">
                                    <h1>Users List</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            )
        case 'userprofileheader':
            return (
                <header className="masthead" style={{backgroundImage: `url(${usersBg})`}} >
                    <div className="container position-relative px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <div className="page-heading">
                                    <h1>Profile</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            )

        case 'aboutheader':
            return (
                <header className="masthead" style={{backgroundImage: `url(${aboutbg})`}}>
                    <div className="container position-relative px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <div className="page-heading">
                                    <h1>About TechBlog</h1>
                                    <span className="subheading">This is what I do.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            )

        case 'contactheader':
            return (
                <header className="masthead" style={{backgroundImage: `url(${contactbg})`}}>
                    <div className="container position-relative px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <div className="page-heading">
                                    <h1>Contact Me</h1>
                                    <span className="subheading">Have questions? I have answers.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            )

        case 'errorheader':
            return (
                <header className="masthead" style={{backgroundImage: `url(${notFoundBg})`}}>
                    <div className="container position-relative px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <div className="page-heading">
                                    <h1>Oppsss!</h1>
                                    {/* <span className="subheading">This is what I do.</span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            )

        default:
            break;
    }
}
export default header;