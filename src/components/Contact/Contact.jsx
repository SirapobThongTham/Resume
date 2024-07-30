import React from 'react'
import styles from './Contact.module.css'
import { FaPhone, FaEnvelope } from "react-icons/fa6";

function Contact() {
    return (
        <div id='Contact' className={styles.contact_wrapper}>
            <div className={styles.contact_con}>
                <div className={styles.contact_info}>
                    <h3>Get in touch</h3>
                    <p className={styles.contact_address}>
                        9/1 Saeng Chuto Soi 46, Saeng Chuto Road, <br/>
                        BanTai Subdistrict, Muang District, Kanchanaburi, 71000
                    </p>
                    <p><FaPhone /> (+66) 81 254 4542</p>
                    <p><FaEnvelope /> SirapobThongTham@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
