import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

// Custom Icons for Kitchen/Management
const InventoryIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);

const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const CheckIcon = () => (
   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
   </svg>
);

const appImages = [
  '/ck1.jpg',
  '/ck2.jpg',
  '/ck3.jpg',
  '/ck4.jpg',
];

const webImages = [
  '/ckweb1.jpg',
  '/ckweb2.jpg',
  '/ckweb3.jpg',
  '/ckweb4.jpg',
];

export default function CloudKitchenPage() {
  return (
    <main className="container">
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackdrop} />
        <h1 className={styles.title}>
          All-in-One <br />
          <span className={styles.highlight}>Supply Chain Management</span>
        </h1>
        <p className={styles.tagline}>
          The complete operational ecosystem for cloud kitchens. Manage inventory, HRMS, and audits from one centralized platform.
        </p>
        
        <div className={styles.ctaGroup}>
          <Link 
            href="https://cloud-kitchen.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.primaryButton}
          >
            Explore Platform
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
        <h2 className={styles.sectionTitle}>Operational Excellence</h2>
        <div className={styles.featuresGrid}>
          <div className={`glass-panel ${styles.featureCard}`}>
            <div className={styles.iconWrapper}>
             <InventoryIcon />
            </div>
            <h3 className={styles.featureTitle}>Inventory Control</h3>
            <p className={styles.featureDesc}>
              Track stock levels, consumption, wastage, and procurement in real-time to ensure cost efficiency.
            </p>
          </div>

          <div className={`glass-panel ${styles.featureCard}`}>
            <div className={styles.iconWrapper}>
             <UserIcon />
            </div>
            <h3 className={styles.featureTitle}>Integrated HRMS</h3>
            <p className={styles.featureDesc}>
               Manage employee records, attendance, shifts, and performance across multiple kitchen locationsseamlessly.
            </p>
          </div>

          <div className={`glass-panel ${styles.featureCard}`}>
            <div className={styles.iconWrapper}>
              <CheckIcon />
            </div>
            <h3 className={styles.featureTitle}>Audit & Compliance</h3>
            <p className={styles.featureDesc}>
               Comprehensive tools to monitor processes, track discrepancies, and maintain standardized operations network-wide.
            </p>
          </div>
        </div>
      </section>

       {/* Stats Section */}
       <section className={styles.statsSection}>
        <div className={styles.statCard}>
          <span className={styles.statValue}>Real-Time</span>
          <span className={styles.statLabel}>Inventory Tracking</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>100%</span>
          <span className={styles.statLabel}>Audit Visibility</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>Central</span>
          <span className={styles.statLabel}>Dashboard Control</span>
        </div>
      </section>

      {/* Gallery Section - Split into Web and App to handle aspect ratios */}
      <section>
        <h2 className={styles.sectionTitle}>Web Dashboard</h2>
        <p className={styles.subSectionTitle}>Centralized control center for management.</p>
        <div className={styles.galleryGrid}>
          {webImages.map((src, index) => (
            <div key={index} className={`glass-panel ${styles.galleryItem}`}>
              <Image
                src={src}
                alt={`Cloud Kitchen Web Interface ${index + 1}`}
                fill
                className={styles.projectImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        <h2 className={styles.sectionTitle}>Mobile Application</h2>
        <p className={styles.subSectionTitle}>On-the-go management for kitchen staff.</p>
        <div className={styles.galleryGrid}>
           {appImages.map((src, index) => (
            <div key={index} className={`glass-panel ${styles.galleryItemApp}`}>
              <Image
                src={src}
                alt={`Cloud Kitchen App Interface ${index + 1}`}
                fill
                className={styles.projectImage}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
