import React from 'react'
import { useState } from 'react'
import {FaBars, FaCommentAlt, FaRegChartBar, FaShoppingBag, FaTh, Fath, FaThList, FaUserAlt} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
 function Sidebar({children}) {
  const [isopen,setIsopen]=useState(false)
  const toggle=()=>setIsopen(!isopen)
  const Item=[
    {
      path:'/',
      name:'Dashboard',
      icon:<FaTh/>
    },
    {
      path:'/about',
      name:'About',
      icon:<FaUserAlt/>
    },
    {
      path:'/analytics',
      name:'Analytics',
      icon:<FaRegChartBar/>
    },
    {
      path:'/comment',
      name:'Comment',
      icon:<FaCommentAlt/>
    },
    {
      path:'/product',
      name:'Product',
      icon:<FaShoppingBag/>
    },
    {
      path:'/productlist',
      name:'ProductList',
      icon:<FaThList/>
    },

  ]
  return (
    <div className='container'>
      <div style={{width:isopen ? "300px" :"50px "}} className='sidebar'>
        <div className="top_section">
          <h1 style={{display:isopen ? "block" :"none"}} className="logo">Logo</h1>
          <div style={{marginLeft:isopen ? "150px" :"0px "}} className="bars">
          <FaBars  onClick={toggle}/>
          </div>
        </div>
        {
          Item.map((item,index)=>(
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <div className="icon">{item.icon}</div>
              <div style={{display:isopen ? "block" :"none"}} className="link_text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>
   <menu>{children}</menu>
    </div>
  )
}

export default Sidebar