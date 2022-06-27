// import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const TablePage = () => {
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

  // @ts-ignore
  const result = categories.filter((category) => category.id === 1);
  console.log(result);

  return (
    <table>
      <tr>
        <th>User Name</th>
        <th>Email</th>
      </tr>
      <tr>
        <td>January</td>
        <td>$100</td>
      </tr>
    </table>
  );
};

export default TablePage;
