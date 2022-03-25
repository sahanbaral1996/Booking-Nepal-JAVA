import * as yup from 'yup';

const LoginSchema = yup.object({
  username: yup.string().required('Please provide your username'),
  password: yup.string().min(6).required('Please provide your username'),
});

export default LoginSchema;