import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { memo } from 'react';
import Error from '../pages/Error';
import Home from '../pages/Home';

const Page = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default memo(Page);
