import React from 'react';
import Styles from './Footer.module.css'
import { FaLinkedin, FaMapMarked, FaTwitter, FaPhone, FaEnvelope } from 'react-icons/fa'
const Footer = () => {
    return (
        <React.Fragment>
            <div className={Styles.footer_container}>
                <p id={Styles.fcontent}>Privacy | Cookies | Security | Terms & Conditions</p>
                <div className={Styles.footer}>

                    <div className={Styles.Left}>
                        <p><FaMapMarked className={Styles.sic}/>New Delhi, India</p>
                        <p><FaPhone className={Styles.sic}/>+818-808-897</p>
                        <p><FaEnvelope className={Styles.sic}/>customercare@indiabank.ac.in</p>
                        {/* <p>New Delhi, India</p>
                        <p>+818-808-897</p>
                        <p>customercare@indiabank.ac.in</p> */}
                    </div>
                    <div className={Styles.Right}>
                        <a href="/" target='__blank'><FaLinkedin className={Styles.ldn} title="LinkedIn" /></a>
                        <a href="/" target='__blank'><FaTwitter className={Styles.gh} title="Twitter" /></a>

                    </div>
                </div>
                <h4>© 1999 - 2021 India Bank. All rights reserved</h4>
            </div>
        </React.Fragment>
    )
}
export default Footer;