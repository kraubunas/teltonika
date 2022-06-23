import React from 'react';
import {
  Typography, Container, Paper, TextField, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
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
    .min(0)
    .max(99)
    .required('Required'),

  gender: Yup.string()
    .required('Required'),
});

const CreateUser = () => {
  const initialValues = {
    name: '',
    lastName: '',
    password: '',
    email: '',
    age: 0,
    gender: '',
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
          Create new user
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
            name='name'
            type="text"
            label="Name"
            value={formik.values.name}
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
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
            required
            />
            <FormControl required>
              <FormLabel>Gender</FormLabel>
              <RadioGroup row >
                <FormControlLabel name='gender' value="male" control={<Radio />} label="Male" />
                <FormControlLabel name='gender' value="female" control={<Radio />} label="Female" />
              </RadioGroup>
            </FormControl>
            {/* <TextField
            id="standard-select-currency"
            select
            label="Select"
            helperText="Please select your currency"
            variant="standard"
            >
            </TextField> */}
            <Button type="submit" variant="contained">Create User</Button>
          </form>
        </Container>
      </Paper>
    </Container>
  );
};

export default CreateUser;
