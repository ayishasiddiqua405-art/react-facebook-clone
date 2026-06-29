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
        // <div className='d-flex justify-content-center align-items-center'>
        <div className='w-100 d-flex flex-column'>
            {feeds.length > 0 ? (
                <div>
                    {/* <div className='add-post text-center d-flex justify-content-between align-items-center p-2 my-2'>
                        <img className='rounded-circle my-profile my-2' src={myProfile} alt="profile" />
                        <button className='btn btn-secondary w-50'>Add a Post</button>
                        <i className="bi bi-plus-square my-2" ></i>
                    </div> */}
                    
                    {/* create post-container */}

                    <div className='add-post p-2 '>
                        <p className='p-2 icon-text'>Create Post</p>
                        <div className='add-post-pic d-flex gap-3 align-items-center'>
                            <img className='rounded-circle my-profile' src={myProfile} alt="profile-pic" />
                            <p className=''>What's on your mind ?</p>
                        </div>
                        <div className='p-2 d-flex justify-content-between m-2'>
                            <div className='icon-g-container p-2'>
                                <i className="bi bi-images icon-g "></i><span className='icon-text'> Gallery</span>
                            </div>
                            <div className='icon-v-container p-2'>
                                <i className="bi bi-camera-video icon-v"></i> <span className='icon-text'>Video</span>
                            </div>
                            <div className='icon-l-container p-2'>
                                <i className="bi bi-geo-alt-fill icon-l"></i> <span className='icon-text'>Location</span>
                            </div>
                            <div className='icon-gif-container p-2'>
                                <i className="bi bi-filetype-gif icon-gif"></i> <span className='icon-text'>GIF</span>
                            </div>
                            <div className='icon-a-container p-2'>
                                <i className="bi bi-emoji-smile-fill icon-a"></i> <span className='icon-text'>Feeling/Activity</span>
                            </div>
                            <i className="bi bi-three-dots"></i>
                        </div>
                    </div>


                    {feeds.map((post) =>
                
                        <div className='post-container ' key={post.id}>
                            <div className='d-flex gap-3 px-3 py-2'>
                                <p>Popular</p>
                                <p>Recent</p>
                                <p>Most View</p>
                            </div>
                            <div className='d-flex  mx-2'>
                                <img className='dp rounded-circle my-2 ' src={post.user.profile_pic} alt="profile-pic" />

                                <div> <h5 className='my-4 mx-2'>{post.user.username}</h5></div>

                                <i className="bi bi-three-dots ms-auto my-2"></i>
                            </div>

                            <p className='px-2'>{post.caption}</p>

                            <img src={post.image} className='images' alt="" />

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