import Hero from '../components/Home/Hero';
import Navbar from '../components/Home/Navbar';
import Footer from '../components/Home/Footer';
import ContactForm from '../components/Home/ContactForm';
import heroImage13 from"../assests/hero5.jpg";
// import heroImage13 from "../assests/hero5.jpg";
function Contact(){
    return(
        <>
         <Navbar/>
        <Hero
           cName="hero-mid"
           heroImage={heroImage13}
           btnClass="hide"
           title="Contact"
        />
        <ContactForm/>
        <Footer/>
        </>
    )
    }
    
    export default Contact;