import React from 'react'

import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from 'react-icons/bs'
function header({ openSidebar }) {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={openSidebar} />
      </div>
      <div className='header-left'>
        <BsSearch className='icon' />
      </div>
      <div className='header-right'>
        <BsPersonCircle className='icon' />
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
      </div>
    </header>
  )
}

export default header
