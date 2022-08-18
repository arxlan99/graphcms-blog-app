import { useRoutes } from 'react-router-dom';
import AddNew from 'pages/AddNew';
import Home from 'pages/Home';
import NewsDetail from 'pages/NewsDetail';
import MainLayout from 'layout/MainLayout';
import AllNews from 'pages/AllNews';
import About from 'pages/About';

function Routes() {
  const element = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/news',
          element: <AllNews />,
        },
        {
          path: '/news/:id',
          element: <NewsDetail />,
        },
        {
          path: '/add-new',
          element: <AddNew />,
        },
        {
          path: '/about',
          element: <About />,
        },
      ],
    },
  ]);
  return element;
}

export default Routes;
