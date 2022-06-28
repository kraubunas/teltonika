// @ts-nocheck
import React, { useState, useEffect } from 'react';
import {
  Typography, Container, Paper, TextField, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, MenuItem,
} from '@mui/material';
import { useFormik, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import createUserAction from '../../redux/create-users/action-creators/create-users-action-creators';
import CategoryService from '../../redux/categories/service/categories-get-service';

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required('Required')
    .max(32, 'Need 32 symbols or less'),

  lastName: Yup.string()
    .required('Required')
    .max(32, 'Need 32 symbols or less'),

  password: Yup.string()
    .max(32, 'Password must contain 32 characters or less')
    .min(8, 'Password must containe 8 characters or more')
    .required('Password is required')
    .matches(/^(?=.*[a-z])/, 'Must have atleast one lower case letter')
    .matches(/^(?=.*[A-Z])/, 'Must have atlest one upper case letter')
    .matches(/^(?=.*[0-9])/, 'Must have atleast one number')
    .matches(/^(?=.*[!@#$%^&*])/, 'Must have atleast one special character'),

  email: Yup.string()
    .email()
    .required('Required')
    .max(32, 'Need 32 symbols or less'),

  age: Yup.number()
    .min(18)
    .max(99)
    .required('Required'),

  gender: Yup.string()
    .required('Gender is required'),
});

const CreateUser = () => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const initialValues = {
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    age: 0,
    gender: '',
    category: '',
  };

  const handleCreateUser = ({
    firstName, lastName, password, email, age, gender, category,
  }) => {
    const createUser = createUserAction({
      firstName, lastName, password, email, age, gender, category,
    });
    dispatch(createUser);
    navigate('/');
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleCreateUser,
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
          Create new user
        </Typography>
        <Container sx={{
          mt: 1,
        }}
        >
          <Formik>
          <Form
            style={{
              display: 'flex', flexDirection: 'column', gap: 15,
            }}
            onSubmit={formik.handleSubmit}
          >
            <TextField
            name='firstName'
            type="text"
            label="First name"
            value={formik.values.firstName}
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName ? formik.touched.firstName && formik.errors.firstName : null}
            required
            />
            <TextField
            name='lastName'
            type="text"
            label="Last name"
            value={formik.values.lastName}
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName ? formik.touched.lastName && formik.errors.lastName : null}
            required
            />
            <TextField
            name='password'
            type="password"
            label="Password"
            value={formik.values.password}
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password ? formik.touched.password && formik.errors.password : null}
            required
            />
            <TextField
            name='email'
            type="email"
            label="Email"
            value={formik.values.email}
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email ? formik.touched.email && formik.errors.email : null}
            required
            />
            <TextField
            name='age'
            type="number"
            label="Age"
            value={formik.values.age}
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.age && Boolean(formik.errors.age)}
            helperText={formik.touched.age && formik.errors.age ? formik.touched.age && formik.errors.age : null}
            required
            />
            <FormControl required>
              <FormLabel>Gender</FormLabel>
              <RadioGroup row >
                <FormControlLabel type='radio' name='gender' value='male' control={<Radio />} label="Male" checked={formik.values.gender === 'male'} onChange={() => formik.setFieldValue('gender', 'male')} />
                <FormControlLabel type='radio' name='gender' value='female' control={<Radio />} label="Female" checked={formik.values.gender === 'female'} onChange={() => formik.setFieldValue('gender', 'female')} />
              </RadioGroup>
            </FormControl>
            <TextField
            select
            name='category'
            label="Select category"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            helperText="Please select your category"
            variant="standard"
            >
              {
                categories.map((category) => <MenuItem key={category.id} value={category.title}>{category.title}</MenuItem>)
              }
            </TextField>
            <Button type="submit" variant="contained">Create User</Button>
          </Form>
          </Formik>
        </Container>
      </Paper>
    </Container>
  );
};

export default CreateUser;
