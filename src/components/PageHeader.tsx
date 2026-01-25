import styles from './PageHeader.module.css';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className={styles.header}>
      <div className={styles.bgGlow}></div>
      <div className="container">
        <h1 className={`${styles.title} text-gradient`}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHeader;
