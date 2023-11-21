import React, { useEffect, useState } from 'react'
import PublicForum from '../components/Forum/PublicForum'
import './Css/CommonForum.css'
import Navbar from '../components/Home/Navbar'
import Footer from '../components/Home/Footer'
import Sidebar from '../components/Dashboard/Sidebar'
import getUser from './utils/getUser'
const CommonForum = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const fetchedUser = await getUser();
      setUser(fetchedUser);
      console.log(fetchedUser)
    };
    fetchData();
  }, []);

  return (
    <>{user&&<Sidebar role={user.role}/>}
    <div className="nav-wrap">
    <Navbar />
    </div>
    <div className='common-forum-container'>
      <div className="forum-headings">
      <h1>Forum</h1>
      <p>In the digital realm, a forum is a bustling marketplace of ideas, where the currency is not coins but thoughts shared freely. It's a virtual campfire where curious minds gather, sparking conversations that illuminate the darkest corners of knowledge.</p>
    </div>
      <PublicForum
    /></div>
    
      <div className="nav-wrap">
      <Footer/>
      </div></>
      
    
    
  )
}

export default CommonForum