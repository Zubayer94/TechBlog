import React, { useState, useEffect, useContext } from 'react'
import { PostContext } from '../../../store/contexts/PostContext'
import IndexPostView from './indexPostView'
import Header from '../../layout/header'
import IndexPostForm from './indexPostForm'
import { AuthContext } from '../../../store/contexts/AuthContext'

const index = () => {
    const [length, setLength] = useState(10)
    const {posts, dispatch} = useContext(PostContext)
    const {isLoggedIn} = useContext(AuthContext)
    console.log(isLoggedIn);
    useEffect(async() => {
        await axios.get(`/posts?length=${length}`)
        .then(({data:{data}}) => dispatch({ type: 'setAllPost', posts: data}))
        .catch(err => console.log(err))
    }, [length])

    return (
        <>
            <Header type="indexheader" />
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    {/* New Post Form*/}
                    <IndexPostForm />
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        {/* Post preview*/}
                        { posts.map(post => (
                            <IndexPostView key={post.id} post={post} />
                        ))}

                        {/* Pager*/}
                        <div className="d-flex justify-content-end mb-4">
                            <button className="btn btn-primary text-uppercase" onClick={() => setLength(length+10)}>
                                Load more Posts →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default index
