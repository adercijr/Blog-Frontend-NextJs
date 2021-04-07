import styled, { css } from 'styled-components';

export const Container = styled.div`
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const PostCardCover = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.small};
  background: ${({ theme }) => theme.colors.darkGray};
  img {
    display: block;
    max-height: 200px;
    margin: 0 auto;
  }
`;

export const PostCardHeading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};

    a {
      color: ${theme.colors.darkGray};
    }
  `}
`;
