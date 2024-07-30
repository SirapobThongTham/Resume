import React, { useState, useEffect } from 'react'
import styles from './Project.module.css'

const Project = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        'src/Photo/P1.jpg',
        'src/Photo/P2.jpg',
        'src/Photo/P3.jpg',
        'src/Photo/P4.jpg',
        'src/Photo/P5.jpg',
        'src/Photo/P6.jpg',
        'src/Photo/P7.jpg',
        'src/Photo/P8.jpg',
        'src/Photo/P9.jpg',
        'src/Photo/P10.jpg',
        'src/Photo/P11.jpg',
        'src/Photo/P12.jpg',
    ];

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const slideInterval = setInterval(() => {
            goToNext();
        }, 3000);

        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div id='Project' className={styles.Project_con}>
            <h1 className={styles.Project_title}>My Project</h1>
            <h2 className={styles.text_1}>Development of a Classroom Reservation System on a Web Application</h2>
            <p>Currently, the field of electronics and computer systems Department of Electrical Engineering Faculty of Engineering and Industrial Technology Silpakorn University There is an outdated system for booking both off-schedule and on-schedule classrooms. By booking classrooms in the traditional way, reservations are made using paper, filling out forms and putting them in a file in front of the department room. Causing delays and being unable to view room booking information</p>
            <img className={styles.img} src="src/Photo/1.jpg" placeholder="Silpakorn University" />
            <p>From what the organizing team has been able to find additional research, Training management system and online seminar room booking From research of the Office of Academic Resources and Information Technology in the form of a website Come help develop a training management system and reserve online seminar rooms. When there is analysis, planning, scoping, designing, building the system, and testing the system's operation, The results of using the system can be summarized as to whether there are correct or incorrect operating results so that improvements and corrections can be made to ensure complete accuracy.</p>
            <div className={styles.slideshow}>
                <button onClick={goToPrevious} className={styles.leftArrow}>‹</button>
                <div
                    className={styles.slideshowImage}
                    style={{ backgroundImage: `url(${images[currentIndex]})` }}
                ></div>
                <button onClick={goToNext} className={styles.rightArrow}>›</button>
                <div className={styles.dotsContainer}>
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
                            onClick={() => goToSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project
