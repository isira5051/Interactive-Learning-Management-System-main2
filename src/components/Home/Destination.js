import heroImage9 from "../../assests/hero9.jpg"
import heroImage8 from "../../assests/hero8.jpg"
import heroImage7 from "../../assests/hero7.jpg"
import heroImage2 from "../../assests/hero2.jpg"
import "./DestinationStyles.css"
import DestinationData from "./DestinationData";

const Destination=()=>{
    return(
      <div className="destination">
        <h1>Literary Adventures Await</h1>
         <p>Step into worlds beyond imagination with our handpicked selection of reads. From spine-tingling mysteries to heartwarming narratives, let your curiosity be your guide as you explore the diverse landscapes of literature.</p>
        <DestinationData
        className="first-des"
          heading="Discover a World of Knowledge"
          text=" Immerse yourself in our extensive collection of books, articles, and resources. Whether you're seeking academic insights, thrilling adventures, or heartwarming stories, our library offers a diverse range of materials to satisfy your curiosity and enrich your mind. Explore new horizons and embark on a literary journey like no other."
          img1={heroImage2}
          img2={heroImage7}
        />

       <DestinationData
          className="first-des-reverse"
          heading="Rise to the Challenge"
          text="  Elevate your reading experience by taking on our exciting reading challenges. Whether you're aiming to delve into classic literature, explore new genres, or expand your cultural awareness, our curated challenges provide a roadmap to guide your reading adventure. Set goals, track your progress, and connect with fellow readers as you conquer each challenge one page at a time."
          img1={heroImage8}
          img2={heroImage9}
        />


    
      </div>
    )
}
export default Destination;