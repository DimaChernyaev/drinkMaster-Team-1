import {
  FooterStyledLink,
  MediaList,
  MediaListItem,
  StyledFacebookSVG,
  StyledInstagramSVG,
  StyledYoutubeSVG,
} from './FooterMediaList.styled';

export const FooterMediaList = () => {
  return (
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
  );
};
