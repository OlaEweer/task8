import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faBehance } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

export default function Footer() {
  return (
    
          <>
     <footer>
        <div className='footer_1'>
        <div  className='footer_logo'>
      <div>  <img className ="footer_img"src="./public/logo.png" alt="" /><span className="agency">.agency</span></div>  
          <p>
            <p className="footer_title head">Head Office</p>
            <a href="https://maps.app.goo.gl/Qwp6NNGQ9Q3P79DaA">Syria - Latakia - grh2+hjx35.5199518</a>
          </p>
        </div>
              <div className='footer_2'>
                  <div>
          <p className="footer_title sale"> Sales</p>contact@focal-x.com
          <a href="tel:+963 953 666 056">+963 953 666 056 </a>
          <p className="footer_title public">Public Relations</p>
          pr@focal-x.com <a href="tel:+963 953 666 052">+963 953 666 052</a>
        </div>

        <div>
          <p className="footer_title customer"> Customer Support</p>
          <p>
            
            info@focal-x.com
            <a href="tel:+963 953 666 054">+963 953 666 054</a>
          </p>
          <p className="footer_title human">Human Resources</p>hr@focal-x.com
        </div>
        <div>
          <p className="footer_title useful"> Useful Links</p>
          Clients & Partners 
          Check Certificat ID
          Check for employee
          Our Brand ID guidlines
        </div>
    
                  
        <div className="icon-footer">
                    <h4 className="footer_title">Keep In Touch</h4>
                    <div className="footer_icon">
                    <div className="icon1">
                        <FontAwesomeIcon icon={faFacebookF} className='font-icon' />
                        </div>
                        <div className="icon1">
                        <FontAwesomeIcon icon={faBehance} className='font-icon' />
                        </div>
                     <div className="icon1">
                        <FontAwesomeIcon icon={faInstagram} className='font-icon' /></div>
  <div className="icon1">
                        <FontAwesomeIcon icon={faTwitter} className='font-icon' /></div>
                   
                    <div className="icon1">
                    <FontAwesomeIcon icon={faLinkedinIn} className='font-icon' /></div>
                        
                    
                   
                  
                    
                   
        
                </div>
              </div>
              </div>
      </div>
        <div className='footer_Right_Reserved'>
           
        <p className="Right_Reserved">
        &copy; 2021 - 2023 focal X L.L.C All Right Reserved</p>
        <span class="liner"></span>
       </div>
          </footer>
      {/* <footer className=' '>
      
        </footer> */}
      
      
    
         
          </>
  )
}
