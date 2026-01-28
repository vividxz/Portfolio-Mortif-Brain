import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

// Icons using simple SVG
const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const PipelineIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
);

const ScaleIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);

const images = [
  '/bulk1.jpeg', // Main Dashboard?
  '/bulk2.jpeg', // Pipeline?
  '/bulk3.jpeg', // Candidate list?
  '/bulk4.jpeg', // Profile?
  '/bulk5.jpeg', // Interview?
  '/bulk6.jpeg', // Another view
];

export default function BulkHiringPage() {
  return (
    <main className="container">
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackdrop} />
        <h1 className={styles.title}>
          Reimagining <br />
          <span className={styles.highlight}>Bulk Recruitment</span>
        </h1>
        <p className={styles.tagline}>
          An end-to-end platform designed to streamline high-volume hiring for enterprises and staffing firms.
          Onboard, manage, and hire at scale with a unified dashboard.
        </p>
        
        <div className={styles.ctaGroup}>
          <Link 
            href="https://bulk-hiring.connectify.global/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.primaryButton}
          >
            Launch Platform
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
        <h2 className={styles.sectionTitle}>Built for Scale & Efficiency</h2>
        <div className={styles.featuresGrid}>
          <div className={`glass-panel ${styles.featureCard}`}>
            <div className={styles.iconWrapper}>
             <PipelineIcon />
            </div>
            <h3 className={styles.featureTitle}>Unified Dashboard</h3>
            <p className={styles.featureDesc}>
              Organizations can easily onboard, create company profiles, and manage all recruitment activities from a single, centralized control center.
            </p>
          </div>

          <div className={`glass-panel ${styles.featureCard}`}>
            <div className={styles.iconWrapper}>
             <CheckIcon />
            </div>
            <h3 className={styles.featureTitle}>End-to-End Workflow</h3>
            <p className={styles.featureDesc}>
              From candidate shortlisting to interview scheduling and execution. Facilitate the entire hiring lifecycle without leaving the platform.
            </p>
          </div>

          <div className={`glass-panel ${styles.featureCard}`}>
            <div className={styles.iconWrapper}>
              <ScaleIcon />
            </div>
            <h3 className={styles.featureTitle}>High-Volume Hiring</h3>
            <p className={styles.featureDesc}>
              Manage candidate pipelines at scale. Ideal for enterprises and staffing firms conducting mass hiring drives with requirements for reduced hiring time.
            </p>
          </div>
        </div>
      </section>

       {/* Stats Section Placeholder (Visual Break) */}
       <section className={styles.statsSection}>
        <div className={styles.statCard}>
          <span className={styles.statValue}>End-to-End</span>
          <span className={styles.statLabel}>Hiring Management</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>100%</span>
          <span className={styles.statLabel}>Transparent Workflow</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>Scalable</span>
          <span className={styles.statLabel}>For Mass Recruiting</span>
        </div>
      </section>

      {/* Gallery Section */}
      <section>
        <h2 className={styles.sectionTitle}>Platform Visuals</h2>
        <div className={styles.galleryGrid}>
          {images.map((src, index) => (
            <div key={index} className={`glass-panel ${styles.galleryItem}`}>
              <Image
                src={src}
                alt={`Bulk Hiring Connectify Interface ${index + 1}`}
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
