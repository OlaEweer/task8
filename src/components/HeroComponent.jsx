
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'

import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function HeroComponent() {
    return (
     <>
<div className="hero_container">
<div className="content ">
  <p className="title">Hey !! Mario still here, But don’t forget that</p>
  <p className="content">
    At focal X agency, we are working to build something different. Here you’ll have a group of creative people who specialize in:<br />
    <span className="specialties">
      Branding, Digital Marketing, Web/App Development, Ui/Ux <br />
      Content creation, Graphic design, Social media and More........ <br />
    </span>
    So you can take a tour in our website, OR just
    <span className="font-weight-bold"> Press Start :)</span>
  </p>
                </div>

          <div className="gameboy">
            
            <img className="game_mobile" src="./public/Hero/gamefor-mobile.png" alt="" />
          <img className="game" src="./public/Hero/gameBoy-min.png" alt="" />
          <img className="pattern" src="./public/Hero/pattren.png"/>
                    <img className="line" src="./public/Hero/pressStart.svg" />
           
                    <span className="start">start</span>
                    <img className="footer" src="./public/Hero/footer.svg" alt="" />
                    <img className="footer_mobile" src="./public/Hero/footer-mobile.png" alt="" />
                </div>
                <div className="footer-hero">
                    <div className="icon">
                    <div className="icon1">
                        <FontAwesomeIcon icon={faFacebookF} style={{ color: "#ff8500" }} className='font-icon' />
                        </div>
                        <div className="icon1">
                        <FontAwesomeIcon icon={faBehance} style={{ color: "#ff8500" }} className='font-icon' />
                        </div>
                      
                    <div className="icon1">
                    <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#ff8500" }} className='font-icon' /></div>
                        
                    <div className="icon1">
                        <FontAwesomeIcon icon={faInstagram} style={{ color: "#ff8500" }} className='font-icon' /></div>

                    <div className="icon1">
                        <FontAwesomeIcon icon={faTwitter} style={{ color: "#ff8500" }} className='font-icon' /></div>
                   
                  
                    
                   
        
                </div>
                <div className="chevron-container">
                        <div className="oval-shape">   </div>
                            <FontAwesomeIcon icon={faChevronDown} style={{ color: "#ffffff" }} />
                     
                        <p className="scroll">Scroll To Discover</p>
                    </div>
                    <div>
                        <p className="title">2021-2023 focal X agency All Right Reversed</p>
                    </div>
                </div>
            </div>
        </>
    );
}
