import styled from 'styled-components'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';

export const Title = styled.h2`
  color: #000000;
  font-weight: 500;
  font-size: calc(14px + (18 - 14) * ((100vw - 300px) / (1600 - 300)));
`
export const Publisher = styled.p`
  color: #777777;
  font-weight: 400;
  font-size: calc(8px + (12 - 8) * ((100vw - 300px) / (1600 - 300)));
`
export const Image = styled.img`
  width: 100%;
  height: 50%;
  max-height: 200px;
  border-radius: 3px;
  @media (min-width: 1072px) {
    height: 75%;
  }
  @media (max-width: 1071px) {
    height: 50%;
  }
`
export const CardWrapper = styled.div`
  flex: 0 1 calc(50% - 8px);
  padding: 20px;
`
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const BookmarkIcon = styled(BsBookmark)`
  margin-right: .8rem;
  font-size: 30px;
  @media only screen and (max-width: 992px) {
    font-size: 20px;
`;
export const FillBookmarkIcon = styled(BsBookmarkFill)`
  margin-right: .8rem;
  font-size: 30px;
  @media only screen and (max-width: 992px) {
    font-size: 20px;
`;