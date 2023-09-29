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
  return (
    <FollowUsWrapper>
      <FollowUsTitle>FollowUs</FollowUsTitle>
      <MediaList>
        <MediaListItem>
          <FooterStyledLink>
            <StyledFacebookSVG />
          </FooterStyledLink>
        </MediaListItem>
        <MediaListItem>
          <FooterStyledLink>
            <StyledInstagramSVG />
          </FooterStyledLink>
        </MediaListItem>
        <MediaListItem>
          <FooterStyledLink>
            <StyledYoutubeSVG />
          </FooterStyledLink>
        </MediaListItem>
      </MediaList>
    </FollowUsWrapper>
  );
};

export default FollowUs;
