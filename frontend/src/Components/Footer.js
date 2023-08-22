import React from 'react'
import './Footer.css'
import './PhotoGallery.css'

import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

function Footer() {
    return (
        <div className='footer'>
            <div>
            <h1 className='photogallery-title' style={{color:"black"}}>Contact With Us</h1>
                <div className='container footer-data'>
                    <div className="contact-details">
                        <h1>Contact Us</h1>
                        <p className='social-icon'><HomeIcon style={{ fontSize: 20,color:"00acee"}} />Lalkothi, Tatarpur, Bhagalpur-812002</p>
                        <p className='social-icon'><EmailIcon style={{ fontSize: 20,color:"00acee"}} />example@gmail.com</p>
                    </div>
                    <div className='librarian-details'>
                        <h1>Librarian</h1>
                        <p>Rohit Kumar</p>
                        <p className='social-icon'><CallIcon style={{ fontSize: 20,color:"00acee"}} />+91-8544240663</p>
                        <p className='social-icon'><CallIcon style={{ fontSize: 20,color:"00acee"}} />+91-9546164599</p>
                    </div>
                    <div className='usefull-links'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7217.755945688085!2d86.96272594283992!3d25.241034710730762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f04bb730f223f9%3A0x1958a3c14636c244!2s24%20hours%20library!5e0!3m2!1sen!2sin!4v1692396040173!5m2!1sen!2sin" width="500" height="350" style={{"border":"0","height": "192px","width": "300px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    
                </div>
                <div className="contact-social" >
                    <a href='#home' className='social-icon'><TwitterIcon style={{ fontSize: 40,color:"00acee"}} /></a>
                    <a href='#home' className='social-icon'><WhatsAppIcon style={{ fontSize: 40,color:"#075e54"}} /></a>
                    <a href='https://t.me/library24hours' className='social-icon'><TelegramIcon style={{ fontSize: 40,color:"#0088cc"}} /></a>
                    <a href='#home' className='social-icon'><InstagramIcon style={{ fontSize: 40,color:" #e95950"}} /></a>
                </div>
            </div>
            <div className='copyright-details'>
                <p className='footer-copyright'>&#169; 2023 copyright all right reserved<br /><span>Designed by Pritam Kumar</span></p>
            </div>
        </div>
    )
}

export default Footer