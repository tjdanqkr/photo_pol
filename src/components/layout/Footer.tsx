import { Container, Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { darkMode, lightMode } from '../../store/themeMode';
const FooterComponent = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #212528;
  overflow: hidden;
  color: white;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;
const FooterText = styled.div`
  margin-top: 1rem;
`;
function Footer() {
  return (
    <FooterComponent>
      <Container>
        <h2>
          <strong>박성무의 경력기술서</strong>
        </h2>
        <FooterText>만든 사람 : 박성무</FooterText>
        <FooterText>문의 메일: tjdanqkr@gmail.com</FooterText>
        <FooterText>거주지: 서울특별시 신림역 인근</FooterText>
      </Container>
    </FooterComponent>
  );
}

export default Footer;
