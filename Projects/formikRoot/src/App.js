import React from "react";
// TODO : import useFormik from formik library
import './App.css';
import {useFormik} from 'formik'


function App() {
  // TODO : add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues:{
      email: '',
      Password : ''
    },
    onSubmit: values => {
      console.log('form:', values);
    },
    validate: values => {
      let errors = {};
      if(!values.email) {errors.email = 'Username should be an email'};
      if(!values.Password ) {errors.Password  = 'Field required'} 
      else {console.log('all good')}
      
      return errors;
    }
  });
  return (
    <div>
      <p>
        The app is ready! You can proceed with the task instructions. TODO :
        build you form here.
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div>Email Field</div>
        <input id="emailField" name="email" type='text' onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id='emailError' style={{color:'red'}}>{formik.errors.email}</div>: null}
        <div>Password Field</div>
        <input id='pswField' name="Password" type='text' onChange={formik.handleChange} value={formik.values.Password }/>
        {formik.errors.Password  ? <div id='pswError' style={{color:'red'}}>{formik.errors.Password }</div>: null}
      
        <button id='submitBtn' type="submit" onClick={() => {alert('Login Successful');}} >Submit</button>
      </form>
    </div>
  );
}

export default App;
