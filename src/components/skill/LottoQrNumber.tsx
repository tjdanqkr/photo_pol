import { useState } from 'react';
import { Col, Row, Container, Table } from 'react-bootstrap';
import QrReader from 'react-qr-reader';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { LOTTOACTIVEKEY, LOTTOADD } from '../../store/lotto';
import styled from 'styled-components';
const Accordion = styled.div`
  width: 100%;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
`;
const AccordionBody = styled.div`
  padding: 1rem 1.25rem;
`;
const AccordionHeader = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.125);
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  background-color: ${(props) =>
    props.unselectable === 'on' ? 'rgba(0, 0, 0, .03)' : '#fff'};
  border: 0;
  border-radius: 0;
  overflow-anchor: none;
`;

function LottoQrNumber() {
  const lottoList = useAppSelector((state) => state.lotto.lottoList);
  const statistics = useAppSelector((state) => state.lotto.statistics);
  const suggestion = useAppSelector((state) => state.lotto.suggestion);
  const activeKey = useAppSelector((state) => state.lotto.activeKey);
  const dispatch = useAppDispatch();
  const [domain, setDomain] = useState<String | null>();
  const [test, setTest] = useState<String | null>();

  const handleError = (err: any) => {
    console.error(err);
  };

  const handleScanTest = () => {
    if (test) {
      console.log(test);
      setRedux(test);
    }
  };
  const handleScan = (scanResult: String | null) => {
    if (scanResult) {
      console.log(scanResult);
      if (scanResult === domain) return;
      setRedux(scanResult);
    }
  };

  const setRedux = async (scanResult: String) => {
    setDomain(scanResult);
    const queryData = scanResult.split('v=')[1].split('q');
    const round = Number(queryData[0]);
    const numberList = queryData.slice(1);
    const myNumberList = await myNumberListFunc(numberList);
    dispatch(LOTTOADD({ round, myLottoList: myNumberList }));
  };
  const myNumberListFunc = (numberList: String[]) => {
    return numberList.map((data) => {
      let Numbers: number[] = [];
      for (let i = 0; i < 6; i++) {
        Numbers.push(Number(data.substr(i * 2, 2)));
      }
      return Numbers;
    });
  };

  const activeKeyHandler = (key: number) => {
    dispatch(LOTTOACTIVEKEY({ key }));
  };

  return (
    <Container fluid="md">
      <Row>
        <Col md={4}>
          <div>QR Code scan</div>
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%' }}
          />
        </Col>
        <Col md={4}>
          <input onChange={(e) => setTest(e.target.value)}></input>
          <button onClick={handleScanTest}>ddd</button>
          <Accordion>
            {lottoList.map((lotto, i) => (
              <div key={i}>
                <AccordionHeader
                  onClick={() => activeKeyHandler(i)}
                  unselectable={
                    activeKey.find((data) => data === i) === undefined
                      ? 'on'
                      : 'off'
                  }
                >
                  {`${lotto.round} 회차`}
                </AccordionHeader>
                {activeKey.find((data) => data === i) === undefined ? (
                  <AccordionBody>
                    <Table striped bordered hover size="sm">
                      <thead></thead>
                      <tbody>
                        {lotto.myLottoList.map((numbers, index) => (
                          <tr>
                            <td>{index + 1}</td>
                            {numbers.map((number) => (
                              <td>{number}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </AccordionBody>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </Accordion>
        </Col>
        <Col md={4}></Col>
      </Row>
    </Container>
  );
}
export default LottoQrNumber;
