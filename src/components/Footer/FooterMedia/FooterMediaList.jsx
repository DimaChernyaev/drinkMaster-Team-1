import {
  FooterStyledLink,
  MediaList,
  MediaListItem,
  StyledFacebookSVG,
  StyledInstagramSVG,
  StyledYoutubeSVG,
} from './FooterMediaList.styled';

export const FooterMediaList = () => {
  const externalLinkProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
  };

  return (
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
  );
};
