import React from 'react';
import { useFormik } from 'formik';

// Simple validation function
const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

function FormikStateFormValidation() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{textAlign:"center"}}>
      <h2>Formik State Form Example</h2>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div style={{color: 'red'}}>{formik.errors.name}</div>
        ) : null}
      </div>
      <br />
      <div>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{color: 'red'}}>{formik.errors.email}</div>
        ) : null}
      </div>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormikStateFormValidation;
