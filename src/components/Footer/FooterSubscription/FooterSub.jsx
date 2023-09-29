import SubscriptionForm from '../SubscriptionForm/SubscriptionForm';
import { StyledSubText, SubWrapper } from './FooterSub.styled';

export const FooterSub = () => {
  return (
    <SubWrapper>
      <StyledSubText>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </StyledSubText>
      <SubscriptionForm />
    </SubWrapper>
  );
};
