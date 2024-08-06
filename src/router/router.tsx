import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { memo } from 'react';
import Error from '../pages/Error';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <Error />,
  },
]);

const Page = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default memo(Page);
