import { Container } from 'react-bootstrap';
import styled from 'styled-components';

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
const FooterTitle = styled.h2`
  font-weight: bolder;
  margin-bottom: 1em;
`;
const FooterText = styled.div`
  margin-top: 0.5rem;
  color: #e2e2e2;
`;
function Footer() {
  return (
    <FooterComponent>
      <Container>
        <FooterTitle>박성무의 경력기술서</FooterTitle>

        <FooterText>만든 사람 : 박성무</FooterText>
        <FooterText>문의 메일 : tjdanqkr@gmail.com</FooterText>
        <FooterText>거주지 : 서울특별시 신림역 인근</FooterText>
        <FooterText>도와준 사람 : 배은지</FooterText>
      </Container>
    </FooterComponent>
  );
}

export default Footer;
