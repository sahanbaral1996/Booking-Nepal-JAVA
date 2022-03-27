import Amplify from "@aws-amplify/core";
import { Authenticator } from 'aws-amplify-react';
import Login from "./Login";
import React from "react";

import awsconfig from "./aws-exports";
import Setuppassword from "./SetupPassword";
import { ICognitoUserDetails } from "../../types/Iuser";

Amplify.configure(awsconfig);

const CognitoAuth = () => {
  const [cognitoUser, setCognitoUser] = React.useState(null);
  return (<Authenticator hideDefault={true}>
    {cognitoUser!= null && cognitoUser['challengeName'] == 'NEW_PASSWORD_REQUIRED' ?
      <Setuppassword cognitoUser={cognitoUser} /> :
      <Login setCognitoUser={setCognitoUser} />}
  </Authenticator>);
}

export default CognitoAuth;