import React, { useEffect, useState } from 'react'

function Story() {
  const [Stories, setStory] = useState([]);
  const [profile, setProfile] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/stories')
      .then(data => data.json())
      .then(data => setStory(data))
      .catch(error => console.log(error))
  }, []),

    useEffect(() => {
      fetch('http://localhost:3001/profile')
        .then(data => data.json())
        .then(data => setProfile(data))
        .catch(error => console.log(error))
    }, [])




  return (
    <div className='suggestion d-flex justify-content-center align-items-center m-2 gap-3 '>
      {profile ? 
    
        <div key={profile.id}>
          <img className='story-dp' src={profile.profile_pic} alt="profile pic" />
          <p className='text-truncate' style={{width:"70px"}}>{profile.username}</p>
  
        </div>

      : <p>loading</p>}

      <div className='d-flex gap-3'>
        {Stories.length > 0 ? (
          Stories.map((Stories) => (
            <div key={Story.id}>
              <img className=' story-dp' src={Stories.user.profile_pic} alt="profile" />
          <p className='text-truncate' style={{width:"70px"}}> {Stories.user.username}</p>
            </div>
          ))
        ) : (
          <p>loading</p>
        )

        }
      </div>

    </div>
  )
}

export default Story