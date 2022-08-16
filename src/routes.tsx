import { useRoutes } from 'react-router-dom';
import AddNew from 'pages/AddNew';
import Home from 'pages/Home';
import NewsDetail from 'pages/NewsDetail';
import MainLayout from 'layout/MainLayout';

function Routes() {
  const element = useRoutes([
    {
      path: '/',
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: '/news/:id',
              element: <NewsDetail />,
            },
          ],
        },
        {
          path: '/add-news',
          element: <AddNew />,
        },
      ],
    },
  ]);
  return element;
}

export default Routes;
