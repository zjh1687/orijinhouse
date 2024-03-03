import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const App = React.lazy(() => import('../App'));
const SwiperList = React.lazy(() => import('../SwiperList'));

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
  },
  {
    path: '/travisscott',
    element: <SwiperList />,
  },
]);

export default router;
