import config from '../../config';

const awsconfig = {
  Auth: {
    region: config.cognito.region,
    userPoolId: config.cognito.userPoolId,
    userPoolWebClientId: config.cognito.userPoolWebClientId,
    authenticationFlowType: 'USER_PASSWORD_AUTH',
  },
};

export default awsconfig;
