import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/MortifBrain-logo.png" 
            alt="Mortif Brain" 
            width={180} 
            height={50} 
            className={styles.logoImg}
            priority
          />
        </Link>
        
        <div className={styles.links}>
          <Link href="/services" className={styles.link}>Services</Link>
          <Link href="/projects" className={styles.link}>Work</Link>
          <Link href="/team" className={styles.link}>Team</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>

        <Link href="/contact" className={styles.cta}>
          Start a Project
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
