import * as yup from 'yup';

const PassSchema = yup.object({
  password: yup.string().min(8).
    required('Please provide your password').
    matches(/^(?=.*[a-z])(?=.*[0-9])(?=.*[\^$*.\[\]{}\(\)?\-"!@#%&\/,><\':;|_~])\S{8,99}$/,
    'Password must contain at least 8 characters, one number and one special case character'),
  confirmedPassword: yup.string().min(8).
    required('Please provide your password').
    oneOf([yup.ref('password'),null],'Confirm password must match password'),
});

export default PassSchema;