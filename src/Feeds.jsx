import React, { useEffect, useState } from 'react'
import myProfile from "./assets/image/profile-i'm.jpg"

function Feeds() {
    const [feeds, setFeeds] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/posts')
            .then((data) => data.json())
            .then((data => setFeeds(data)))
            .catch(error => console.log(error)
            )

    }, []);
    return (
        <div className='d-flex justify-content-center align-item-center'>
            {feeds.length > 0 ? (
                <div>
                    <div className='add-post text-center d-flex justify-content-between align-item-center p-2 my-2'>
                        <img className='rounded-circle my-profile my-2' src={myProfile} alt="profile" />
                        <button className='btn btn-secondary w-50'>Add a Post</button>
                        <i className="bi bi-plus-square my-2" ></i>
                    </div>

                    {feeds.map((post) =>

                        <div className='post-container ' key={post.id}>
                            <div className='d-flex  mx-2'>
                                <img className='dp rounded-circle my-2 ' src={post.user.profile_pic} alt="profile-pic" />

                                <div> <h5 className='my-4 mx-2'>{post.user.username}</h5></div>

                                <i className="bi bi-three-dots ms-auto my-2"></i>
                            </div>

                            <p className='px-2'>{post.caption}</p>

                            <img  src={post.image} className='images' alt="" />

                            <div className='d-flex gap-3 px-2'>
                                <i className="bi bi-hand-thumbs-up heart-icon"></i>
                                <i className="bi bi-chat heart-icon"></i>
                                <i className="bi bi-arrow-up-right-circle heart-icon"></i>
                            </div>
                            <div className='px-2'>
                                {post.likes}
                            </div>

                        </div>
                    )}
                </div>
            ) : (
                <div>
                    loading posts
                </div>
            )
            }
        </div>
    )
}


export default Feeds