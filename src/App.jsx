import React, { memo } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './router';
import AppHeader from '@/components/header';
import AppFooter from '@/components/footer';

const App = memo(() => {
  return (
    <div className="app">
      <AppHeader />
      <div className="space"></div>
      <div className="content">{useRoutes(routes)}</div>
      <AppFooter />
    </div>
  );
});

export default App;
