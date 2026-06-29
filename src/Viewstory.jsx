import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

function Viewstory() {

    const { id, total } = useParams();
    const [stories, setStory] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3001/stories/${id}`)
            .then(data => (data.json()))
            .then(data => setStory(data))
            .catch(error => console.log(error))
    }, [id]);

    if (id > total || id <= 0) {
        navigate ('/');
    }
    

    return (
        <div>
            {stories ? <div className='d-flex justify-content-center align-items-center'>
                <Link to={`/stories/${Number(id) - 1}/$(total)`}><i className="bi bi-caret-left-fill text-primary mx-4" style={{ fontSize: 26 }}></i></Link>

                <img className='w-50 vh-100 ' src={stories.image} alt="story unavailabe" />
                <Link to={`/stories/${Number(id) + 1}/${total}`}>
                    <i className="bi bi-caret-right-fill text-primary mx-4" style={{ fontSize: 26 }}></i>
                </Link>
            </div>
                :
                <p>loading</p>
            }
        </div>
    )
}

export default Viewstory