import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logosvg from '../../img/logo.svg';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { onClickToggle } from '../../store/toggle';
import './Home.css';
const Title = styled.div`
  background-color: #212529;
  color: white;
  padding-top: 3em;
  padding-bottom: 3em;
`;
const H2 = styled.div`
  font-size: 2em;
  font-weight: bold;
`;
const H1 = styled.div`
  font-size: 2.5em;
  font-weight: bold;
`;
const TitleText = styled.p`
  color: #e2e2e2;
`;
const TitleBox = styled.div`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  padding-top: 2em;
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

const TechTitle = styled.b`
  font-size: 1.5em;
  font-weight: bold;
`;

const ContentForm = styled.div`
  display: flex;
  margin-right: 20 px;
  margin-bottom: 20 px;
  flex-direction: column;
  align-items: stretch;

  padding: 3em;
`;

const ContentTitle = styled.div`
  color: ${(props) => props.theme.color};
  font-size: 2em;
`;

const ContentSub = styled.span`
  background-color: #f6f6f6;
  height: 100%;
  border-radius: 1em;
  padding: 2em;
  &:hover {
    box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
  }
`;
const ToggleArrow = styled.div`
  height: 12px;
  width: 12px;
  transition: all ease 1s;
`;

const ToggleItemTemplate = styled.div`
  border-radius: 0 0 2em 2em;
  background-color: #bfbfbf;
  margin: 20px;
  position: relative;
  min-height: 15em;
  max-height: 25em;
  color: black;
  transform: translate(0, -3em);
  z-index: 0;

  padding: 2em;
  padding-top: 3em;
`;
const ToggleScroll = styled.div`
  overflow-y: scroll;
  max-height: 15em;
  &::-webkit-scrollbar {
    /* 스크롤바 막대 너비 설정 */
    width: 6px;
  } /* 스크롤바 막대 설정*/
  &::-webkit-scrollbar-thumb {
    /* 스크롤바 막대 높이 설정 */
    height: 17%;
    background-color: #7d7d7d; /* 스크롤바 둥글게 설정 */
    border-radius: 10px;
  } /* 스크롤바 뒷 배경 설정*/
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
`;
const ToggleItem = styled.div`
  text-align: center;
`;
const StrongMessage = styled.b`
  font-size: 1em;
`;
const WeakMessage = styled.p``;

const ContentSubText = styled.div`
  color: black;
  margin-top: 1em;
  margin-bottom: 1em;
`;

type content = {
  title: string;
  sub: JSX.Element;
  to: string;
  img: string;
}[];

function Home() {
  const toggle = useAppSelector((state) => state.toggle);
  const dispatch = useAppDispatch();
  const contentList: content = [
    {
      title: 'COVID-19',
      img: '/img/ContentImgs/main_covid.jpg',
      sub: (
        <>
          <StrongMessage>
            서울시의 코로나 api를 활용하여 코로나 확진자 정보와 관련된 대용량
            데이터를 저장하고 가져오는 기능을 구현함
          </StrongMessage>
          <WeakMessage>
            (단, 결산된 데이터 수집을 위해 실시간 배치가 아닌 새벽 시간대에 배치
            프로그램을 돌림)
          </WeakMessage>
          <br />
          <StrongMessage>
            {'=>현재는 서울시에 데이터 제공이 종료되어 업데이트 되지 않음'}
          </StrongMessage>
        </>
      ),
      to: 'skill/1',
    },
    {
      title: 'Lotto',
      img: '/img/ContentImgs/main_lotto.png',
      sub: (
        <>
          <StrongMessage>
            이미 구매한 로또 번호를 분석하여 랜덤으로 새로운 로또 번호를
            추천해주는 프로그램을 구현함
          </StrongMessage>
        </>
      ),
      to: 'skill/2',
    },
  ];

  return (
    <>
      <section>
        <Row>
          <Col md={12}>
            <Title>
              <Container fluid="md">
                <TitleBox>
                  <H2>실력있는 웹 개발자는&nbsp;</H2> <H1>페이지로&nbsp;</H1>
                  <H2>말한다!</H2>
                </TitleBox>
                <br></br>
                <TitleText>
                  &nbsp;&nbsp;개발자 "박성무"만의 사이트를 만들어 말로 설명하지
                  않아도 설득력이 있는 개발자가 되기 위해 경력기술서 사이트를
                  제작하였습니다.
                </TitleText>
              </Container>
            </Title>
          </Col>
        </Row>
      </section>
      <Container fluid="md">
        <section>
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
        </section>
        <section>
          <Row>
            <Col md={1}></Col>
            <Col md={10}>
              <TechTitle>현재 박성무의 사용기술</TechTitle>
            </Col>
            <Col md={1}></Col>
          </Row>
          <Row>
            <Col md={1}></Col>
            <Col md={10}>
              <Row>
                {toggle.map((data, i) => (
                  <Col md={6} key={i}>
                    <div
                      className={data.open ? 'ToggleBoxActive' : 'ToggleBox'}
                      onClick={() => dispatch(onClickToggle(i))}
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/${data.img}`}
                        style={{ width: '100px', height: '100px' }}
                        alt={data.alt}
                      ></img>
                      <h3>
                        <b>{data.alt}</b>
                      </h3>
                      <ToggleArrow>{data.open ? `▲` : `▼`}</ToggleArrow>
                    </div>
                    {data.open ? (
                      <ToggleItemTemplate>
                        <ToggleScroll>
                          {data.content.map((con, i) => (
                            <ToggleItem key={i} style={{ textAlign: 'center' }}>
                              <img
                                src={`${process.env.PUBLIC_URL}/${con.img}`}
                                alt={con.alt}
                                style={{ width: '100%' }}
                              ></img>
                              <b>{`<${con.alt}>`}</b>
                              {data.content.length !== i + 1 ? <hr></hr> : null}
                            </ToggleItem>
                          ))}
                        </ToggleScroll>
                      </ToggleItemTemplate>
                    ) : null}
                  </Col>
                ))}
              </Row>
            </Col>
            <Col md={1}></Col>
          </Row>
        </section>
        <section>
          <Row>
            {contentList.map((data, i) => (
              <Col md={6} key={i}>
                <Link to={data.to} style={{ textDecoration: 'none' }}>
                  <ContentForm>
                    <ContentTitle>{data.title}</ContentTitle>

                    <ContentSub>
                      <img
                        src={`${process.env.PUBLIC_URL}/${data.img}`}
                        style={{ width: '100%', height: '100%' }}
                      ></img>
                      <ContentSubText>{data.sub}</ContentSubText>
                    </ContentSub>
                  </ContentForm>
                </Link>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </>
  );
}

export default Home;
