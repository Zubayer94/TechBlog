import React from 'react'
import contactbg from '../../theme/assets/img/contact-bg.jpg';
import aboutbg from '../../theme/assets/img/about-bg.jpg';
import indexBg from '../../theme/assets/img/index-bg.jpg';
import postBg from '../../theme/assets/img/post-bg.jpg';
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
                                    <h1>Man must explore, and this is exploration at its greatest</h1>
                                    <h2 className="subheading">Problems look mighty small from 150 miles up</h2>
                                    <span className="meta">
                                        Posted by
                                        <a href="#!">Start Bootstrap</a>
                                        on August 24, 2021
                                    </span>
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