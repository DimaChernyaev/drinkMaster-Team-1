import {
  MediaList,
  MediaListItem,
  FooterStyledLink,
  StyledFacebookSVG,
  StyledInstagramSVG,
  StyledYoutubeSVG,
} from '../../Footer/FooterMedia/FooterMediaList.styled';
import { FollowUsWrapper, FollowUsTitle } from './FollowUs.styled';

const FollowUs = () => {
  const externalLinkProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
  };
  return (
    <FollowUsWrapper>
      <FollowUsTitle>FollowUs</FollowUsTitle>
      <MediaList>
        <MediaListItem>
          <FooterStyledLink
            to="https://www.facebook.com/goITclub/"
            {...externalLinkProps}
          >
            <StyledFacebookSVG />
          </FooterStyledLink>
        </MediaListItem>
        <MediaListItem>
          <FooterStyledLink
            to="https://www.instagram.com/goitclub/"
            {...externalLinkProps}
          >
            <StyledInstagramSVG />
          </FooterStyledLink>
        </MediaListItem>
        <MediaListItem>
          <FooterStyledLink
            to="https://www.youtube.com/c/GoIT"
            {...externalLinkProps}
          >
            <StyledYoutubeSVG />
          </FooterStyledLink>
        </MediaListItem>
      </MediaList>
    </FollowUsWrapper>
  );
};

export default FollowUs;
