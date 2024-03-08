import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const App = React.lazy(() => import('../App'));
const SwiperList = React.lazy(() => import('../SwiperList'));
const Landing = React.lazy(() => import('../Landing'));
const ItemList = React.lazy(() => import('../ItemList'));

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/',
        element: <SwiperList />,
      },
      {
        path: '/travisscott',
        element: <Landing />,
      },
      {
        path: '/itemlist',
        element: <ItemList />,
      },
    ],
  },
]);

export default router;
