import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import TablePage from './pages/table-page/index.jsx';
import CreateNewCategory from './pages/new-category-page/index.jsx';
import LandingPage from './components/landing-page.jsx';
import CreateUser from './pages/new-user-page/index.jsx';

const App = () => {
  const [categories, setCategories] = useState([]);

  const data = () => {
    fetch(
      'http://localhost:8000/categories',
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    )
      .then((response) => response.json())
      .then((myJson) => {
        setCategories(myJson);
      });
  };
  useEffect(() => {
    data();
  }, []);

  return (
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
        {
          categories.map((category) => <Route
            // @ts-ignore
            key={category.id}
            // @ts-ignore
            path={category.title}
            element={(
              <TablePage />
            )}
          />)
        }
      </Route>
    </Routes>
  );
};
export default App;
