import React, { useEffect, useState } from 'react'

function Suggestions() {

  const [profile, setProfile] = useState();

  const [suggestions, setSuggetions] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/profile')
      .then((data) => data.json())
      .then((data => setProfile(data)))
      .catch(error => console.log(error))
  },

    []);

  useEffect(() => {
    fetch('http://localhost:3001/suggestions')
      .then((data) => data.json())
      .then((data => setSuggetions(data)))
      .catch(error => console.log(error))

  },
    []);

  return (
    <div className='suggestion m-2 d-none d-sm-block'>
      {profile ?
        <div className='d-flex m-2 align-items-center'>
          <img className='rounded-circle dp' src={profile.profile_pic} alt="profile pic" />
          <h6 className='m-2'>{profile.username}</h6>
          <p className='ms-auto text-primary'>switch</p>
        </div>

        : <p>loading</p>}

      <div className='d-flex see-more align-items-center px-2 mx-2'>
        <p className='mt-2 '>People May You Know</p>
        <i className="bi bi-three-dots ms-auto"></i>
      </div>
      {suggestions.length > 0 ? (
        <div className='p-4'>

          {suggestions.map((suggestion) =>

            <div key={suggestion.id}>
              <div className='d-flex mt-2'>
                <img className='dp rounded-circle my-2 ' src={suggestion.profile_pic} alt="profile-pic" />

                <p className='mx-2 mt-2'>{suggestion.username}</p>

                <p className='text-primary ms-auto'> <i className="bi bi-plus"></i>add</p>
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

export default Suggestions