import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .max(50, 'Довжина повинна бути більше двох символів')
    .email('Невірний формат email')
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      'Невірний формат email',
    )
    .required("Поле обов'язкове до заповнення"),
  password: Yup.string()
    .min(2, 'Довжина повинна бути більше двох символів')
    .max(30, 'Дуже багато символів')
    .trim()
    .required("Поле обов'язкове до заповнення"),
});
