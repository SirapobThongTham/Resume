import React from 'react'
import styles from './Skills.module.css'
import { FaHtml5, FaCss3, FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import Tilt from 'react-parallax-tilt';

const Skills = () => {
    return (
        <div id='Skills' className={styles.skills_con}>
            <h3 className={styles.skills_title}>My Skill set</h3>
            <ul className={styles.skills_list}>
                <li>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                        <FaHtml5 placeholder="HTML" />
                    </Tilt>
                </li>
                <li>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                        <FaCss3 placeholder="CSS" />
                    </Tilt>
                </li>
                <li>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                        <FaReact placeholder="REACT" />
                    </Tilt>
                </li>
                <li>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                        <FaGitAlt placeholder="GITHUB" />
                    </Tilt>
                </li>
                <li>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                        <FaNodeJs placeholder="NODE.JS" />
                    </Tilt>
                </li>
                <li>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                        <SiMysql placeholder="MySQL" />
                    </Tilt>
                </li>
            </ul>
        </div>
    )
}

export default Skills
