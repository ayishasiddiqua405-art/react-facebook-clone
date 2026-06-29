
import Sidebar from '../Sidebar'
import Homepage from './Homepage'
import Suggestions from './Suggestions'


function App() {
  return (
    <div className='d-flex vh-100'>
      <div style={{ width: "250px" }}>

        <Sidebar />
      </div>

      <div className='flex-grow-1'>
        <Homepage />
      </div>

      <div style={{ width: "350px" }}>
        <Suggestions />
      </div>
    </div>
  )
}

export default App