import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  height: 110px;
  bottom: 0px;
  position: absolute;
  
`;

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  color: white;
`;

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <h2>송은혁
        <p>seh8145@naver.com</p>
      </h2>
      </FooterContainer>
  );
}

export default Footer;