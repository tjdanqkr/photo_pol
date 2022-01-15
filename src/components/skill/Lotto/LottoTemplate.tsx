import { useState } from "react";
import { Col, Row, Container, Table, Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { LOTTOADD, LOTTOANALYZE, LOTTOCAMERA } from "../../../store/lotto";

import LottoQr from "./LottoQr";
import LottoMyNumber from "./LottoMyNumber";
import styled from "styled-components";
import LottoAnalyze from "./LottoAnalyze";
import LottoRecommend from "./LottoRecommend";
const Box = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  width: 100%;
  padding: 1rem;
`;
function LottoQrTemplate() {
  const camera = useAppSelector((state) => state.lotto.camera);
  const suggestion = useAppSelector((state) => state.lotto.suggestion);
  const activeKey = useAppSelector((state) => state.lotto.activeKey);
  const dispatch = useAppDispatch();
  const [test, setTest] = useState<string | null>(
    "https://m.dhlottery.co.kr/qr.do?method=winQr&v=0997q071524404245q151718273144q111215232740q031114212226q2328304042441785483554"
  );

  const handleScanTest = () => {
    if (test) {
      setRedux(test);
    }
  };

  const setRedux = async (scanResult: string) => {
    try {
      const queryData = scanResult.split("v=")[1].split("q");
      const round = Number(queryData[0]);
      const numberList = queryData.slice(1);
      const myNumberList = await myNumberListFunc(numberList);
      dispatch(LOTTOADD({ round, myLottoList: myNumberList }));
    } catch (err: any) {
      console.error(err);
    }
  };
  const myNumberListFunc = (numberList: string[]) => {
    return numberList.map((data) => {
      let Numbers: number[] = [];
      for (let i = 0; i < 6; i++) {
        Numbers.push(Number(data.substr(i * 2, 2)));
      }
      return Numbers;
    });
  };

  const analyzeHandler = () => {
    dispatch(LOTTOANALYZE());
  };
  const cameraHandler = () => {
    dispatch(LOTTOCAMERA());
  };

  return (
    <Container fluid="md">
      <Row>
        <Col md={12}>
          <Box>
            <h2>
              <strong>제 취미가 로또서 만든 기능입니다</strong>
            </h2>
            <h4>로또를 자동으로 사고 싶은 만큼 사고</h4>
            <h4>그 자동으로 나온 번호를 제 나름의 분석 법을 정의 했고,</h4>
            <h4>그리고 추천 번호 까지 해봅니다.</h4>
            <h4>추천 번호는 5개 숫자 조합으로 </h4>
            <h4>안나온 번호의 3개로 랜덤 조합 1개</h4>
            <h4>나온 번호 top 5로 랜덤 두 번호 조합 1개</h4>
            <h4>나머지는 그냥 랜덤 번호입니다.</h4>
            <h4>모두 기본 조합에서 나오지 않은 번호로 만들었습니다.</h4>
          </Box>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Box>
            <h3>QR Code scan</h3>
            <Button variant="outline-primary" onClick={cameraHandler}>
              camera{camera ? " close" : " open"}
            </Button>
            {camera ? <LottoQr></LottoQr> : null}
          </Box>
        </Col>
        <Col md={4}>
          <Box>
            <h3>QR List</h3>
            <input onChange={(e) => setTest(e.target.value)}></input>
            <button onClick={handleScanTest}>ddd</button>
            <button onClick={() => console.log(activeKey)}>ddd</button>
            <button onClick={analyzeHandler}>ddd</button>
            <LottoMyNumber></LottoMyNumber>
          </Box>
        </Col>
        <Col md={4}>
          <Row>
            <Box>
              <h3>Analyze</h3>
              <LottoAnalyze></LottoAnalyze>
            </Box>
          </Row>
          <Row>
            <Box>
              <h3>랜덤 추천</h3>
              <LottoRecommend></LottoRecommend>
            </Box>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default LottoQrTemplate;
