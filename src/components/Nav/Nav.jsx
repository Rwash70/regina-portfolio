import styles from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/rw-logo.svg';

export default function Nav() {
  const linkClass = ({ isActive }) =>
    [styles.navbarLink, isActive && styles.navbarLinkActive]
      .filter(Boolean)
      .join(' ');

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContent}>
        <NavLink to='/' className={styles.navbarBrand}>
          <img
            src={logo}
            alt='RW logo'
            width='28'
            height='28'
            className={styles.navbarBrandLogo}
          />
          <strong className={styles.navbarBrandName}>Regina Washington</strong>
        </NavLink>

        <nav className={styles.navbarLinks} aria-label='Primary'>
          <NavLink to='/' end className={linkClass}>
            Home
          </NavLink>
          <NavLink to='/projects' className={linkClass}>
            Projects
          </NavLink>
          <NavLink to='/build-log' className={linkClass}>
            Build Log
          </NavLink>
          <NavLink to='/about' className={linkClass}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
