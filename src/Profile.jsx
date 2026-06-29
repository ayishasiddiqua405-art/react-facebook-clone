import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Profile() {
  const [profile, setProfile] = useState(null);
  const [story, setStory] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:3001/profile')
      .then(data => setProfile(data.data))
      .catch(error => console.log(error))
  },
    []);
  useEffect(() => {
    axios.get("http://localhost:3001/stories")
      .then((data) => setStory(data.data))
      .catch(error => console.log(error))
  }, []);

  return (
    <div >
      {profile ? (

        < div key={profile.id} >
          <div className='profile-container' >
            <div>
              <img className='profile-background position-absolute px-4' src="src/assets/image/profile.back.webp" alt="" />
            </div>
            <div className='position-relative d-flex justify-content-center '>
              <img className='profile ' src={profile.profile_pic} alt="" />
            </div>
            <div className='my-2 text-center'>
              <h4>{profile.username}</h4>
              <p>Travel lover ✈️ | Learner | Dream catchy 💭</p>
            </div>
            <div className='d-flex justify-content-center gap-3'>
              <p className='profile-list-con px-4 p-2'>Post</p>
              <p className='profile-list-con px-4 p-2'>About</p>
              <p className='profile-list-con px-4 p-2'>Friends</p>
              <p className='profile-list-con px-4 p-2'>Photos</p>
              <p className='profile-list-con px-4 p-2'>More</p>
              <p className='btn btn-primary '>Add to Story</p>
              {/* <button className='border-0 btn btn-primary '>Add to Story</button> */}
              <i className="bi bi-list profile-list-con mb-auto p-2"></i>

            </div>
          </div>
          <div className='d-flex justify-content-center flex-column gap-3'>
            {/* intro-container */}
            <div className='d-flex justify-content-center align-items-center'>
              <div className='mt-0 p-d-container w-25 p-2 '>
                <h3>Personal details</h3>
                <p className='m-3'>sarah dev | Love to explore 🌍 </p>
                <p className='m-3'>📍 Lives in chennai </p>
              </div>

              {/* post add- session */}

              <div className='add-post p-2 w-50 m-4'>
                <p className='p-2 icon-text'>Create Post</p>
                <div className='add-post-pic d-flex gap-3 align-items-center '>
                  <img className='rounded-circle my-profile' src={profile.profile_pic} alt="profile-pic" />
                  <p className=''>What's on your mind ?</p>
                </div>
                <div className='p-2 d-flex justify-content-center gap-5 m-2'>
                  <div className='icon-g-container p-2'>
                    <i className="bi bi-images icon-g "></i><span className='icon-text'> Gallery</span>
                  </div>
                  <div className='icon-v-container p-2'>
                    <i className="bi bi-camera-video icon-v"></i> <span className='icon-text'>Video</span>
                  </div>

                  <div className='icon-a-container p-2'>
                    <i className="bi bi-emoji-smile-fill icon-a"></i> <span className='icon-text'>Activity</span>
                  </div>

                </div>

              </div>
            </div>
            {/* highlights */}
            <div className='d-flex justify-content-center'>
              <div className='p-d-container w-25  p-2 mb-auto'>
                <h4 >Highlights</h4>
                <p className='profile-list-con p-2 mx-auto text-center m-auto'>Add highlights</p>
              </div>
              {/* all post-section */}
              <div className='p-d-container p-2 w-50 mb-auto m-4'>
                <div className='d-flex justify-content-between gap-5 '>

                  <h4 >Posts</h4>
                  <div className='d-flex gap-3'>
                    <i className="bi bi-sliders profile-list-con d-flex gap-2 align-items-center p-2">Filters </i>
                    <i className="bi bi-gear  profile-list-con d-flex gap-2 align-items-center p-2">Manage</i>
                  </div>

                </div>
                <div className=' d-flex  justify-content-center gap-3 m-2 align-items-center'>
                  <i className="bi bi-list profile-list-con  d-flex  gap-2 w-50 p-2">Listing</i>
                  <i className="bi bi-grid profile-list-con d-flex gap-2  p-2 w-50">Grid-view</i>
                </div>
                {/* all post */}
              </div>
            </div>
            {/* friends-list */}
            <div className='container'>
              <div className='row'>
                < div className='d-flex justify-content-center gap-5 mx-5'>
                  <div className='p-d-container w-25 mb-auto p-4 col-3' > 
                    <div className='d-flex'>
                      <h4 >Friends</h4>
                      <p className='ms-auto m-2 text-primary' role='button'>View all</p>
                    </div>

                    {story.length > 0 ? (
                      <div className='d-flex flex-wrap justify-content-center gap-3 row-4'>
                        {story.map((stories) => (
                          <div key={stories.id} className='text-center container-sm col-2 '>
                            <img
                              src={stories.user.profile_pic}
                              alt="friend"
                              className='story-dp'
                              style={{ width: "60px", height: "60px", objectFit: "cover" }}
                            />
                            <p style={{ fontSize: "12px" }}>{stories.user.username}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p>loading</p>
                    )

                    }

                  </div>

                  {/* profile-posts */}
                  {/* post-1 */}
                  <div className='d-flex flex-column w-50 col-6'>
                    <div className='post-container mb-3'>
                      <div className='d-flex'>
                        <img className='dp rounded-circle m-2 ' src={profile.profile_pic} alt="profile-pic" />

                        <div> <h5 className='my-4 mx-2'>{profile.username}</h5>
                          <p className='px-2' >{profile.caption1}</p>
                          <img className='w-100' src={profile.image1} alt="" />
                          <div className='d-flex gap-3 px-2'>
                            <i className="bi bi-hand-thumbs-up heart-icon"></i>
                            <i className="bi bi-chat heart-icon"></i>
                            <i className="bi bi-arrow-up-right-circle heart-icon"></i>
                          </div>
                          <p className='p-2'>{profile.likes1}</p>
                        </div>
                        <i className="bi bi-three-dots ms-auto m-2"></i>

                      </div>
                    </div>

                    {/* post-2 */}
                    <div className='post-container  mb-3'>
                      <div className='d-flex' >
                        <img className='dp rounded-circle m-2 ' src={profile.profile_pic} alt="profile-pic" />

                        <div> <h5 className='my-4 mx-2'>{profile.username}</h5>
                          <p className='px-2' >{profile.caption2}</p>
                          <img className='w-100 ' src={profile.image2} alt="" />
                          <div className='d-flex gap-3 px-2'>
                            <i className="bi bi-hand-thumbs-up heart-icon"></i>
                            <i className="bi bi-chat heart-icon"></i>
                            <i className="bi bi-arrow-up-right-circle heart-icon"></i>
                          </div>
                          <p className='p-2'>{profile.likes2}</p>
                        </div>
                        <i className="bi bi-three-dots ms-auto m-2"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      ) : (
        <div><img src="src/assets/image/loading-1.gif" alt="" />
        </div>
      )
      }
    </div >
  )
}

export default Profile