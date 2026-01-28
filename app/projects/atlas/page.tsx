import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

// Custom Icons for Food/POS
const SyncIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"></path>
  </svg>
);

const DashboardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="3" y1="9" x2="21" y2="9"></line>
    <line x1="9" y1="21" x2="9" y2="9"></line>
  </svg>
);

const FastIcon = () => (
   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
   </svg>
);


const images = [
  '/atlas1.png',
  '/atlas2.png',
  '/atlas3.png',
  '/atlas4.png',
  '/atlas5.png',
  '/atlas6.png',
];

export default function AtlasPosPage() {
  return (
    <main className="container">
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackdrop} />
        <h1 className={styles.title}>
          Centralized <br />
          <span className={styles.highlight}>Order Aggregation</span>
        </h1>
        <p className={styles.tagline}>
          One dashboard to rule all deliveries. Sync orders from Zomato, Swiggy, and more in real-time for seamless restaurant operations.
        </p>
        
        <div className={styles.ctaGroup}>
          <Link 
            href="https://atlas-pos.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.primaryButton}
          >
            Visit Website
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </Link>
        </div>
      </section>

      {/* Key Features */}
      <section>
        <h2 className={styles.sectionTitle}>Streamlined Operations</h2>
        <div className={styles.featuresGrid}>
          <div className={`glass-panel ${styles.featureCard}`}>
            <div className={styles.iconWrapper}>
             <SyncIcon />
            </div>
            <h3 className={styles.featureTitle}>Multi-Channel Sync</h3>
            <p className={styles.featureDesc}>
              Automatically aggregates orders from multiple food delivery partners into a single, unified interface.
            </p>
          </div>

          <div className={`glass-panel ${styles.featureCard}`}>
            <div className={styles.iconWrapper}>
             <DashboardIcon />
            </div>
            <h3 className={styles.featureTitle}>Unified Dashboard</h3>
            <p className={styles.featureDesc}>
               View, process, and track all incoming orders in real-time, reducing manual effort and minimizing errors.
            </p>
          </div>

          <div className={`glass-panel ${styles.featureCard}`}>
            <div className={styles.iconWrapper}>
              <FastIcon />
            </div>
            <h3 className={styles.featureTitle}>Accelerated Service</h3>
            <p className={styles.featureDesc}>
               Enables faster order acceptance, preparation tracking, and instant status updates for operational efficiency.
            </p>
          </div>
        </div>
      </section>

       {/* Stats Section */}
       <section className={styles.statsSection}>
        <div className={styles.statCard}>
          <span className={styles.statValue}>100%</span>
          <span className={styles.statLabel}>Order Sync</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>Zero</span>
          <span className={styles.statLabel}>Missed Orders</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>Real-Time</span>
          <span className={styles.statLabel}>Analytics</span>
        </div>
      </section>

      {/* Gallery Section */}
      <section>
        <h2 className={styles.sectionTitle}>Platform Interface</h2>
        <div className={styles.galleryGrid}>
          {images.map((src, index) => (
            <div key={index} className={`glass-panel ${styles.galleryItem}`}>
              <Image
                src={src}
                alt={`Atlas POS Interface ${index + 1}`}
                fill
                className={styles.projectImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
