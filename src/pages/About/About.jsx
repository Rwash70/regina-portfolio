import Card from '../../components/Card/Card';
import styles from './About.module.css';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

export default function About() {
  return (
    <div className={styles.about}>
      <Card className={styles.aboutHeader}>
        <div className={styles.aboutHeaderText}>
          <h1 className={styles.aboutTitle}>About</h1>
          <p className={styles.aboutSub}>
            I’m a software engineer with a <strong>front-end focus</strong>—I
            care about clean UI architecture, accessibility, performance, and
            measurable outcomes. I’m also comfortable delivering{' '}
            <strong>full-stack</strong> features end-to-end (API design, auth,
            data modeling, deploys).
          </p>
        </div>
        <div className={styles.aboutPhotoWrap}>
          <img
            src='/headshot/headshot.jpeg'
            alt='Regina Washington headshot'
            className={styles.aboutPhoto}
          />
        </div>
      </Card>

      <div className={styles.aboutCols}>
        <Card>
          <h3>Tech Strengths</h3>
          <ul>
            <li>
              <strong>React</strong> (routing, forms, state, hooks)
            </li>
            <li>
              <strong>TypeScript</strong> (types, generics, props/state
              modeling)
            </li>
            <li>State mgmt: Context API, Zustand/Redux patterns</li>
            <li>Styling: CSS Modules, design tokens, responsive layout</li>
            <li>A11y (WCAG), semantic HTML, keyboard/focus management</li>
            <li>Performance: Lighthouse, code-split, bundle optimization</li>
            <li>Testing: Jest + RTL; E2E with Playwright/Cypress</li>
          </ul>
        </Card>

        <Card>
          <h3>Tooling & Workflow</h3>
          <ul>
            <li>Vite, ESLint/Prettier, Git/GitHub PR flow</li>
            <li>API work: Node/Express, REST, JWT auth</li>
            <li>Data: MongoDB/Postgres basics; schema & validation</li>
            <li>CI/CD & Deploy: Vercel/Netlify, preview envs</li>
            <li>Observability: basic analytics, error monitoring</li>
            <li>Docs: READMEs, ADR notes, changelogs / build logs</li>
          </ul>
        </Card>
      </div>

      <Card>
        <h3>What I Like to Build</h3>
        <p>
          Primarily <strong>front-end web apps</strong> with clean UX and
          measurable impact: dashboards, data visualizations, and real-world
          workflows. I also deliver
          <strong> full-stack</strong> features when needed—designing endpoints,
          wiring auth, and connecting the UI to robust data models—so projects
          ship end-to-end.
        </p>
      </Card>

      <Card className={styles.aboutContact}>
        <h3>Contact</h3>
        <ul className={styles.contactList}>
          <li>
            <a href='mailto:rwashingtony@icloud.com' rel='noreferrer'>
              <FiMail /> rwashingtony@icloud.com
            </a>
          </li>
          <li>
            <a
              href='https://github.com/Rwash70'
              target='_blank'
              rel='noreferrer'
            >
              <FiGithub /> github.com/Rwash70
            </a>
          </li>
          <li>
            <a
              href='https://linkedin.com/in/regina-washington-ms-csm-3317818a'
              target='_blank'
              rel='noreferrer'
            >
              <FiLinkedin /> linkedin.com/in/regina-washington-ms-csm-3317818a
            </a>
          </li>
        </ul>
      </Card>
    </div>
  );
}
