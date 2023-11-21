import Hero from '../components/Home/Hero';
import Navbar from '../components/Home/Navbar';
import heroImage10 from "../assests/hero10.jpg";
import Destination from '../components/Home/Destination';
import Footer from "../components/Home/Footer";
import Squre from "../components/Home/Squre";
function Home(){
return(
    <>
    <Navbar/>
    <Hero
       cName="hero-mid"
       heroImage={heroImage10}
       btnClass="show"
       title="Unlock the World of Knowledge"
       text="Welcome to our online library, your digital portal to a treasure trove of books, articles, and resources. Immerse yourself in stories, learn from experts, and embark on a journey of exploration."
       btnTxt="Get started"
       url="/login"
    />
    <Destination/>
    <Squre/>
    <Footer/>
    </>
)
}

export default Home;