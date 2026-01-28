import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <div className={styles.logoContainer}>
              <Image 
                src="/MortifBrain2-logo.png" 
                alt="Motif Brain" 
                width={150} 
                height={42} 
                className={styles.logoImg}
              />
            </div>
            <p>Building the future, one line of code at a time.</p>
          </div>
          <div className={styles.copy}>
            &copy; {new Date().getFullYear()} Motif Brain. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
