import React, { useState, useContext } from 'react'
import { PostContext } from '../../../store/contexts/PostContext'

const indexPostForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('Post Description here. . . ')
    const [isLoading, setIsLoading] = useState(false)
    const {dispatch} = useContext(PostContext)

    const createNewPost = async(e) => {
        e.preventDefault();
        setIsLoading(true)
        let data = {title, description}
        await axios.post(`/posts`, data)
        .then(({data}) => {
            dispatch({ type: 'postAdded', post: {...data.post}})
            setTitle('')
            setDescription('Post Description here. . . ')
            setIsLoading(false)
        })
        .catch(err => {
            setIsLoading(false)
            console.log(err)
        })
    }
    return (
        <div className="col-md-10 col-lg-8 col-xl-7">
            <h4>Create New post</h4>
            <form onSubmit={createNewPost}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)}  placeholder="Enter Post Title" />
                    {/* <small id="emailHelp" className="form-text text-muted">Title required.</small> */}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                    <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} rows={3} />
                </div>

                { !isLoading ?  (<button type="submit" className="btn btn-primary">Create</button>) :    
                    (<button className="btn btn-primary" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span className="sr-only">Loading...</span>
                    </button>)
                    }
            </form>
        </div>
    )
}

export default indexPostForm;