import Hero from '../components/Home/Hero';
import Navbar from '../components/Home/Navbar';
import Squre from '../components/Home/Squre';
import Footer from'../components/Home/Footer';
import heroImage9 from "../assests/hero9.jpg";
function Service(){
    return(
        <>
       <Navbar/>
        <Hero
           cName="hero-mid"
           heroImage={heroImage9}
           btnClass="hide"
           title="Service"
        />
        <Squre/>
        <Footer/>
        </>
    )
    }
    
    export default Service;