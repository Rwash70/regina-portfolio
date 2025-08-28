import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import SkillGraph from '../../components/SkillGraph/SkillGraph.jsx';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className={styles.home}>
      <Card className={styles.homeHero}>
        <div className={styles.homeHeroText}>
          <h1 className={styles.homeTitle}>
            I design & build fast, reliable web apps that scale.
          </h1>
          <p className={styles.homeSub}>
            Explore case studies with real metrics, code snippets, and demos.
          </p>
          <div className={styles.homeActions}>
            <Button as={Link} to='/projects'>
              See Projects
            </Button>
            <Link to='/about' className={styles.homeLink}>
              About
            </Link>
          </div>
        </div>
        <div className={styles.homeHeroBadge}>RW</div>
      </Card>

      <Card>
        <strong>Skill Graph </strong>
        <div className={styles.homeSkillGraph}>
          <SkillGraph height={260} />
        </div>
      </Card>
    </div>
  );
}
