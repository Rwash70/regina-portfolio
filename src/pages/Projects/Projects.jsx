import { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../../components/Card/Card';
import styles from './Projects.module.css';
import { projects } from '../../data/projects';

// normalize helper: lowercase and strip non-alphanumerics
const norm = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

export default function Projects() {
  const [q, setQ] = useState('');

  // unique tag list (preserve original label casing)
  const tags = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => (p.stack || []).forEach((t) => set.add(t)));
    return ['All', ...Array.from(set)];
  }, []);

  const [tag, setTag] = useState('All');

  const filtered = projects
    .filter((p) => !p.draft)
    .filter((p) => {
      // text search across title, summary, and stack
      const haystack = (
        p.title +
        ' ' +
        p.summary +
        ' ' +
        (p.stack || []).join(' ')
      ).toLowerCase();
      const hit = haystack.includes(q.trim().toLowerCase());

      // single-select tag filter with normalization
      const ok =
        tag === 'All' || (p.stack || []).some((s) => norm(s) === norm(tag));

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
              type='button'
              className={`${styles.projectsTab} ${
                tag === t ? styles.projectsTabActive : ''
              }`}
              aria-pressed={tag === t}
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
                {(p.stack || []).slice(0, 5).map((s) => (
                  <span key={s} className={styles.projectsChip}>
                    {s}
                  </span>
                ))}
              </div>
            </Card>
          </NavLink>
        ))}
        {!filtered.length && (
          <Card className={styles.projectsEmpty}>
            No projects match that search/filter.
          </Card>
        )}
      </div>
    </div>
  );
}
