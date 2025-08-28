// src/pages/CaseStudy/CaseStudy.jsx
import { useParams, NavLink } from 'react-router-dom';
import Card from '../../components/Card/Card';
import styles from './CaseStudy.module.css';
import { projects } from '../../data/projects';

export default function CaseStudy() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug && !x.draft);

  if (!p) {
    return (
      <div className={styles.caseStudy}>
        <Card>Project not found.</Card>
      </div>
    );
  }

  return (
    <div className={styles.caseStudy}>
      <Card>
        <NavLink to='/projects' className={styles.caseStudyBack}>
          ← Back to Projects
        </NavLink>
        <h1 className={styles.caseStudyTitle}>{p.title}</h1>
        <p className={styles.caseStudySummary}>{p.summary}</p>

        <div className={styles.caseStudyChips}>
          {p.stack?.map((s) => (
            <span key={s} className={styles.caseStudyChip}>
              {s}
            </span>
          ))}
          <span className={styles.caseStudyChip} title='Verified evidence'>
            ✅ Truth Badge
          </span>
        </div>

        {/* Optional: demo/repo buttons if provided in data */}
        {(p.links?.demo || p.links?.repo) && (
          <div
            style={{
              marginTop: 12,
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            {p.links?.demo && (
              <a
                className={styles.caseStudyChip}
                href={p.links.demo}
                target='_blank'
                rel='noreferrer'
              >
                Live Demo
              </a>
            )}
            {p.links?.repo && (
              <a
                className={styles.caseStudyChip}
                href={p.links.repo}
                target='_blank'
                rel='noreferrer'
              >
                GitHub Repo
              </a>
            )}
          </div>
        )}
      </Card>

      <div className={styles.caseStudyCols}>
        <Card>
          <h3>Summary</h3>
          {p.problem ? (
            <p>
              <strong>Problem</strong>: {p.problem}
            </p>
          ) : (
            <p>
              <strong>Problem</strong>: Describe the core problem.
            </p>
          )}
          {p.approach ? (
            <p>
              <strong>Approach</strong>: {p.approach}
            </p>
          ) : (
            <p>
              <strong>Approach</strong>: Your architecture & key decisions.
            </p>
          )}
          {p.outcome ? (
            <p>
              <strong>Outcome</strong>: {p.outcome}
            </p>
          ) : (
            <p>
              <strong>Outcome</strong>: The impact you achieved.
            </p>
          )}
        </Card>

        <Card>
          <h3>Evidence</h3>

          {/* Metrics */}
          {p.evidence?.metrics?.length ? (
            <ul className={styles.caseStudyMetrics}>
              {p.evidence.metrics.map((m) => (
                <li key={m.label}>
                  <strong>{m.label}:</strong> {m.value}
                </li>
              ))}
            </ul>
          ) : null}

          {/* Screenshots (Before / After grid) */}
          {p.evidence?.screenshots?.length ? (
            <div
              style={{
                display: 'grid',
                gap: 12,
                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              }}
            >
              {p.evidence.screenshots.map((s, i) => (
                <figure key={i} style={{ margin: 0 }}>
                  <img
                    src={s.src}
                    alt={s.caption || `screenshot ${i + 1}`}
                    style={{
                      width: '100%',
                      borderRadius: 12,
                      border: '1px solid var(--ring)',
                    }}
                  />
                  {s.caption && (
                    <figcaption
                      style={{
                        color: 'var(--muted)',
                        fontSize: 12,
                        marginTop: 6,
                      }}
                    >
                      {s.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          ) : (
            <div className={styles.caseStudyScreens}>
              Screenshots / Before–After here
            </div>
          )}
        </Card>
      </div>

      <div className={styles.caseStudyCols}>
        <Card>
          <h3>Code (slice)</h3>
          <pre className={styles.caseStudyCode}>
            <code>{p.evidence?.code || '// small snippet here'}</code>
          </pre>
        </Card>

        <Card>
          <h3>Next</h3>
          {p.next?.length ? (
            <ul>
              {p.next.map((n, i) => (
                <li key={i}>{n}</li>
              ))}
            </ul>
          ) : (
            <p>Add a few roadmap bullets.</p>
          )}
        </Card>
      </div>
    </div>
  );
}
