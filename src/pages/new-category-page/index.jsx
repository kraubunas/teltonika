import React from 'react';
import {
  Typography, Container, Paper, TextField, Button,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  category: Yup.string()
    .required('Required')
    .max(32, 'Need 32 symbols or less'),

  subCategory: Yup.string()
    .required('Required')
    .max(32, 'Need 32 symbols or less'),

  subSubCategory: Yup.string()
    .required('Required')
    .max(32, 'Need 32 symbols or less'),
});

const CreateNewCategory = () => {
  const initialValues = {
    category: '',
    subCategory: '',
    subSubCategory: '',
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
    validationSchema,
  });

  return (
    <Container sx={{
      display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    }}
    >
      <Paper sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: { xs: '100%', sm: '100%', md: '500px' }, mt: 3, py: 3,
      }}
      >
        <Typography component="h1" variant="h4" sx={{ mb: 2, textAlign: 'center' }}>
          Create new category
        </Typography>
        <Container sx={{
          mt: 1,
        }}
        >
          <form
            style={{
              display: 'flex', flexDirection: 'column', gap: 15,
            }}
          >
            <TextField
            name='category'
            type="text"
            label="ex. Employee"
            value={formik.values.category}
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.category && Boolean(formik.errors.category)}
            required
            />
            <TextField
            name='subCategory'
            type="text"
            label="ex. Programmer"
            value={formik.values.subCategory}
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.subCategory && Boolean(formik.errors.subCategory)}
            required
            />
            <TextField
            name='subSubCategory'
            type="text"
            label="ex. Front-End"
            value={formik.values.subSubCategory}
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.subSubCategory && Boolean(formik.errors.subSubCategory)}
            required
            />
            <Button type="submit" variant="contained">Create category</Button>
          </form>
        </Container>
      </Paper>
    </Container>
  );
};

export default CreateNewCategory;
