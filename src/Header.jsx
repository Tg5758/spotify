import React from 'react'

function Header() {
  return (
    <>
    <div className='flex flex-row p-3 h-20 items-center  bg-blue-600 '>
        <div className='flex flex-row'>
        <img className='w-10 h-10 mr-5 shrink-0' src='/images/Back.png' alt='back'/>
        <img  className='w-10 h-10 shrink-0 ' src='/images/Forward.png' alt='forward'/>
        </div>
        <div>

        </div>
    </div>
    </>
  )
}

export default Header