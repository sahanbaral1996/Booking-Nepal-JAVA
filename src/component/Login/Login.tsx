import React from "react";
import { useFormik } from "formik";
import TextField from "../commons/TextField/TextField";
import Lang from "../../constants/lang/lang";
import LoginSchema from '../../validation/Login/Login';
import Button from "@material-ui/core/Button/Button";
import { Auth } from "aws-amplify";
import useMountedRef from "../../hooks/useMountedRef";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import ErrorToast from "../commons/error/ErrorToast";

const LoginInitialValues = {
  username: '',
  password:''
}

const Login = () => {
  const [submitting, setSubmitting] = React.useState<boolean|undefined>(false);
  const mountedRef = useMountedRef();

  const formik = useFormik({
    initialValues:LoginInitialValues,
    validationSchema: LoginSchema,
    onSubmit: async () => {
      setSubmitting(true);
      try {
        const user = await Auth.signIn(values.username, values.password);
      } catch (e: any) {
        ErrorToast(
          "Authentication Failed",
           "Wrong Username or password",
          "warn"
        );
      } finally {
        if (mountedRef.current) {
          setSubmitting(false);
        }
      }
      
    }
  });
  const { errors, handleChange, touched,values } = formik;
  return (
    <div className="base_wrapper">
      <div className="login-header">
        <p>Don't have an account ? <a href="/signup">Signup</a> now.</p>
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
          <div className="submit-button-container">
            <div>
              { submitting && <CircularProgress />}
            </div>
            <div>
              <Button disabled={submitting} variant="outlined" type="submit">Login</Button>
            </div>
            
          </div>
        
        </div>
      </form>
    </div>
  );
}

export default Login;
