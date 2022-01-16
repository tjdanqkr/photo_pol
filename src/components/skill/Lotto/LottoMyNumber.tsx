import { Table, Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  LOTTOACTIVEKEY,
  LOTTOANALYZE,
  LOTTOREMOVE,
} from '../../../store/lotto';
import styled from 'styled-components';
import { GoDiffRemoved } from 'react-icons/go';

const Accordion = styled.div`
  width: 100%;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
`;
const AccordionForm = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
`;
const AccordionBody = styled.div`
  padding: 1rem 1.25rem;
`;
const AccordionRemoveButton = styled.div`
  border: 0;
  border-radius: 0;
  overflow-anchor: none;
  cursor: pointer;
`;
const AccordionHeader = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  background-color: ${(props) =>
    props.unselectable === 'on' ? '#d9d9d9' : '#fff'};
  border: 0;
  border-radius: 0;
  overflow-anchor: none;
`;
const AccordionHeaderButton = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.125);
  width: 100%;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  background-color: ${(props) =>
    props.unselectable === 'on' ? '#d9d9d9' : '#fff'};
  border: 0;
  border-radius: 0;
  overflow-anchor: none;
`;

function LottoMyNumber() {
  const lottoList = useAppSelector((state) => state.lotto.lottoList);
  const activeKey = useAppSelector((state) => state.lotto.activeKey);
  const dispatch = useAppDispatch();

  const activeKeyHandler = (key: number, type: 'open' | 'close') => {
    dispatch(LOTTOACTIVEKEY({ key, type }));
  };

  const removeHandler = (key: number) => {
    dispatch(LOTTOREMOVE({ key }));
  };
  const analyzeHandler = () => {
    if (lottoList.length > 2) dispatch(LOTTOANALYZE());
  };

  return (
    <>
      <Button onClick={analyzeHandler} variant="outline-secondary">
        analyze
      </Button>
      <Accordion>
        {lottoList.map((lotto, i) => (
          <AccordionForm key={i}>
            <AccordionHeader
              unselectable={
                activeKey.find((data) => data === i) !== undefined
                  ? 'on'
                  : 'off'
              }
            >
              <AccordionHeaderButton
                onClick={() =>
                  activeKeyHandler(
                    i,
                    activeKey.find((data) => data === i) !== undefined
                      ? 'close'
                      : 'open',
                  )
                }
                unselectable={
                  activeKey.find((data) => data === i) !== undefined
                    ? 'on'
                    : 'off'
                }
              >{`${lotto.round} 회차(${i + 1})\n ${
                lotto.url
              }`}</AccordionHeaderButton>
              <AccordionRemoveButton onClick={() => removeHandler(i)}>
                <GoDiffRemoved></GoDiffRemoved>
              </AccordionRemoveButton>
            </AccordionHeader>
            {activeKey.find((data) => data === i) !== undefined ? (
              <AccordionBody>
                <Table striped bordered hover size="sm">
                  <thead></thead>
                  <tbody>
                    {lotto.myLottoList.map((numbers, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td></td>
                        {numbers.map((number) => (
                          <td key={number}>{number}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </AccordionBody>
            ) : null}
          </AccordionForm>
        ))}
      </Accordion>
    </>
  );
}
export default LottoMyNumber;
