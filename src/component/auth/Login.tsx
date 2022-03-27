import React, { SetStateAction } from "react";
import { useNavigate } from 'react-router';
import { useFormik } from "formik";
import TextField from "../commons/TextField/TextField";
import Lang from "../../constants/lang/lang";
import LoginSchema from '../../validation/Login/Login';
import Button from "@material-ui/core/Button/Button";
import { Auth } from "aws-amplify";
import useMountedRef from "../../hooks/useMountedRef";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import { HOME_URL, SETUP_PASSWORD, SIGNUP } from "../../constants/route";
import { setupCurrentUserSession } from "../../utils/auth";

const LoginInitialValues = {
  username: '',
  password:''
}



const Login: React.FC<{ setCognitoUser: React.Dispatch<SetStateAction<any>> }> = ({ setCognitoUser }) => {
  const history = useNavigate();
  const [submitting, setSubmitting] = React.useState<boolean|undefined>(false);
  const mountedRef = useMountedRef();

  React.useEffect(() => {
    (async () => {
      await Auth.signOut();
    })();
    
  },[]);

  const formik = useFormik({
    initialValues:LoginInitialValues,
    validationSchema: LoginSchema,
    onSubmit: async () => {
      setSubmitting(true);
      try {
        const user = await Auth.signIn(values.username, values.password);
        if (user.challengeName == "NEW_PASSWORD_REQUIRED") {
          setCognitoUser(user);
        } else {
          console.log(user);
          setupCurrentUserSession(user);
          history(HOME_URL);
        }
      } catch (e: any) {
        console.log(e);
        alert(e);
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
        <p>Don't have an account ? <a href={ SIGNUP }>Signup</a> now.</p>
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
