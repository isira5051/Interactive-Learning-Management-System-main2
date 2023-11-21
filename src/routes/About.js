import Hero from '../components/Home/Hero';
import Navbar from '../components/Home/Navbar';
import heroImage7 from "../assests/hero7.jpg";
import Footer from "../components/Home/Footer";
import AboutUs from "../components/Home/AboutUs";
function About(){
    return(
        <>
        <Navbar/>
        <Hero
           cName="hero-mid"
           heroImage={heroImage7}
           btnClass="hide"
           title="About"
        />
        <AboutUs/>
        <Footer/>
        </>
    )
    }
    
    export default About;