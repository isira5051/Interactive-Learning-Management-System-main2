import React, {Component} from 'react';  //use hook to take the current informations
import { Link } from 'react-router-dom';
import { MenuItems } from './Menuitems';
import './Navbar.css';
class Navbar extends Component{
  state={clicked:false};
  handleClick=()=>{
    this.setState({clicked:!this.state.clicked})
  }
  render(){
    return(
      <nav className="NavbarItems">
        <h1 className="navbar-logo">LibraLink <i className="fas fa-book-open-reader"/></h1>
        <div className="close-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars" }></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item,index) =>{
            return(
            <li key={index}>
            <Link to={item.url} className={item.cName}>
            <i className={item.icon}></i>{item.title}
            </Link>
          </li>
            )
          })}
       <Link to="/login">
  <button>Sign up</button>
</Link>
        </ul>
        
      </nav>
    )
  }
}

export default Navbar;

/* 

function Navbar() {
const [click,setClick]= useState(false);  //usestate has variable click and the function setclick to change the value of the click
const [button,setButton]=useState(true);
const handleClick = () => setClick(!click);
const closeMobileMenu =()=>setClick(false);

const showButton = () => {
  if(window.innerWidth <=960){
    setButton(false);
  }else{
    setButton(true);
  }
};
useEffect(() => {	
  showButton();	
}, []);
window.addEventListener('resize', showButton);

  return (
    <>
       <nav className='navbar'>
        <div classsName ='navbar-container'>
            <Link to="/" className="navbar-logo">BOOKHUB<i className="fas fa-book-open-reader"/>
            </Link>  
            <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-bars' : 'fas fa-times'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home
                </Link> 
                </li>
                <li className='nav-item'>
                <Link to="/services" className="nav-links" onClick={closeMobileMenu}>Services
                </Link> 
                </li>
                <li className='nav-item'>
                <Link to="/services" className="nav-links" onClick={closeMobileMenu}>Contact
                </Link> 
                </li>
                <li className='nav-item'>
                <Link to="/signup" className="nav-links" onClick={closeMobileMenu}>SIGN UP
                </Link> 
                </li>
            </ul>
            {button &&<Button buttonStyle='btn--outline'>SIGN UP</Button> }
        </div>
       </nav>
    </>
  )
}

export default Navbar

*/
