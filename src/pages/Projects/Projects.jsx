import { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../../components/Card/Card';
import styles from './Projects.module.css';
import { projects } from '../../data/projects';

export default function Projects() {
  const [q, setQ] = useState('');
  const tags = useMemo(
    () => ['All', ...Array.from(new Set(projects.flatMap((p) => p.stack)))],
    []
  );
  const [tag, setTag] = useState('All');

  const filtered = projects
    .filter((p) => !p.draft)
    .filter((p) => {
      const text = (p.title + p.summary + p.stack.join(' ')).toLowerCase();
      const hit = text.includes(q.toLowerCase());
      const ok = tag === 'All' || p.stack.includes(tag);
      return hit && ok;
    });

  return (
    <div className={styles.projects}>
      <Card className={styles.projectsToolbar}>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder='Search projects…'
          className={styles.projectsSearch}
        />
        <div className={styles.projectsTabs}>
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`${styles.projectsTab} ${
                tag === t ? styles.projectsTabActive : ''
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </Card>

      <div className={styles.projectsGrid}>
        {filtered.map((p) => (
          <NavLink
            key={p.slug}
            to={`/projects/${p.slug}`}
            className={styles.projectsCardLink}
          >
            <Card>
              <div className={styles.projectsYear}>{p.year}</div>
              <strong className={styles.projectsTitle}>{p.title}</strong>
              <p className={styles.projectsSummary}>{p.summary}</p>
              <div className={styles.projectsChips}>
                {p.stack.slice(0, 5).map((s) => (
                  <span key={s} className={styles.projectsChip}>
                    {s}
                  </span>
                ))}
              </div>
            </Card>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
