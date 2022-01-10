import { useCallback, useEffect, useState } from 'react';
import QrReader from 'react-qr-reader';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

function LottoQrNumber() {
  const lottoList = useAppSelector((state) => state.lotto.lottoList);
  const statistics = useAppSelector((state) => state.lotto.statistics);
  const suggestion = useAppSelector((state) => state.lotto.suggestion);
  const dispatch = useAppDispatch();
  const [da, setData] = useState();
  const [er, setError] = useState();

  const handleScan = (data: any) => {
    if (data) {
      console.log(data);
      setData(data.toString());
    }
  };
  const handleError = (err: any) => {
    console.error(err);
    setError(err.toString());
  };

  return (
    <>
      <div>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />

        <p>data: {da}</p>
        <p>err: {er}</p>
      </div>
    </>
  );
}
export default LottoQrNumber;
