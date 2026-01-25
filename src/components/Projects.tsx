import Link from 'next/link';
import Image from 'next/image';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'M2M Connectify',
    category: 'Video Communication',
    description: 'Modern video communication platform enabling seamless knowledge sharing, one-to-one video calling, and many-to-many conferencing for mentoring and coaching.',
    link: 'https://m2m.connectify.global/registration',
    image: '/m2m.png',
  },
  {
    title: 'Bulk Hiring Connectify',
    category: 'Recruitment Platform',
    description: 'End-to-end bulk hiring platform streamlining recruitment with candidate pipelines, interview workflows, and dashboard management for high-volume hiring.',
    link: 'https://bulk-hiring.connectify.global/',
    image: '/Bulk-hiring.png',
  },
  {
    title: 'QuadPacific',
    category: 'Real Estate',
    description: 'Comprehensive property listing and management platform allowing owners to showcase properties and users to discover and book accommodations with ease.',
    link: 'https://quadpacific.com/',
    image: '/quadpacific.jpg',
  },
  {
    title: 'Cloud Kitchen',
    category: 'Management System',
    description: 'All-in-one cloud kitchen management platform for inventory, HRMS, and operational audits, ensuring efficiency and compliance across kitchen networks.',
    link: 'https://cloud-kitchen.in/',
    image: '/CloudKitchen.png',
  },
  {
    title: 'Atlas POS',
    category: 'POS & Aggregation',
    description: 'Centralized food order management platform aggregating orders from Zomato and Swiggy, streamlining operations for restaurants and cloud kitchens.',
    link: 'https://atlas-pos.in/',
    image: '/POS.png',
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className={styles.heading}>Our Projects</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={`glass-panel ${styles.card}`}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.content}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.description}</p>
                <Link href={project.link} className={styles.link} target="_blank" rel="noopener noreferrer">
                  View Project &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
