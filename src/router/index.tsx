import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const App = React.lazy(() => import('../App'));
const SwiperList = React.lazy(() => import('../SwiperList'));
const Landing = React.lazy(() => import('../Landing'));

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/travisscott',
        element: <SwiperList />,
      },
    ],
  },
]);

export default router;
