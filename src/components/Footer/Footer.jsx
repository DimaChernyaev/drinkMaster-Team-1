import { Logo } from '../Header/Logo/Logo';
import { Container } from '../SharedLayout/SharedLayout.styled';
import {
  FooterContentWrapper,
  FooterEl,
  FooterMedia,
  FooterMediaNavWrapper,
} from './Footer.styled';
import { FooterMediaList } from './FooterMedia/FooterMediaList';
import { FooterNav } from './FooterNav/FooterNavList';
import { FooterSub } from './FooterSubscription/FooterSub';

const Footer = () => {
  return (
    <FooterEl>
      <Container>
        <FooterContentWrapper>
          <FooterMediaNavWrapper>
            <FooterMedia>
              <Logo />
              <FooterMediaList />
            </FooterMedia>
            <FooterNav />
          </FooterMediaNavWrapper>
          <FooterSub />
        </FooterContentWrapper>
      </Container>
    </FooterEl>
  );
};

export default Footer;
