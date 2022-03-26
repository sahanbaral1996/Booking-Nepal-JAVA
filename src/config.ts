const config = {
  env: process.env.ENV,
  cognito: {
    region: process.env.REACT_APP_AWS_COGNITO_REGION,
    userPoolId: process.env.REACT_APP_AWS_COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_AWS_COGNITO_WEB_CLIENT_ID,
    userPoolWebClientSecret: process.env.REACT_APP_AWS_COGNITO_WEB_CLIENT_SECRET,
  },
  api: {
    url: process.env.REACT_APP_BASE_API,
  }
  
}

export default config;