import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.quantumSpinner}>
        <div className={styles.ring1}></div>
        <div className={styles.ring2}></div>
        <div className={styles.ring3}></div>
        <div className={styles.core}></div>
      </div>
      <p className={styles.loadingText}>Loading Interface</p>
    </div>
  );
};

export default Loader;
