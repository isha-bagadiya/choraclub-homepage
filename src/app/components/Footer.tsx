import React from "react";
import styles from '../styles/footer.module.css'
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";




const Footer = () => {
  return (
    <div className={styles.footersection}>
      <div className={styles.section1}>
        <p className={styles.copyrighttext}>Copyright © 2023 Chora Club I All rights reserved</p>
        <div className={styles.iconlist}>
          <div className={styles.icon} ><FaDiscord /></div>
          <div className={styles.icon}><FaXTwitter /></div>
          <div className={styles.icon}><FaTelegramPlane /></div>
          <div className={styles.icon}></div>
        </div>
      </div>
      <div className={styles.section2}>
        <p>Subscribe Newsletter</p>
        <div className={styles.inputsection}>
            <input type="email" name="" id="" placeholder="Email"/>
            <button>Subscribe</button>
            <button>up</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
