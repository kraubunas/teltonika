import { Button, Container } from '@mui/material';
import React, { useState } from 'react';
import * as DataBase from '../../database/db.json';

const HomePage = () => {
  const [data] = useState({ DataBase });

  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data),
    )}`;
    const link = document.createElement('a');
    link.href = jsonString;
    link.download = 'data.json';

    link.click();
  };

  return (
    <Container sx={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 20,
    }}>
        <Button sx={{ width: '250px', height: '150px' }} variant='contained' onClick={exportData}>Export JSON Data</Button>
    </Container>
  );
};

export default HomePage;
