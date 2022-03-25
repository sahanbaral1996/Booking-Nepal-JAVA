import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import PrivateRouter from './commons/Router/PrivateRouter';
import PublicRouter from './commons/Router/PublicRouter';
import Home from './Home/Home';
import CognitoAuth from './auth/CognitoAuth';

const AppRouter = () => {

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<PublicRouter Component={Signup} />}></Route>
        <Route path="/home" element={<PrivateRouter Component={ Home}/>}></Route>
        <Route path="/login" element={<PublicRouter Component={CognitoAuth} />}></Route>
      </Routes>
    </Router>);
    
  
}

export default AppRouter;
