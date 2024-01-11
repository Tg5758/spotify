import React from 'react'
import Sidebar from './sideBar/Sidebar'
import MainComponent from './MainComponent'
import Header from './Header'

function Home() {
  const [active,setActive] = ("false")
  return (
    <>
    <div className='flex flex-row w-full'>
      <div className='w-1/5'> <Sidebar setActive={setActive} active={active}/></div>
      <div className='flex flex-col w-full'>

      <div> <Header/></div>
      <div> <MainComponent/></div>
      </div>

    </div>
    </>
  )
}

export default Home