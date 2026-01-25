'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Background Elements */}
      <div className={styles.bgGlow}></div>

      <div className={`container ${styles.content}`}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          We Build <br />
          <span className="text-gradient">The Future</span>
        </motion.h1>

        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Premium software development for forward-thinking companies.
          We turn complex problems into elegant solutions.
        </motion.p>

        <motion.div 
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Link href="/projects" className={styles.primaryBtn}>
            View Our Work
          </Link>
          <Link href="/contact" className={styles.secondaryBtn}>
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

