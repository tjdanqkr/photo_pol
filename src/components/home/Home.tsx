import { Col, Row, Button, Accordion, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { darkMode, lightMode } from '../../store/themeMode';
const InstarBox = styled.div``;

function Home() {
  const mode = useAppSelector((state) => state.theme.mode);

  return (
    <>
      <Row>
        <Col md={12}>
          <h2>프로젝트 소개</h2>

          <p>현 프로젝트는 react를 사용하여 만들어 졌습니다.</p>
          <p>사용 기술로는 </p>
          <p>
            <strong>redux-toolkit</strong>, <strong>redux-saga</strong>,{' '}
            <strong>kakaomapApi</strong>, <strong>styled-components</strong>,{' '}
            <strong>bootstrap</strong>, <strong>typescript</strong>
          </p>
          <p>로 만들었습니다.</p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          {/* <h2>프로젝트 소개</h2> */}
          <h2>사용 기술 소개</h2>
          <p>현 프로젝트는 react를 사용하여 만들어 졌습니다.</p>
          <p>사용 기술로는 </p>
          <p>
            <strong>redux-toolkit</strong>, <strong>redux-saga</strong>,{' '}
            <strong>kakaomapApi</strong>, <strong>styled-components</strong>,{' '}
            <strong>bootstrap</strong>, <strong>typescript</strong>
          </p>
          <p>로 만들었습니다.</p>
        </Col>
      </Row>
      {/* <Row>
        <Col md={12}>
          
          <h2>사용 기술 소개</h2>
          <p>현 프로젝트는 react를 사용하여 만들어 졌습니다.</p>
          <p>사용 기술로는 </p>
          <p>
            <strong>redux-toolkit</strong>, <strong>redux-saga</strong>,{' '}
            <strong>kakaomapApi</strong>, <strong>styled-components</strong>,{' '}
            <strong>bootstrap</strong>, <strong>typescript</strong>
          </p>
          <p>로 만들었습니다.</p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          
          <h2>사용 기술 소개</h2>
          <p>현 프로젝트는 react를 사용하여 만들어 졌습니다.</p>
          <p>사용 기술로는 </p>
          <p>
            <strong>redux-toolkit</strong>, <strong>redux-saga</strong>,{' '}
            <strong>kakaomapApi</strong>, <strong>styled-components</strong>,{' '}
            <strong>bootstrap</strong>, <strong>typescript</strong>
          </p>
          <p>로 만들었습니다.</p>
        </Col>
      </Row> */}
      {/* <Row>
        <Col md={12}>
          <h2>사용 기술 소개</h2>
          <p>현 프로젝트는 react를 사용하여 만들어 졌습니다.</p>
          <p>사용 기술로는 </p>
          <p>
            <strong>redux-toolkit</strong>, <strong>redux-saga</strong>,{' '}
            <strong>kakaomapApi</strong>, <strong>styled-components</strong>,{' '}
            <strong>bootstrap</strong>, <strong>typescript</strong>
          </p>
          <p>로 만들었습니다.</p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2>사용 기술 소개</h2>
          <p>현 프로젝트는 react를 사용하여 만들어 졌습니다.</p>
          <p>사용 기술로는 </p>
          <p>
            <strong>redux-toolkit</strong>, <strong>redux-saga</strong>,{' '}
            <strong>kakaomapApi</strong>, <strong>styled-components</strong>,{' '}
            <strong>bootstrap</strong>, <strong>typescript</strong>
          </p>
          <p>로 만들었습니다.</p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2>사용 기술 소개</h2>
          <p>현 프로젝트는 react를 사용하여 만들어 졌습니다.</p>
          <p>사용 기술로는 </p>
          <p>
            <strong>redux-toolkit</strong>, <strong>redux-saga</strong>,{' '}
            <strong>kakaomapApi</strong>, <strong>styled-components</strong>,{' '}
            <strong>bootstrap</strong>, <strong>typescript</strong>
          </p>
          <p>로 만들었습니다.</p>
        </Col>
      </Row> */}
    </>
  );
}

export default Home;
