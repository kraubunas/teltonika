import React, { useState, useEffect } from 'react';
import {
  Box, AppBar, Toolbar, Button, IconButton, Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const NavBar = () => {
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

  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Drawer anchor="left" open={categoriesOpen} onClose={() => setCategoriesOpen(false)}>
            {
              categories.map((category) => <Link style={{
                display: 'flex', padding: '20px', textDecoration: 'none', color: 'black', textTransform: 'uppercase',
                // @ts-ignore
              }} to={`/${category.title}`} key={category.id}>{category.title}</Link>)
            }
          </Drawer>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setCategoriesOpen(true)}
          >
          <MenuIcon />
          </IconButton>
          <Button color="inherit">
            <Link to='/add-new-user' style={{
              display: 'inline-block', marginRight: '20px', textDecoration: 'none', color: 'white',
            }}>
              Add user
            </Link>
          </Button>
          <Button color="inherit">
            <Link to='/add-new-category' style={{
              display: 'inline-block', marginRight: '20px', textDecoration: 'none', color: 'white',
            }}>
              Add category
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
