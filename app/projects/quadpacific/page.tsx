import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

// Custom Icons for Real Estate
const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
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


const images = [
  '/quad1.jpeg',
  '/quad2.jpeg',
  '/quad3.jpeg',
  '/quad4.jpeg',
  '/quad5.jpeg',
  '/quad6.jpeg',
  '/quad7.jpeg',
];

export default function QuadPacificPage() {
  return (
    <main className="container">
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackdrop} />
        <h1 className={styles.title}>
          Premium <br />
          <span className={styles.highlight}>Property Management</span>
        </h1>
        <p className={styles.tagline}>
          A comprehensive platform for property owners to showcase listings and for users to discover and book seamless accommodations.
        </p>
        
        <div className={styles.ctaGroup}>
          <Link 
            href="https://quadpacific.com/" 
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
        <h2 className={styles.sectionTitle}>Seamless Property Experience</h2>
        <div className={styles.featuresGrid}>
          <div className={`glass-panel ${styles.featureCard}`}>
            <div className={styles.iconWrapper}>
             <HomeIcon />
            </div>
            <h3 className={styles.featureTitle}>Property Listing</h3>
            <p className={styles.featureDesc}>
              Owners can easily list properties with detailed descriptions, images, pricing, and house rules through an intuitive unified dashboard.
            </p>
          </div>

          <div className={`glass-panel ${styles.featureCard}`}>
            <div className={styles.iconWrapper}>
             <SearchIcon />
            </div>
            <h3 className={styles.featureTitle}>Smart Discovery</h3>
            <p className={styles.featureDesc}>
                Advanced search and filtering allow users to browse properties, check real-time availability, and find their perfect stay effortlessly.
            </p>
          </div>

          <div className={`glass-panel ${styles.featureCard}`}>
            <div className={styles.iconWrapper}>
              <UserIcon />
            </div>
            <h3 className={styles.featureTitle}>Host & Guest Connect</h3>
            <p className={styles.featureDesc}>
               Facilitates direct communication, secure booking management, and payment handling, ensuring trust and reliability for both parties.
            </p>
          </div>
        </div>
      </section>

       {/* Stats Section */}
       <section className={styles.statsSection}>
        <div className={styles.statCard}>
          <span className={styles.statValue}>Seamless</span>
          <span className={styles.statLabel}>Booking Experience</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>Real-Time</span>
          <span className={styles.statLabel}>Availability Checks</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>Scalable</span>
          <span className={styles.statLabel}>For Rentals & Stays</span>
        </div>
      </section>

      {/* Gallery Section */}
      <section>
        <h2 className={styles.sectionTitle}>Platform Overview</h2>
        <div className={styles.galleryGrid}>
          {images.map((src, index) => (
            <div key={index} className={`glass-panel ${styles.galleryItem}`}>
              <Image
                src={src}
                alt={`QuadPacific Interface Screenshot ${index + 1}`}
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
