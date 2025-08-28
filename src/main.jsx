import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home/Home.jsx';
import Projects from './pages/Projects/Projects.jsx';
import CaseStudy from './pages/CaseStudy/CaseStudy.jsx';
import BuildLog from './pages/BuildLog/BuildLog.jsx';
import About from './pages/About/About.jsx';
import NotFound from './pages/NotFound/NotFound.jsx'; // 404 page

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'projects', element: <Projects /> },
      { path: 'projects/:slug', element: <CaseStudy /> },
      { path: 'build-log', element: <BuildLog /> },
      { path: 'about', element: <About /> },

      //  Catch-all for unknown routes (404)
      { path: '*', element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
