import * as Yup from 'yup';

export const ProfileSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Довжина повинна бути більше двох символів')
    .max(50, 'Довжина повинна бути менше 50 символів')
    .trim()
    .required("Поле обов'язкове до заповнення"),
});
