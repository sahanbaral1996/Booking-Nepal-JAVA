import React from "react";
import { useFormik } from "formik";
import TextField from "../commons/TextField/TextField";
import { useNavigate } from 'react-router';
import Lang from "../../constants/lang/lang";
import LoginSchema from '../../validation/Login/Login';
import Button from "@material-ui/core/Button/Button";
import Amplify, { Auth } from "aws-amplify";
import useMountedRef from "../../hooks/useMountedRef";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import { HOME_URL, SIGNUP } from "../../constants/route";
import PassSchema from "../../validation/SetupPassword";

const SetupPassInitialValues = {
  password: '',
  confirmedPassword:''
}

const Setuppassword: React.FC<{ cognitoUser?: any }> = ({ cognitoUser }) => {
  const history = useNavigate();
  const [submitting, setSubmitting] = React.useState<boolean|undefined>(false);
  const mountedRef = useMountedRef();

  React.useEffect(() => {
    console.log(cognitoUser);
  },[]);

  const formik = useFormik({
    initialValues:SetupPassInitialValues,
    validationSchema: PassSchema,
    onSubmit: async () => {
      setSubmitting(true);
      console.log(cognitoUser);
      try {
        const response = await Auth.completeNewPassword(cognitoUser, values.confirmedPassword);
        history(HOME_URL);
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
      <form onSubmit={formik.handleSubmit}>
        <div className="login_wrapper">
          <TextField
            label={Lang.userRegistration.EMAIL.LABEL}
            name="password"
            type="password"
            value={ values.password}
            onChange={handleChange}
            errorMessage= {errors.password && touched.password ? errors.password :''}
          >  
          </TextField>
          <TextField
            label={Lang.userRegistration.PASSWORD.LABEL}
            name="confirmedPassword"
            type="password"
            value={ values.confirmedPassword}
            onChange={handleChange}
            errorMessage= {errors.confirmedPassword && touched.confirmedPassword ? errors.confirmedPassword :''}
          >
          </TextField>
          <div className="submit-button-container">
            <div>
              { submitting && <CircularProgress />}
            </div>
            <div>
              <Button disabled={submitting} variant="outlined" type="submit">Setup password</Button>
            </div>
            
          </div>
        
        </div>
      </form>
    </div>
  );
}

export default Setuppassword;
