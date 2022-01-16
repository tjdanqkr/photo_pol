import { useState } from 'react';
import { Toast, Button } from 'react-bootstrap';
import QrReader from 'react-qr-reader';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { LOTTOADD, LOTTOTOASTCLOSE } from '../../../store/lotto';

function LottoQr() {
  const dispatch = useAppDispatch();
  const toast = useAppSelector((state) => state.lotto.toast);
  const [domain, setDomain] = useState<string | null>();
  const [count, setCount] = useState(0);

  const handleError = (err: any) => {
    console.error(err);
  };
  const testHandleScan = () => {
    const urls = [
      'http://m.dhlottery.co.kr/?v=0998q151628333645q041314263240q020508172342q021723263841q0304222536441825105799',
      'http://m.dhlottery.co.kr/?v=0998q030708213641q010718192741q131825263144q031428353945q1017193342431825105350',
      'http://m.dhlottery.co.kr/?v=0998q122226333543q202124373839q101734404445q021525263344q0810113240451825104941',
      'http://m.dhlottery.co.kr/?v=0998q101620233645q111428293044q081214263140q021733404142q0205243136451825107978',
      'http://m.dhlottery.co.kr/?v=0998q010412242734q040508353745q041726293242q111418242629q0408172426411825104460',
    ];

    handleScan(urls[count]);
    setCount(count + 1);
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
      dispatch(LOTTOADD({ round, myLottoList: myNumberList, url: scanResult }));
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
  const setClose = () => {
    dispatch(LOTTOTOASTCLOSE());
  };
  return (
    <>
      <Button variant="outline-primary" onClick={() => testHandleScan()}>
        TEST
      </Button>
      <Toast onClose={setClose} show={toast} delay={1500} autohide>
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
