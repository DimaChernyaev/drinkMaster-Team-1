import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-zА-Яа-яІіЇїЄєҐґ']+$/, "Ім'я повинно бути тільки з літер")
    .min(2, 'Довжина повинна бути більше двох символів')
    .max(30, 'Дуже багато символів')
    .trim()
    .required("Поле обов'язкове до заповнення"),
  birthdate: Yup.string().matches(
    /^\d{2}\/\d{2}\/\d{4}$/i,
    'Невірний формат дати',
  ).test('isValidDate', 'Невірна дата', function (value) {
    if (!value) return true; 
    const parts = value.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);
    if (
        isNaN(day) ||
        isNaN(month) ||
        isNaN(year) ||
        day < 1 ||
        day > 31 ||
        month < 1 ||
        month > 12 ||
        year < 1900 || 
        year > 2099 
    ) {
        return false;
    }
    return true;
}).required("Поле обов'язкове до заповнення"),
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
