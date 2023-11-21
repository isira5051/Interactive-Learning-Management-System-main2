import React from 'react'
import Navbar from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';
import './Css/Notification.css'
const Notification = () => {
    const messages = [
        "Welcome to our book project!",
        "Don't forget to check out our latest releases.",
        "Join our book club for exclusive updates and discussions.",
        "Explore our bestsellers for this month.",
        "Follow us on social media for news and events.",
        "Get 10% off your first purchase with code FIRST10.",
        "New arrivals every week. Stay tuned!",
        "Read our blog for book recommendations and author interviews.",
        "Subscribe to our newsletter for special offers and updates.",
        "Join us for our next virtual book reading event on Friday!",
      ];
  return (
    <>
    <Navbar/>
    <div className='notification-container'>
    <h1>Notification Page</h1>
    <div className='message-cards'>
          {messages.map((message, index) => (
            <div key={index} className='message-card'>
              {message}
            </div>
          ))}
        </div>
  </div>
  <Footer/>
  </>
    
  )
}

export default Notification