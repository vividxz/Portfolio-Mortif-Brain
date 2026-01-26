'use client';

import { motion } from 'framer-motion';
import styles from './Services.module.css';

const services = [
  {
    title: 'Custom Software',
    description: 'Tailored solutions built to scale with your business.',
    icon: '⚡',
  },
  {
    title: 'Web Applications',
    description: 'High-performance web apps with stunning UIs.',
    icon: '🌐',
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform apps for iOS and Android.',
    icon: '📱',
  },
  {
    title: 'AI Integration',
    description: 'Smart algorithms to automate and enhance workflows.',
    icon: '🤖',
  },
];

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <motion.h2 
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Expertise
        </motion.h2>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.cardContent}>
                <div className={styles.icon}>{service.icon}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

