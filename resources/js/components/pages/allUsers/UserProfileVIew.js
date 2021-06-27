import React, {useState, useEffect} from 'react'
import Header from '../../layout/header'

const UserProfileVIew = ({match}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState()

    const getUserById = async() => {
        await axios.get(`/user/${match.params.id}`)
        .then(({data}) => {
            setUser(data.user)
        })
    }
    useEffect(() => {
        getUserById()
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
           <Header type="userprofileheader" />
            <article className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">

                            {/* spinner */}
                            { !isLoading ? 
                                <>
                                    <h4>{user?.name}</h4> 
                                    <h6>{user?.email}</h6>
                                    <h6>{user?.website}</h6>
                                </>
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
        </>
    )
}

export default UserProfileVIew
