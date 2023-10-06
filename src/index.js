import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import App from './pages/App';
import {  createHashRouter, RouterProvider } from 'react-router-dom';
import PocketBook from './pages/portfolio/PocketBook/PocketBook';
import Portfolio from './pages/portfolio/Portfolio/Portfolio';
import Reviews from './pages/reviews/Reviews';
import AboutUs from './pages/about-us/AboutUs';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/pocketbook',
    element: <PocketBook />,
  },
  {
    path: '/portfolio',
    element: <Portfolio />,
  },
  {
    path: '/reviews',
    element: <Reviews />,
  },
  {
    path: '/about-us',
    element: <AboutUs />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);
