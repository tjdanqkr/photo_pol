import { useCallback, useEffect } from 'react';
import QrReader from 'react-qr-reader';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

function LottoQrNumber() {
  const lottoList = useAppSelector((state) => state.lotto.lottoList);
  const statistics = useAppSelector((state) => state.lotto.statistics);
  const suggestion = useAppSelector((state) => state.lotto.suggestion);
  const dispatch = useAppDispatch();

  const handleScan = (data: any) => {
    if (data) {
      console.log(data);
    }
  };
  const handleError = (err: any) => {
    console.error(err);
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
      </div>
    </>
  );
}
export default LottoQrNumber;