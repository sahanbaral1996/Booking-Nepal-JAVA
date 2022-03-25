import { Route,Navigate } from "react-router-dom";
import { checkAuthentication } from "../../../service/auth";
import { IPrivateRouterProps } from "../../../types/Router";



const PrivateRouter: React.FC<IPrivateRouterProps> = ({ Component, ...props }) => {
  return (
    checkAuthentication()==='asd' ? <Component />:<Navigate to="/login" />
  )
  
}

export default PrivateRouter;