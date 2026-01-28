'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/MortifBrain2-logo.png" 
            alt="Motif Brain" 
            width={180} 
            height={50} 
            className={styles.logoImg}
            priority
          />
        </Link>
        
        {/* Desktop Links */}
        <div className={styles.desktopLinks}>
          <Link href="/services" className={styles.link}>Services</Link>
          <Link href="/projects" className={styles.link}>Work</Link>
          <Link href="/team" className={styles.link}>Team</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>

        <div className={styles.actions}>
          <Link href="/contact" className={styles.cta}>
            Start a Project
          </Link>

          {/* Hamburger Button */}
          <button 
            className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
          <div className={styles.mobileLinks}>
            <Link href="/services" className={styles.mobileLink} onClick={toggleMenu}>Services</Link>
            <Link href="/projects" className={styles.mobileLink} onClick={toggleMenu}>Work</Link>
            <Link href="/team" className={styles.mobileLink} onClick={toggleMenu}>Team</Link>
            <Link href="/contact" className={styles.mobileLink} onClick={toggleMenu}>Contact</Link>
            <Link href="/contact" className={`${styles.mobileCta}`} onClick={toggleMenu}>
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
