import styled from 'styled-components'
import { colors } from './globalStyles'


const Logo = styled.h1`
  font-family: billabong, 'billabongregular';
  text-align: center;
  font-weight: 100;
  font-size: 13rem;
  margin: 2rem 0;
  letter-spacing: -1px;
  text-shadow: 0px 4px 0 rgba(18, 86, 136, 0.11);
  
  a {
    color: ${colors.blue};
    text-decoration: none;
    &:focus {
      outline: 0;
    }
  }
`

export default Logo
