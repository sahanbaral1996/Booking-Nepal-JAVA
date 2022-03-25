import { Route,Navigate } from "react-router-dom";
import { IPrivateRouterProps } from "../../../types/Router";



const PublicRouter: React.FC<IPrivateRouterProps> = ({ Component, ...props }) => {
  return (
    <Component />
  );
  
}

export default PublicRouter;