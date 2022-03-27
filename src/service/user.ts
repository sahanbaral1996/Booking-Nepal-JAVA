import { IUser } from "../types/Iuser";

import axios from "axios";

export const createUser = (data:IUser) => {
  return axios.post('http://localhost:8081/api/v1/user/', data);
}

export const getUser = () => {
  return axios.get('http://localhost:8081/api/v1/user/');
}