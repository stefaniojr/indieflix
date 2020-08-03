import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 1px solid var(--white);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 15px;
  padding-bottom: 15px;
  color: var(--white);
  text-align: center;
  
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const LogoFooter = styled.footer`
   max-width: 168px;
  @media (max-width: 800px) {
    .Logo {
      max-width: 105px;
    }
`;
