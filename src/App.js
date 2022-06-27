import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateNewCategory from './pages/new-category-page/index.jsx';
import LandingPage from './components/landing-page.jsx';
import CreateUser from './pages/new-user-page/index.jsx';

const App = () => (
  <Routes>
    <Route path='/' element={<LandingPage />}>
      <Route
        path="add-new-user"
        element={(
          <CreateUser />
        )}
      />
      <Route
        path="add-new-category"
        element={(
          <CreateNewCategory />
        )}
      />
    </Route>
  </Routes>
);

export default App;
