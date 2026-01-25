'use client';

import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Top 1% Talent',
    description: 'We recruit only the most exceptional engineers and designers from around the globe.',
  },
  {
    title: 'Innovative Mindset',
    description: 'We don\'t just follow trends; we set them. Our team constantly explores new technologies.',
  },
  {
    title: 'Rapid Delivery',
    description: 'Our agile processes ensure we ship high-quality software faster than the competition.',
  },
];

const WhyUs = () => {
  return (
    <section style={{ padding: '6rem 0', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Why We Are The <span className="text-gradient">Best</span></h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            We bring together world-class expertise to build software that defies expectations.
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="glass-panel"
              style={{ padding: '2.5rem', textAlign: 'left' }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>{reason.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
