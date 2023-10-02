import { useState } from 'react';
import {
  LoweLiner,
  TermsButtons,
  TermsWrapper,
  StyledPar,
} from './FooterTerms.styled';
import { FooterModal } from './FooterModal/FooterModal';

export const FooterTerms = () => {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isTermsOfServiceOpen, setIsTermsOfServiceOpen] = useState(false);

  const handlePrivacyPolicyModal = () => {
    setIsPrivacyPolicyOpen((prev) => !prev);
  };

  const handleTermsOfServiceModal = () => {
    setIsTermsOfServiceOpen((prev) => !prev);
  };

  return (
    <LoweLiner>
      <StyledPar>©2023 Drink Master. All rights reserved.</StyledPar>
      <TermsWrapper>
        <TermsButtons onClick={handlePrivacyPolicyModal}>
          Privacy Policy
        </TermsButtons>
        <TermsButtons onClick={handleTermsOfServiceModal}>
          Terms of Service
        </TermsButtons>
      </TermsWrapper>
      {isPrivacyPolicyOpen && (
        <FooterModal
          isModalOpen={isPrivacyPolicyOpen}
          setIsModalOpen={setIsPrivacyPolicyOpen}
          modalTextKey="privacyPolicyText"
        />
      )}
      {isTermsOfServiceOpen && (
        <FooterModal
          isModalOpen={isTermsOfServiceOpen}
          setIsModalOpen={setIsTermsOfServiceOpen}
          modalTextKey="termsOfServiceText"
        />
      )}
    </LoweLiner>
  );
};
