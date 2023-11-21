import "./FooterStyles.css"
const Footer =()=>{
    return(
        <div className="footer">
            <div className="top">
               <div>
                 <h1>BOOKMATE<i className="fas fa-book-open-reader"/></h1>
                 <p>Unlock The World Of Knowledge</p>
               </div>
               <div>
                  <a href="/">
                    <i className="fa-brands fa-facebook-square" ></i>
                  </a>
                  <a href="/">
                    <i className="fa-brands fa-instagram-square" ></i>
                  </a>
                  <a href="/">
                    <i className="fa-brands fa-twitter-square" ></i>
                  </a>
               </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Projects</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">Github</a>
                    <a href="/">issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">support</a>
                    <a href="/">Troubleshoot</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>

            </div>
        </div>
    )
}
export default Footer;