import React, { useState, useEffect } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './pages/home-page/index.jsx';
import TablePage from './pages/table-page/index.jsx';
import CreateNewCategory from './pages/new-category-page/index.jsx';
import LandingPage from './components/landing-page.jsx';
import CreateUser from './pages/new-user-page/index.jsx';
import CategoryService from './redux/categories/service/categories-get-service';

const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    CategoryService.getCategories().then(
      (res) => {
        setCategories(res.data);
      },
      (error) => {
        const content = (error.res && error.res.data) || error.message || error.toString();

        setCategories(content);
      },
    );
  }, []);
  // @ts-ignore
  const Table = () => (
    <div>
      <TablePage />
      <Outlet />
    </div>
  );

  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route
            path='/'
            element={(
              <HomePage />
            )}
          />
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
              // @ts-ignore
              component={Table}
              element={<TablePage />}
            />)
          }
        </Route>
      </Routes>
    </Provider>
  );
};
export default App;
