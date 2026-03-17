
function Sidebar() {
    return (
        <div className=" mx-2 d-flex justify-content-between vh-100 flex-column position-fixed">
            <div className="d-flex flex-column  gap-3">
                <div><img className='fb-name' src="src/assets/image/fb-name.png" alt="" /></div>
                <div className="div"><i className="bi bi-house-heart icon"></i>Home</div>
                <div className="div"><i className="bi bi-play-btn icon"></i>Reels</div>
                <div className="div"><i className="bi bi-shop icon"></i>Market place</div>
                <div className="div"><i className="bi bi-controller icon"></i>Games</div>
                <div className="div"><i className="bi bi-bell icon"></i>Notifications</div>
                <div className="div"><i className="bi bi-person-circle icon"></i>Profile</div>
                <div className="div"><i className="bi bi-search icon"></i>Search</div>
                <div className="div"><i className="bi bi-threads icon"></i>Threads</div>
                <div className="div"><i className="bi bi-instagram icon"></i>Instagram</div>
            </div>
            <div className="bottom-0  d-flex flex-column  gap-3">
                <div className="div"><i className="bi bi-list icon"></i>More</div>
                <div className="div"><i className="bi bi-box-arrow-left icon"></i>Log out</div>

            </div>
        </div>
    )
}

export default Sidebar