import React from 'react'
import'./Nav.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Nav = (props) => {
  const role=props.role; 
  return (
    <>
          <div className={`navbar ${role === 'user' ? 'user-navbar' : ''}`}>
             <div className="wrapper">
                
                    
                <div className='nav-items'>
                    <div className='nav-item'>
                         <AccountCircleIcon/>
                    </div>
                </div>
             </div>
       </div>
    </>
  
  )
}

export default Nav