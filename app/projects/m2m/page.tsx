import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

// Custom Icons for Video/Communication
const VideoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7"></polygon>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
  </svg>
);

const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const ShareIcon = () => (
   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"></circle>
      <circle cx="6" cy="12" r="3"></circle>
      <circle cx="18" cy="19" r="3"></circle>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
   </svg>
);


const images = [
  '/m2m1.jpeg',
  '/m2m2.jpeg',
  '/m2m3.png',
  '/m2m4.png',
  '/m2m5.jpeg',
  '/m2m6.jpeg',
];

export default function M2MPage() {
  return (
    <main className="container">
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackdrop} />
        <h1 className={styles.title}>
          Reimagining <br />
          <span className={styles.highlight}>Video Communication</span>
        </h1>
        <p className={styles.tagline}>
          A modern platform for seamless knowledge sharing, real-time interaction, and collaborative mentoring sessions.
        </p>
        
        <div className={styles.ctaGroup}>
          <Link 
            href="https://m2m.connectify.global/registration" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.primaryButton}
          >
            Start Connecting
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
        <h2 className={styles.sectionTitle}>Interactive Learning</h2>
        <div className={styles.featuresGrid}>
          <div className={`glass-panel ${styles.featureCard}`}>
            <div className={styles.iconWrapper}>
             <VideoIcon />
            </div>
            <h3 className={styles.featureTitle}>HD Video Calling</h3>
            <p className={styles.featureDesc}>
              Supports both one-to-one video calling and many-to-many conferencing, making it suitable for individual discussions and group sessions.
            </p>
          </div>

          <div className={`glass-panel ${styles.featureCard}`}>
            <div className={styles.iconWrapper}>
             <UsersIcon />
            </div>
            <h3 className={styles.featureTitle}>Mentor Connect</h3>
            <p className={styles.featureDesc}>
               Dedicated features for mentors and mentees to engage in focused conversations, enabling personalized guidance and real-time feedback.
            </p>
          </div>

          <div className={`glass-panel ${styles.featureCard}`}>
            <div className={styles.iconWrapper}>
              <ShareIcon />
            </div>
            <h3 className={styles.featureTitle}>Collaborative Sharing</h3>
            <p className={styles.featureDesc}>
               Ideal for online coaching, professional training, and collaborative learning with tools designed for seamless knowledge transfer.
            </p>
          </div>
        </div>
      </section>

       {/* Stats Section */}
       <section className={styles.statsSection}>
        <div className={styles.statCard}>
          <span className={styles.statValue}>Crystal</span>
          <span className={styles.statLabel}>Clear Audio/Video</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>Secure</span>
          <span className={styles.statLabel}>Encrypted Sessions</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statValue}>Global</span>
          <span className={styles.statLabel}>Connectivity</span>
        </div>
      </section>

      {/* Gallery Section */}
      <section>
        <h2 className={styles.sectionTitle}>Experience the Platform</h2>
        <div className={styles.galleryGrid}>
          {images.map((src, index) => (
            <div key={index} className={`glass-panel ${styles.galleryItem}`}>
              <Image
                src={src}
                alt={`M2M Connectify Interface ${index + 1}`}
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
