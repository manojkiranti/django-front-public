import * as yup from 'yup';

export const topupSchema = yup.object().shape({
  amount: yup
    .number()
    .required('Amount is required.'),
  phone: yup.number().required('Mobile number is required.'),

});

export const internetSchema = yup.object().shape({
    username: yup.string().required('Internet username is required.'),
  
  });

  export const electricitySchema = yup.object().shape({
    counter: yup.string().required('counter is required.'),
    scNumber: yup.string().required('sc number is required.'),
    counterID: yup.string().required('counter id is required.'),
  });
  export const landlinePaymentSchema = yup.object().shape({
    landlineNumber: yup.string().required('counter is required.'),
    amount: yup.number().required('sc number is required.')
  });

  export const khanePaniSchema = yup.object().shape({
    branch: yup.string().required('branch is required.'),
    customerNo: yup.string().required('please select your required type.'),
    id: yup.string().required('customer no or connection number is required ')
  });