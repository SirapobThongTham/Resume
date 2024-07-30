import React, { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import { FaBars } from "react-icons/fa6";

const Navbar = () => {

    const [isToggled, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!isToggled)
    };

    const [isSticky, setSticky] = useState(false);

    const handleScroll = () => {
        setSticky(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <nav className={isSticky ? styles.sticky : ''}>
            <div className={styles.container}>
                <div className={styles.nav_con}>
                    <div className={styles.logo}>
                        <a href="#Profile">RESUME</a>
                    </div>
                    <ul>
                        <li><a href="#Experience">Experience</a></li>
                        <li><a href="#Project">Project</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </div>
                {/* Mobile Menu */}
                <FaBars className={styles.bars} onClick={handleToggle} />
                    {isToggled ? (
                        <>
                            <ul className={styles.mobile_menu}>
                                <li><a href="#Experience">Experience</a></li>
                                <li><a href="#Project">Project</a></li>
                                <li><a href="#Contact">Contact</a></li>
                            </ul>
                        </>
                    ) : null}
            </div>
        </nav>
    )
}

export default Navbar
