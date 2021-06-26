import React from 'react'

const indexPostForm = () => {
    return (
        <div className="col-md-10 col-lg-8 col-xl-7">
            <h4>Create New post</h4>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Title</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Post Title" />
                    {/* <small id="emailHelp" className="form-text text-muted">Title required.</small> */}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={"Post Description here. . . "} />
                </div>

                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    )
}

export default indexPostForm;