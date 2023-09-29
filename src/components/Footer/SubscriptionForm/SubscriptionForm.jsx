import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledSubBtn,
  StyledSubError,
  StyledSubField,
  StyledSubForm,
  StyledSubLabel,
  SubFormContenWrapper,
} from '../FooterSubscription/FooterSub.styled';
import { useDispatch } from 'react-redux';
import { subscribeUser } from '../../../redux/auth/user/userOperations';
import { Notify } from 'notiflix';

const SubscriptionForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Incorrect email format')
      .required(`This field is required`),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const formData = new FormData();

    formData.append('email', values.email);
    try {
      await dispatch(subscribeUser(formData));
      Notify.success('Subscription email sent!');
      console.log('success');
    } catch (error) {
      console.log(error.message);
    }

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <StyledSubForm>
        <SubFormContenWrapper className="form-group">
          <StyledSubLabel htmlFor="email">Email:</StyledSubLabel>
          <StyledSubError name="email" component="div" className="error" />
          <StyledSubField
            type="email"
            id="email"
            name="email"
            placeholder="Enter the Email"
          />
        </SubFormContenWrapper>
        <StyledSubBtn type="submit">Subscribe</StyledSubBtn>
      </StyledSubForm>
    </Formik>
  );
};

export default SubscriptionForm;
