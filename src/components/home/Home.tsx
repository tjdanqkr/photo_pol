import { Col, Row, Container } from 'react-bootstrap';
import styled from 'styled-components';
import logosvg from '../../img/logo.svg';
const Title = styled.div`
  background-color: #212529;
  color: white;

  padding-top: 3em;
  padding-bottom: 3em;
`;
const H2 = styled.div`
  font-size: 2em;
`;
const H1 = styled.div`
  font-size: 2.5em;
`;
const TitleBox = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
`;
const GrayBox = styled.div`
  background-color: #e2e2e2;
  margin-left: 2em;
  margin-right: 2em;
  margin-top: 3em;
  margin-bottom: 3em;
  padding: 1em 4em;
  border-radius: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
`;
const LogoForm = styled.div`
  position: absolute;
  transform: translate(-1em, -4em);
`;
const RelativeBox = styled.div`
  position: relative;
  width: 7em;
`;

const TechForm = styled.div`
  display: flex;
  margin-right: 20 px;
  margin-bottom: 20 px;
  flex-direction: column;
  align-items: stretch;
`;

const TechImg = styled.img`
  width: 100%;
  max-height: 7em;
`;
const TechImgTem = styled.div`
  width: 100%;
  max-height: 7em;
`;

const TechText = styled.div`
  text-align: center;
`;

const ContentForm = styled.div`
  display: flex;
  margin-right: 20 px;
  margin-bottom: 20 px;
  flex-direction: column;
  align-items: stretch;
  height: 30em;
  padding: 3em;
`;

const ContentTitle = styled.div`
  font-size: 2em;
`;

const ContentSub = styled.div`
  background-color: #b7a9ff;
  height: 100%;
  border-radius: 1em;
  padding: 2em;
`;
type tech = {
  img: string;
  text: string;
}[];

type content = {
  title: string;
  sub: string;
}[];

function Home() {
  const techList: tech = [
    {
      img: 'redux.png',
      text: 'redux',
    },
    {
      img: 'saga.png',
      text: 'redux-saga',
    },
    {
      img: '73084694_2423120627903939_2518955300711563264_n.png',
      text: '외부 맵 API',
    },
  ];
  const contentList: content = [
    {
      title: '1111',
      sub: '1111',
    },
    {
      title: '2222',
      sub: '2222',
    },
    {
      title: '3333',
      sub: '3333',
    },
    {
      title: '4444',
      sub: '4444',
    },
  ];

  return (
    <>
      <Row>
        <Col md={12}>
          <Title>
            <Container fluid="md">
              <TitleBox>
                <H2>실력있는 웹 개발자는&nbsp;</H2> <H1>페이지로&nbsp;</H1>
                <H2>말한다!</H2>
              </TitleBox>
            </Container>
          </Title>
        </Col>
      </Row>
      <Container fluid="md">
        <Row>
          <Col md={12}>
            <GrayBox>
              <strong>현재 페이지는 react를 사용하여 만들어졌습니다.</strong>
              <RelativeBox>
                <LogoForm>
                  <img src={logosvg} className="App-logo" alt="logo" />
                </LogoForm>
              </RelativeBox>
            </GrayBox>
          </Col>
        </Row>

        <Row>
          {techList.map((data, i) => (
            <Col md={4} key={i}>
              <TechForm>
                <TechImgTem>
                  <TechImg
                    crossOrigin="anonymous"
                    src={data.img}
                    alt={data.text}
                  ></TechImg>
                </TechImgTem>
                <TechText>{data.text}</TechText>
              </TechForm>
            </Col>
          ))}
        </Row>
        <Row>
          {contentList.map((data, i) => (
            <Col md={6} key={i}>
              <ContentForm>
                <ContentTitle>{data.title}</ContentTitle>
                <ContentSub>{data.sub}</ContentSub>
              </ContentForm>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
