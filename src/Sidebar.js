import React from 'react'
import {
  BsCart2,
  BsDashCircle,
  BsCartPlusFill,
  BsShop,
  BsIncognito,
  BsPersonBadge,
  BsListCheck,
} from 'react-icons/bs'
function Sidebar({ openToggle, openSidebar }) {
  return (
    <aside id='sidebar' className={openToggle ? 'sidebar-responsive' : ''}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart2 className='icon_header' /> SHOP
        </div>
        <span className='icon_close' onClick={openSidebar}>
          x
        </span>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href='#'>
            <BsDashCircle className='icon' /> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href='#'>
            <BsCartPlusFill className='icon' /> Categories
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href='#'>
            <BsShop className='icon' /> Customer
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href='#'>
            <BsIncognito className='icon' /> Inventory
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href='#'>
            <BsPersonBadge className='icon' /> Product
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href='#'>
            <BsListCheck className='icon' /> Setting
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
