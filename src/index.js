import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import App from './pages/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PocketBook from './pages/clients/PocketBook/PocketBook';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/pocketbook',
    element: <PocketBook />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
