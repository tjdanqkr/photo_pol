import { Col, Row, Container, Button, Card } from "react-bootstrap";
import styled from "styled-components";
const Title = styled.h3``;
const SubTitle = styled.h5`
  font-weight: bold;
`;

const MyIntoroduce = [
  {
    title: "[성장 과정]",
    subTitle: "저는 어렸을 때부터 성장하여 뿌듯함을 얻는 것을 좋아했습니다.",
    content:
      " 그래서 저는 초등학교 때에도 공부만 하지 않고, 축구나 대외 활동을 했습니다. 그리고 저의 인생의 꽃은 대학교 때 군대를 다녀와서입니다. 저는 학기마다 무엇을 하려 했습니다. 2학년 때는 Auto CAD 2급        자격증을 취득하였고, 3학년 때는 CATIA를 공부하여 CATIA Part Design 자격증을 취득하였습니다. 그리고 4학년 때는 최종 프로젝트 때문에 바빠서 잘하지 못하긴 했지만, JSL인재 교육 개발원에서 하는 일본 IT 취업 교육을 들었습니다. 그 교육을 들으면서 IT를 할 때, 잘할 수 있고, 흥미가 있는 일을 찾았습니다. 컴퓨터를 좋아하는 저에겐 개발자란 너무 매력 있는 직종이었습니다. 그래서 많은 것을 배우고자, JSL 교육이 끝나고도, 쉬지 않고 공부를 하기 위해서 안동대에서 보조강사로 일하며, React 기반 영화 평점 사이트를 개발하였고 현재는 서울 비트 교육센터에서 IOT를 이용한 빅데이터 AI 전문가 과정을 듣고 있습니다. 그리고 프로젝트로는 서울시 상권을 분석하여 창업 시 생존율을 구하는 프로젝트를 하였습니다. 그 후 스왈라비(주)에 프론트 엔드로 입사했습니다. 회사에서는 프론트로 입사를 하였지만, 인원이 없어서 저는 웹 쪽의 서버까지 맡게되어 풀스택으로 전향을 하였습니다. 서버는 vert.x라는 라이브러리를 사용했습니다. 하지만 저는 자바보다 js가 익숙하여 nodejs 에 관심을 갖게 되었습니다. 그래서 express와 nestjs 를 사용해 보았습니다.",
  },
  {
    title: "[경험 및 활동사항]",
    subTitle: "자신의 재능을 200% 발휘하다.",
    content:
      " 저는 JSL 인재개발원에서 IT 교육을 들으면서 Swing 기능을 사용해 PC방 관리 프로그램을 만들었습니다. 그 과정 중 저는 팀장을 맡게 되어 MySql을 사용을 하여 쿼리 문을 작성하고 백엔드를 관리하여 기능 구현을 하였습니다. 그리고 최종 프로젝트에서는 JSP를 사용하여 MVC 2 패턴으로 쇼핑몰을 만들어 보았습니다. 그 과정에서 저는 백엔드를 담당하였고 디자인 관련 수정 작업을 많이 도와주었습니다. 해당 프로젝트에서는 Git hub을 사용하여 프로젝트 관리를 하였습니다. 저는 프론트 엔드 측에서도 여러 가지 지식을 보유했기 때문에 팀원들의 부족한 부분을 도와주며 프로젝트를 성공적으로 마칠 수 있었습니다. 저는 제가 IT 관련 개발에 재능이 있음을 깨닫고, 해당 인재교육원의 강사님의 추천으로 저는 안동대학교 한국과학기술원에서 머신러닝 교육의 보조 강사를 하게 되어 학생들에게 JAVA와 JSP를 가르쳤습니다. bit교육센터에서는 프론트 엔드로서 서울시 상권을 분석하여 창업 시 TensorFlow를 사용하여 수익률을 구하는 프로젝트를 하였습니다. 해당 교육을 마친 후 현재 재직중인 회사인 스왈라비(주)에 입사하였고, 고객들이 데이터를 볼 수 있고 관리할 수 있는 포탈 사이트와 회사 직원이 쓸 수 있는 어드민 페이지 유지 보수 관리를 맡았습니다. 처음은 프론트 엔드로 입사하게 되었지만, 회사 사정상 서버와 디비까지 맡게되었습니다. 현재 회사와 저의 직책에 대한 책임감을 가지고, 제가 할 수 있는한 최선을 다해 근무하였습니다.",
  },
  {
    title: "[성격 및 장단점]",
    subTitle: "나에게는 “왜 그런 건지.” 남에게는 “그럴 수도 있지.”",
    content:
      " 저는 스스로 어떤 결과를 도출하기 위해 고민하는 성격입니다. 남의 도움을 받는 것에 거리낌이 있는 것은 아니지만 다른 사람의 도움 역시 제가 스스로 깨닫기 위한 발돋움에 불과합니다. 진정으로 나의 생각, 나의 기술이 되는 것은 스스로 이룩한 결과만이 본인의 것이 된다고 생각합니다. 스스로를 향해 답을 찾아내기 위해 왜 그렇게 되었는지를 끊임없이 고민하고, 결국 한발 더 앞선 스스로를 향해 나아갈 수 있게 됩니다. 때문에 보조강사로 다녔을 때에도 학생들에게 답부터 주지 않고 스스로 생각해볼 수 있는 문제를 내주었습니다. 어려워 하는 학생들에게는 제가 알고 있는 최대한을 발휘하여 함께 문제를 해결해나갔고, 현재까지도 감사해하는 학생들에게 종종 연락이 오곤 합니다. 제가 늘 일하며 남에게 하는 말이 “그럴 수도 있지.” 입니다. 남의 실수나 잘못을 파고들거나 집착하는 성격이 아니라 늘 유순하게 넘겨버려 손해를 보는 일도 많습니다. 그러나 저는 모든 사람이 스스로에게 가장 엄격하다고 생각합니다. 본인의 잘못은 본인이 꾸짖고, 옆에서 한 사람 쯤은 “그럴 수도 있지.” 라고 넘겨주는 역할도 필요하다고 느낍니다. 저의 어머니의 신조가 ‘손해를 보더라도 남에게 해를 끼치지 말자.’ 입니다. 화를 내고 따지고 들어도 이미 일어난 일은 일어난 것이고, 감정적으로 몰아세우기 보다는 합심하여 문제를 해결하는 것이 더 중요하다고 생각합니다.",
  },
  {
    title: "[현재 진행중]",
    // subTitle: '나에게는 “왜 그런 건지.” 남에게는 “그럴 수도 있지.”',
    content:
      " 현재는 nestjs의 규격화된 라이브러리에 매력에 빠져서 공부하였고 몽고 디비를 활용하여 친누나한테 부탁 받은 사이트 개발을 하고 있습니다.",
  },
];
function SelfIntroduce() {
  return (
    <Container fluid="md">
      <Row>
        {MyIntoroduce.map((data) => (
          <Col md={6}>
            <Card>
              <Card.Header>
                <Title>{data.title}</Title>
              </Card.Header>
              <Card.Body>
                <SubTitle>{data.subTitle}</SubTitle>
                <p>{data.content}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default SelfIntroduce;
