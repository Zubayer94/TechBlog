import React, {useEffect, useContext} from 'react'
import { AuthPostsContext } from '../../../store/contexts/AuthPostsContext'
import AuthPostView from './AuthPostView'
import Header from '../../layout/header'

const AuthProfile = () => {
    const {authPosts, dispatch} = useContext(AuthPostsContext)

    useEffect(async() => {
        await axios.get(`/getAuthPosts`)
        .then(({data:{authPosts}}) => dispatch({ type: 'setAuthPosts', authPosts: authPosts}))
        .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Header type="userprofileheader" />
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <h4>Your Post list</h4>
                        {/* Post preview*/}
                        { !!authPosts && authPosts.map(authPost => (
                            <AuthPostView key={authPost.id} authPost={authPost} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthProfile
