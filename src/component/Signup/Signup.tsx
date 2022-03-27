import React from "react";
import { useFormik } from "formik";
import TextField from "../commons/TextField/TextField";
import Lang from "../../constants/lang/lang";
import LoginSchema from '../../validation/Login/Login';
import Button from "@material-ui/core/Button/Button";
import useMountedRef from "../../hooks/useMountedRef";
import ErrorToast from "../commons/error/ErrorToast";
import { createUser } from "../../service/user";
import CircularProgress from "@material-ui/core/CircularProgress";
import { LOGIN } from "../../constants/route";

const SignupInitialValues = {
  username: '',
  password: '',
  name: '',
  city: '',
  address: '',
  phone:''
}

const Signup = () => {
  const [submitting, setSubmitting] = React.useState<boolean|undefined>(false);
  const mountedRef = useMountedRef();


  const formik = useFormik({
    initialValues:SignupInitialValues,
    validationSchema: LoginSchema,
    onSubmit: async () => {
      setSubmitting(true);
      try {
        (async () => {
          const userSignup = await createUser(values);
          ErrorToast("Signup succesful", "", "success");
        })();
      } catch (e) {
        ErrorToast("Error", " Creation of User Failed", "warn");
      } finally {
        if (mountedRef.current) {
          setSubmitting(false)
        }
      }
      
    }
  });
  const { errors, handleChange, touched,values } = formik;
  return (
    <div className="base_wrapper">
      <div className="login-header">
        <p>Already have an account  ? <a href={ LOGIN}>Login</a> now.</p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="login_wrapper">
        <TextField
          label={Lang.userRegistration.EMAIL.LABEL}
          name="username"
          type="email"
          value={ values.username}
          onChange={handleChange}
          errorMessage= {errors.username && touched.username ? errors.username :''}
        >  
        </TextField>
        <TextField
          label={Lang.userRegistration.PASSWORD.LABEL}
          name="password"
          type="password"
          value={ values.password}
          onChange={handleChange}
          errorMessage= {errors.password && touched.password ? errors.password :''}
        >
          </TextField>
          <TextField
          label={Lang.userRegistration.FULLNAME.LABEL}
          name="name"
          type="text"
          value={ values.name}
          onChange={handleChange}
          errorMessage= {errors.name && touched.name ? errors.name :''}
        >
          </TextField>
          <TextField
          label={Lang.userRegistration.PHONE.LABEL}
          name="phone"
          type="text"
          value={ values.phone}
          onChange={handleChange}
          errorMessage= {errors.phone && touched.phone ? errors.phone :''}
        >
          </TextField>
          <div className="submit-button">
          <div>
              { submitting && <CircularProgress />}
            </div>
            <Button variant="outlined" type="submit">Signup</Button>
          </div>
        
        </div>
      </form>
    </div>
  );
}

export default Signup;
