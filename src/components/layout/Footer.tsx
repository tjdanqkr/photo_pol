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
function Footer() {
  return (
    <FooterComponent>
      <Container>
        <h2>
          <strong>박성무의 경력기술서</strong>
        </h2>
        <div>만든 사람 : 박성무</div>
        <div>문의 메일: tjdanqkr@gmail.com</div>
        <div>거주지: 서울특별시 신림역 인근</div>
      </Container>
    </FooterComponent>
  );
}

export default Footer;
