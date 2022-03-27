export const checkAuthentication = () => {
  const accessToken = window.localStorage.getItem("accessToken");
  const idToken = window.localStorage.getItem("idToken");

  return accessToken && idToken;
}