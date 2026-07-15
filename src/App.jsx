import { useState } from 'react'
import Sidebar from './component/sidebar/sidebar'
import Mainpart from './component/mainpart/mainpart'
import Rightpart from './component/rightpart/rightpart'
function App() {


  return (

    <div className='flex h-screen bg' style={{ backgroundColor: "rgb(14, 18,22)" }}>
      <div className='w-70'>
        <Sidebar />

      </div>
      <div className=''><Mainpart /></div>
      <div className=''><Rightpart /></div>
    </div>

  )
}

export default App
