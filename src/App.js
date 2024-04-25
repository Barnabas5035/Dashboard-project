import React, { useState } from 'react'
import Header from './header'
import Home from './Home'
import Sidebar from './Sidebar'
function App() {
  const [openToggle, setOpenToggle] = useState(false)

  const openSidebar = () => {
    setOpenToggle(!openToggle)
  }
  return (
    <div className='grid-container'>
      <Header openSidebar={openSidebar} />
      <Sidebar openToggle={openToggle} openSidebar={openSidebar} />
      <Home />
    </div>
  )
}

export default App
