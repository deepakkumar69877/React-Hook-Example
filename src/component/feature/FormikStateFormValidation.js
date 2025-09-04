import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function FormikStateFormValidation() {
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      setSuccess('');
      setError('');
      try {
        // Simulate async submission and random error
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (Math.random() < 0.2) {
          throw new Error('Submission failed. Please try again.');
        }
        setSuccess('Form submitted successfully!');
        resetForm();
        setTimeout(() => setSuccess(''), 3000);
      } catch (err) {
        setError(err.message);
        setTimeout(() => setError(''), 3000);
      }
      setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{textAlign:"center"}}>
      <h2>Formik State Form Example</h2>
      {success && <div style={{color: 'green'}}>{success}</div>}
      {error && <div style={{color: 'red'}}>{error}</div>}
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
      <button type="submit" disabled={formik.isSubmitting}>Submit</button>
    </form>
  );
}

export default FormikStateFormValidation;
