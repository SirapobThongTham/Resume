import React from 'react'
import styles from './Profile.module.css'
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';

const Profile = () => {
    return (
        <div id='Profile' className={styles.Profile_wrapper}>
            <div className={styles.container}>
                <div className={styles.Profile_con}>
                    <div className={styles.Profile_info}>
                        <p className={styles.text_1}>Hello, its' me</p>
                        <h3 className={styles.text_2}>asdasdasdasdasdasdasds</h3>
                        <p className={styles.text_3}>
                            <TypeAnimation
                                sequence={[
                                    'About Me',
                                    1000,
                                    'Electronics and Computer Systems Engineering',
                                    1000,
                                ]}
                                speed={50}
                                repeat={Infinity}
                            />
                        </p>
                        <p className={styles.text_4}>
                            I'm a recent graduate from Silpakorn University <br />with a degree in Electronics and Computer Systems Engineering.<br /> Eager to gain practical experience and enhance my skills,<br /> I'm committed to continuous learning and personal development.<br /> I'm enthusiastic about embracing new knowledge and am ready to contribute effectively to any opportunities that come my way.
                        </p>
                        <ul className={styles.Profile_social}>
                            <li><a href="https://github.com/SirapobThongTham" target="_blank"><FaGithub /></a></li>
                            <li><a href="https://www.linkedin.com/in/sirapob-thongtham-23626a319/" target="_blank"><FaLinkedinIn /></a></li>
                            <li><a href="https://www.facebook.com/OoSam76oO/?viewas=&should_open_composer=false&show_switched_toast=false&show_invite_to_follow=false&show_switched_tooltip=false&show_podcast_settings=false&show_community_review_changes=false&show_community_rollback=false&show_follower_visibility_disclosure=false&bypass_exit_warning=true" target="_blank"><FaFacebookF /></a></li>
                        </ul>
                    </div>
                    <div>
                        <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                            <img src="src\Photo\0308   01_0.jpg" alt="" className={styles.Profile_img} />
                        </Tilt>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
