import Amplify from "@aws-amplify/core";
import { Authenticator } from 'aws-amplify-react';
import Login from "../Login/Login";

import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

console.log(Amplify);

const CognitoAuth = () => {
  return (<Authenticator hideDefault={true}>
    <Login />
  </Authenticator>);
}

export default CognitoAuth;