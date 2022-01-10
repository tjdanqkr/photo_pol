import { useCallback, useState } from 'react';
import { Col, Toast } from 'react-bootstrap';
import QrReader from 'react-qr-reader';
import { useAppDispatch } from '../../../store/hooks';
import { LOTTOADD } from '../../../store/lotto';

function LottoQr() {
  const dispatch = useAppDispatch();
  const [domain, setDomain] = useState<string | null>();
  const [show, setShow] = useState<boolean>(false);
  const handleError = (err: any) => {
    console.error(err);
  };

  const handleScan = (scanResult: string | null) => {
    const lottoreg = /dhlottery/g;
    if (scanResult) {
      if (scanResult === domain && lottoreg.test(scanResult)) return;
      setRedux(scanResult);
    }
  };

  const setRedux = async (scanResult: string) => {
    try {
      setDomain(scanResult);
      const queryData = scanResult.split('v=')[1].split('q');
      const round = Number(queryData[0]);
      const numberList = queryData.slice(1);
      const myNumberList = await myNumberListFunc(numberList);
      dispatch(LOTTOADD({ round, myLottoList: myNumberList }));
      setShow(true);
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

  return (
    <>
      <Toast onClose={() => setShow(false)} show={show} delay={1500} autohide>
        <Toast.Body>추가되었습니다!</Toast.Body>
      </Toast>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
    </>
  );
}
export default LottoQr;
