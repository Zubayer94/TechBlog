import React, {useState, useEffect} from 'react'
import Header from '../../layout/header'
import Pagination from "react-js-pagination";
import {Modal, Button} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

const Users = () => {
    const history = useHistory()
    const [show, setShow] = useState(false);
    const [users, setUsers] = useState('')
    const [dir, setDir] = useState('asc')
    const [orderby, setOrderby] = useState('name')
    const [length, setLength] = useState(5)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [website, setWebsite] = useState('')
    const [paginationData, setPaginationData] = useState({
        current_page : 1
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const clear = () => {
        setName('')
        setEmail('')
        setWebsite('')
    };

    const handleShort = (field) => {
        if (orderby === field) {
            let tDir = dir === 'asc' ? 'desc' : 'asc';
            setDir(tDir)
        } else{
            setOrderby(field);
            setDir('asc');
        }
    }
    const reidrectUserProfile = (id) => {
        history.push(`/user-profile/${id}`);
    }

    const getAllUsers = async(page) => {
        await axios.get(`/users?page=${page}`, {
            params:  {length, name, email, dir, orderby},
        })
        .then(({data}) => {
            setUsers(data.data)
            setPaginationData(data.meta)
        })
    }

    useEffect(() => {
        getAllUsers(paginationData.current_page)
    }, [length, name, email, dir])
    const {current_page, per_page, total} = paginationData
    return (
        <>
           <Header type="allUsersheader" />
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-12 col-lg-8 col-xl-10">
                            <div className="card">
                                <div className="card-body" style={{overflowX: 'auto'}}>
                                    <div className="margin">
                                        <div className="col-md-4 float-left mb-1"> {/* tools button group starts  */}
                                            <div className="row">
                                                <div className="btn-group btn-group-sm" role="group">
                                                <button type="button" className="btn btn-light btn-sm" onClick={handleShow} >
                                                    <i className="fas fa-filter fa-lg" />
                                                </button> 
                                                <button type="button" className="btn btn-light btn-sm" onClick={clear} >
                                                    <i className="text-danger fas fa-sync fa-lg" />
                                                </button>
                                                </div>
                                            </div>
                                        </div> 
                                        {/* tools button group starts ends here */}

                                        <div className="float-right col-md-8"> {/* pagination by here */}
                                            <div className="d-flex justify-content-end">
                                                {
                                                    !!paginationData ?
                                                    <Pagination
                                                        activePage={current_page}
                                                        itemsCountPerPage={parseInt(per_page)}
                                                        totalItemsCount={parseInt(total)}
                                                        // pageRangeDisplayed={5}
                                                        onChange={ (current_page) => getAllUsers(current_page)}
                                                        itemClass="page-item"
                                                        linkClass="page-link"
                                                    />
                                                    : null
                                                }
                                            </div> {/* pagination ends here */}
                                        </div> 
                                    </div>

                                    {/* table starts here */}
                                    <table className="table table-striped table-bordered table-hover table-condensed table-responsive{-sm|-md|-lg|-xl}">
                                        <thead>
                                            <tr>
                                                <th scope="col" onClick={() => handleShort('name')} style={{cursor: 'pointer'}} >
                                                    Name  
                                                </th>
                                                <th scope="col" onClick={() => handleShort('email')} style={{cursor: 'pointer'}} >
                                                    Email
                                                </th>
                                                <th scope="col" onClick={() => handleShort('website')} style={{cursor: 'pointer'}} >Website</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { !!users && users.map(user => (
                                                <tr key={user.id} onClick={() => reidrectUserProfile(user.id)} style={{cursor: 'pointer'}}>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{ !!user?.website ? user.website : '_'}</td>
                                                </tr>
                                            ))}
                                            
                                        </tbody>
                                    </table>
                                    {/* table ends here */}

                                </div>
                                <div className="card-footer">
                                    <div className="float-left">
                                        <span>Show</span> &nbsp;
                                        <select onChange={(e) => setLength(e.target.value)}>
                                            <option value={5}>5 entries </option>
                                            <option value={10}>10 entries </option>
                                            <option value={20}>20 entries </option>
                                            <option value={100}>100 entries </option>
                                        </select> &nbsp;
                                    </div>
                                    <div className="float-right">
                                        {
                                            !!paginationData ?
                                            <Pagination
                                                activePage={current_page}
                                                itemsCountPerPage={parseInt(per_page)}
                                                totalItemsCount={parseInt(total)}
                                                // pageRangeDisplayed={5}
                                                onChange={ (current_page) => getAllUsers(current_page)}
                                                itemClass="page-item"
                                                linkClass="page-link"
                                            />
                                            : null
                                        }
                                    </div>
                                </div>
                                
                                {/* filter modal */}
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
                                            <label htmlFor="exampleInputEmail1">Name</label>
                                            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}  placeholder="Enter name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email</label>
                                            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Enter email" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Website</label>
                                            <input type="text" className="form-control" value={website} onChange={(e) => setWebsite(e.target.value)}  placeholder="Enter website" />
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={clear} >
                                            <i className="text-danger fas fa-sync fa-lg" />
                                        </Button>
                                        <Button variant="primary" onClick={handleClose}> Filter</Button>
                                    </Modal.Footer>
                                </Modal>
                                {/* filter modal ends*/}
                            </div>
                        </div>
                    </div>
                </div>
            </main> 
        </>
    )
}

export default Users
