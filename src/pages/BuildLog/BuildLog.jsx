import Card from '../../components/Card/Card';
import styles from './BuildLog.module.css';
import { buildLog } from '../../data/buildLog';

export default function BuildLog() {
  return (
    <div className={styles.buildLog}>
      <Card>
        <h1 className={styles.buildLogTitle}>Build Log</h1>
        <p className={styles.buildLogSub}>
          Reverse-chronological ship notes that prove momentum.
        </p>
      </Card>

      {buildLog.map((e, i) => (
        <Card key={i} className={styles.buildLogEntry}>
          <div className={styles.buildLogDate}>{e.date}</div>
          <div className={styles.buildLogNote}>
            <strong>{e.project}</strong> — {e.note}
          </div>
        </Card>
      ))}
    </div>
  );
}
