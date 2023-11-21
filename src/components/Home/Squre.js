import "./SqureStyle.css";
import SqureData from "./SqureData";
import book1 from "../../assests/book1.jpg";
import book2 from "../../assests/book2.jpg";
import book3 from "../../assests/book3.jpg";

function Squre(){
    return(
        <div className="squre">
            <h1>New Books</h1>
            <p>Discover our latest additions to the library. Stay connected with us!</p>
            <div className="squrecard">
            <div className ="grid-item">
            <SqureData
                 image={book1}
                 heading= "Realms Beyond Imagination: J.R.R. Tolkien's Epic Masterpiece"
                 text="Journey through J.R.R. Tolkien's The Lord of the Rings, a tale of fellowship and adventure. As Frodo Baggins embarks on a perilous quest, Tolkien's world-building shines through vibrant cultures and landscapes. Themes of heroism, friendship, and the battle between good and evil are masterfully woven into this unforgettable narrative."
                />
            </div>
            <div className ="grid-item">
                
            <SqureData
                 image={book3}
                 heading= "Wizards and Wonders: J.K. Rowling's Magical World"
                 text="Step into J.K. Rowling's Harry Potter series and discover a mesmerizing realm where young wizards unravel mysteries at Hogwarts School. With loyal friends by his side, Harry Potter faces his destiny while battling the dark forces of Lord Voldemort. Through Rowling's artful prose, this series conjures themes of courage, friendship, and the enduring power of light."
                />
            </div>
            <div className ="grid-item">
            <SqureData
                 image={book2}
                 heading= "Intrigue and Honor: George R.R. Martin's Epic Fantasy"
                 text="Delve into George R.R. Martin's A Song of Ice and Fire, the series behind Game of Thrones. Amidst power struggles and alliances in Westeros, noble houses clash for dominance. With intricate plots and morally complex characters, Martin weaves themes of loyalty, ambition, and the high cost of power."/>
            </div>
            </div>

             
               
        </div>
    )
}
export default Squre;