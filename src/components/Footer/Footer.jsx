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
import { FooterTerms } from './FooterTerms/FooterTerms';

const Footer = () => {
  return (
    <FooterEl>
      <Container>
        <FooterContentWrapper>
          <FooterMediaNavWrapper>
            <FooterMedia>
              <Logo
                customStyle={{
                  color: 'var(--white-color)',
                  fill: 'var(--white-color)',
                }}
              />
              <FooterMediaList />
            </FooterMedia>
            <FooterNav />
          </FooterMediaNavWrapper>
          <FooterSub />
        </FooterContentWrapper>
        <FooterTerms />
      </Container>
    </FooterEl>
  );
};

export default Footer;
