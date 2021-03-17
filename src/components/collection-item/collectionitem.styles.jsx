import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const ColItemWrapper = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 200px;
  align-items: center;
  position: relative;

  &:hover {
    .btn,
    .img {opacity: 0.8;}
    .btn{display: flex;}
  }

  @media (max-width: 800px) {
    width: 40vw;
    &:hover {
      .btn,
      .img {opacity: unset;}
    }
  }
`;

export const ColItemButton = styled(CustomButton)`
  display: none;
  opacity: 0.6;
  position: absolute;
  top: 65%;
  width: 80%;

  &:focus{
    outline: none;
  }
  &:hover{
    opacity: 0.3%;
    cursor: pointer;
  }
  @media screen and (max-width: 800px) {
    display: flex;
    min-width: unset;
    padding: 0 10px;
    &:hover{opacity: unset;}
  }
`;

export const ColItemBackgroundImage = styled.div`
  width: 95%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  margin-bottom: 5px;
  background-image: ${props => props.imageUrl}
`

export const ColItemFooterWrapper = styled.div`
  width: 70%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const ColItemNameWrapper = styled.span`
  width: 100%;
  height: fit-content;
  margin-bottom: 15px;
  margin-right: 0.1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ColItemPriceWrapper = styled.span`
  height: fit-content;
  text-align: right;
`;

export const AlertMessage = styled.div`
  background: white;
  cursor: not-allowed;
  font-size: 1.24rem;
  font-weight: bold;
  height: fit-content;
  padding: 1rem 1.5rem;
  position: absolute;
  text-align: center;
  top: 0;
  z-index: -1111;

  &.success{
    /*border: 0.1rem solid gainsboro;*/
    color: black;
    opacity: 0.8;
    z-index: 1;
  }
`
