export const setupCurrentUserSession = (cognitoUserData:any) => {
  window.localStorage.setItem('accessToken', cognitoUserData.signInUserSession.accessToken);
  window.localStorage.setItem('idToken', cognitoUserData.signInUserSession.idToken);
  window.localStorage.setItem('refreshToken',cognitoUserData.signInUserSession.refreshToken);
}