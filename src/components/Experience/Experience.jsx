import React from 'react'
import styles from './Experience.module.css'

const Experience = () => {
  return (
    <div id='Experience' className={styles.Experience_con}>
        <h1 className={styles.Experience_title}>My Experience</h1>
        <h2 className={styles.text_1}>EDUCATION INTERNSHIP</h2>
        <img className={styles.img} src="src/Photo/INTERNSHIP.jpg" placeholder="NT Plc Kanchanaburi" />
        <h3 className={styles.text_2}>NT Plc Kanchanaburi</h3>
        <p>Internship period : 18 April 2023 to 19 June 2023<br />
          Building and Power Department</p>
    </div>
  )
}

export default Experience
