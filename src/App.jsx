import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import './styles/reset.css';
import './styles/tokens.css';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
