import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/landing-page.jsx';
import CreateUser from './pages/new-user-page/index.jsx';

const App = () => (
  <div className="App">
    <Routes>
      <Route path='/' element={<LandingPage />}>
        <Route
          path="add-new-user"
          element={(
            <CreateUser />
          )}
        />

      </Route>
    </Routes>
  </div>
);

export default App;
