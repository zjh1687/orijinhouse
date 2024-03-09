import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';

const App = React.lazy(() => import('../App'));
const SwiperList = React.lazy(() => import('../SwiperList'));
const Spline = React.lazy(() => import('../Spline'));
const ItemList = React.lazy(() => import('../ItemList'));

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <Layout>
            <SwiperList />
          </Layout>
        ),
      },
      {
        path: '/kupper',
        element: <Spline />,
      },
      {
        path: '/itemlist',
        element: <ItemList />,
      },
    ],
  },
]);

export default router;
