import { useState } from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { LOTTOADD, LOTTOANALYZE, LOTTOCAMERA } from '../../../store/lotto';

import LottoQr from './LottoQr';
import LottoMyNumber from './LottoMyNumber';
import styled from 'styled-components';
import LottoAnalyze from './LottoAnalyze';
import LottoRecommend from './LottoRecommend';
const Box = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  width: 100%;
  padding: 1rem;
`;
const StrongMessage = styled.b`
  font-size: 1em;
`;

function LottoQrTemplate() {
  const camera = useAppSelector((state) => state.lotto.camera);

  const dispatch = useAppDispatch();

  const cameraHandler = () => {
    dispatch(LOTTOCAMERA());
  };

  return (
    <Container fluid="md">
      <Row>
        <Col md={12}>
          <span></span>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h2>
            <b>사용방법</b>
          </h2>
          <Row>
            <Col md={6}>
              <Box>
                <img
                  src={`${process.env.PUBLIC_URL}/img/Lotto/Lotto_1.jpg`}
                  style={{ width: '100%', height: '100%' }}
                ></img>
                <StrongMessage>
                  1. 하단의 QR Code scan을 통해 이미 구매한 로또의 QR Code를
                  스캔한다.
                </StrongMessage>
                <hr></hr>
                <img
                  src={`${process.env.PUBLIC_URL}/img/Lotto/Lotto_2.png`}
                  style={{ width: '100%', height: '100%' }}
                ></img>
                <StrongMessage>
                  2. analyze 를 통해 분석된 로또 번호를 확인하고, 추첨하기
                  버튼을 눌러 추천 번호를 받는다.
                </StrongMessage>
              </Box>
            </Col>
            <Col md={6}>
              <Box>
                <img
                  src={`${process.env.PUBLIC_URL}/img/Lotto/Lotto_3.png`}
                  style={{ width: '100%', height: '100%' }}
                ></img>
              </Box>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Box>
            <h3>QR Code scan</h3>
            <Button variant="outline-primary" onClick={cameraHandler}>
              camera{camera ? ' close' : ' open'}
            </Button>
            {camera ? <LottoQr></LottoQr> : null}
          </Box>
        </Col>
        <Col md={4}>
          <Box>
            <h3>QR List</h3>

            <LottoMyNumber></LottoMyNumber>
          </Box>
        </Col>
        <Col md={4}>
          <Box>
            <h3>Analyze</h3>
            <LottoAnalyze></LottoAnalyze>
          </Box>

          <Box>
            <h3>랜덤 추천</h3>
            <LottoRecommend></LottoRecommend>
          </Box>
        </Col>
      </Row>
    </Container>
  );
}
export default LottoQrTemplate;
