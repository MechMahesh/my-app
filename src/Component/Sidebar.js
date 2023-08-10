import React from 'react'
import './Sidebar.css'
import { SidebarData } from './SidebarData'

export default function Sidebar() {
    return (
        <div className="Sidebar">
            <div><h2>Logo</h2></div>
            <ul className='SidebarList'>
        {SidebarData.map((val,key)=>{
         return(  
         <li  className= "row" 
           id= {window.location.pathname === val.link ? "active" : ""}
          key={key} onClick={()=>{
            window.location.pathname = val.link;
         }}>
            <div id='icon'>{val.icon}</div><div id='title'>{val.title}</div>
         </li>
         )
        })}
        </ul>
        </div>
        );
    }