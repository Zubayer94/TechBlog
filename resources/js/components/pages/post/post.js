import React, { useState, useEffect } from 'react'
import Header from '../../layout/header'
import CommentView from './commentView'

const post = ({match}) => {
    const [post, setPost] = useState('')
    const [comments, setComments] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [comment, setComment] = useState('') // for new comment

    const getPostById = async() => {
        await axios.get(`/posts/${match.params.id}`)
        .then(({data}) => {
            setPost(data.post)
            setComments(data.post.comments)
            setComment('')
        })
        .catch(err => {
            console.log(err)
        })
    }
    const createNewComment = async(e) => {
        e.preventDefault();
        await axios.post(`/comment`, {comment, postId: match.params.id})
        .then(({data}) => {
            setComments([data.comment, ...comments])
        })
        .catch(err => {
            setIsLoading(false)
            console.log(err)
        })
    }
    useEffect(() => {
        getPostById()
        .then(() => {
            setIsLoading(false)
        })
        .catch(err => {
            setIsLoading(false)
            console.log(err)
        })
    },  [match.params.id])

    return (
        <>
            <Header type="postheader" payload={post} />
            <article className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">

                            {/* spinner */}
                            { !isLoading ? 
                                <h4>{post?.description}</h4> 
                                :
                                <>
                                    <div className="text-center">
                                        <div className="spinner-border  text-primary" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </article>
            
            <hr className="my-4" />
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    {/* New comment form*/}
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <h4>Add comment</h4>
                        <form onSubmit={createNewComment}>
                            <div className="form-group">
                                <input type="text" className="form-control" value={comment} onChange={(e) => setComment(e.target.value)}  placeholder="Enter new comment" />
                            </div>

                            { !isLoading ?  (<button type="submit" className="btn btn-primary mb-4">Create</button>) :    
                                (<button className="btn btn-primary" type="button" disabled>
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    <span className="sr-only">Loading...</span>
                                </button>)
                            }
                        </form>
                    </div>
                    {
                        !!comments ?
                        (<div className="col-md-10 col-lg-8 col-xl-7">
                            {/* comments preview*/}
                            { comments.map(comment => (
                                <CommentView key={comment.id} comment={comment} />
                            ))}
                        </div>)
                        : null
                    }
                </div>
            </div>
        
        </>

    )
}

export default post;
