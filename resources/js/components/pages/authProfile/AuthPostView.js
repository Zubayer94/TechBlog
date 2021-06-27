import React, {useState, useContext} from 'react'
import { DateTime } from "luxon";
import {Modal, Button} from 'react-bootstrap'
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { AuthPostsContext } from '../../../store/contexts/AuthPostsContext';

const AuthPostView = ({authPost}) => {
    const {dispatch} = useContext(AuthPostsContext)
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleClose = () => {
        setTitle('')
        setDescription('')
        setShow(false)
    };
    const handleShow = () => {
        setTitle(authPost.title)
        setDescription(authPost.description)
        setShow(true)
    };

    const notyf = new Notyf({
        duration: 3000,
        dismissible: true,
        position: {
            x: "right",
            y: "top",
        },
    })
    const successToast = () => notyf.success("Success!");
    const errorToast = () => notyf.error("Failed!");

    const updateAuthPost = async() => {
        await axios.put(`/posts/${authPost.id}`, {title, description})
        .then(({data}) => {
            dispatch({ type: 'authPostUpdated', authPost: {...data.post}})
            handleClose()
            successToast()
        })
        .catch(err => {
            console.log(err)
            errorToast()
        })
    }
    const handleDelete = async() => {
        await axios.delete(`/posts/${authPost.id}`)
        .then(() => {
            dispatch({ type: 'authPostRemoved', id: authPost.id})
            successToast()
        })
        .catch(err => {
            console.log(err)
            errorToast()
        })
    }

    const filterWords = (text, textLength) => {
        if (text.length > textLength) {
            return text.substring(0, textLength) + '. . .';
        }
        if (text.length <= textLength) {
            return text;
        }
    } 
    const formateDate = (date) => {
        const nDate = DateTime.fromISO(date)
        return nDate.toLocaleString(DateTime.DATETIME_MED);
    }
    return (
        <>
            <div className="post-preview">
                <div className="btn-group btn-group-sm float-right" role="group" aria-label="single group">
                    <button type="button" className="btn btn-warning btn-sm" onClick={handleShow} >
                        <i className="fa fa-edit" data-toggle="tooltip" data-placement="top" title="edit" />
                    </button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={handleDelete}>
                        <i className="fa fa-trash" data-toggle="tooltip" data-placement="top" title="delete" />
                    </button>
                </div>
                <a href='#' >
                    <h2 className="post-title">{authPost?.title}</h2>
                    <h3 className="post-subtitle">{filterWords(authPost?.description, 80)}</h3>
                </a>
                <p className="post-meta">
                    Posted on {formateDate(authPost.created_at)}
                </p>
                
            </div>

            {/* Divider*/}
            <hr className="my-4" />

            {/* edit modal */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal title
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Title</label>
                        <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Description</label>
                        <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} rows={3} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose} >
                        Close
                    </Button>
                    <Button variant="primary" onClick={updateAuthPost}>Update</Button>
                </Modal.Footer>
            </Modal>
            {/* edit modal ends*/}
        </>
    )
}

export default AuthPostView;
