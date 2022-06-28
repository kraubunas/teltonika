// @ts-ignore
import React from 'react';
import {
  Typography, Container, Paper, TextField, Button,
} from '@mui/material';
import { useFormik, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import createCategoryAction from '../../redux/categories/action-creators/categories-action-creators';

const validationSchema = Yup.object({
  title: Yup.string()
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
    title: '',
    subCategory: '',
    subSubCategory: '',
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // @ts-ignore
  const handleCreateCategory = ({ title, subCategory, subSubCategory }) => {
    const createCategory = createCategoryAction({ title, subCategory, subSubCategory });
    // @ts-ignore
    dispatch(createCategory);
    navigate('/');
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleCreateCategory,
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
          <Formik
// @ts-ignore
          onSubmit={formik.handleSubmit}
>
          <Form
            style={{
              display: 'flex', flexDirection: 'column', gap: 15,
            }}
          >
            <TextField
            name='title'
            type="text"
            label="ex. Employee"
            value={formik.values.title}
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.title && Boolean(formik.errors.title)}
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
          </Form>
          </Formik>
        </Container>
      </Paper>
    </Container>
  );
};

export default CreateNewCategory;
