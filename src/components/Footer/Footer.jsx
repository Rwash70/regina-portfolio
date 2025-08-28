import styles from './Footer.module.css';

export default function Footer() {
  const y = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <span className={styles.footerCopy}>© {y} Regina Washington</span>
        <span className={styles.footerHint}>
          <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>K</kbd> — quick nav (coming
          soon)
        </span>
      </div>
    </footer>
  );
}
