import styled, {keyframes} from 'styled-components'
import { Link } from 'react-router-dom'

//import styled, {css} from 'styled-components'
//const OptionPadding = css`padding: 10px 15px;`;

//const spin = keyframes` from { transform: rotate(0deg); } to { transform: rotate(360deg); } `

const pulse = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const HeaderWrapper = styled.div`
  & {
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;

    @media(max-width: 800px){
      height: 60px;
      padding: 10px;
      margin-bottom: 20px;
    }
  }
`
export const StyledLinkLogoWrapper = styled(Link)`
  & {
    height: 80px;
    width: 70px;
    padding: 25px;

    >svg.logo  #Triangle,
    >svg.logo  #Oval{
      animation: ${pulse} infinite 1s alternate;
    }
    

    @media(max-width: 800px){
      width: 50px;
      padding: 0;
    }
  }    
`;

export const OptionsWrapper = styled.div`
  &{
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: flex-end;
    width: 75%;
    
    @media(max-width: 800px){
      width: 80%;
    }
  }
`;
export const StyledLinkWrapper = styled(Link)`
  & {
    align-items: center;
    cursor: pointer;
    display: flex;
    height: 100%;
    justify-content: flex-end;
    padding: 10px 15px;
  }
`;
