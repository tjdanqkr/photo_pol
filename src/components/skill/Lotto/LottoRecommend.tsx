import { Table, Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { BiRefresh } from 'react-icons/bi';
import { LOTTORECOMMEND } from '../../../store/lotto';
const ButtonBox = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;
const Rotate = styled.div`
  transition: all ease 1s;
  display: inline-block;
  cursor: pointer;
  &:hover {
    transform: rotate(360deg);
  }
`;
function LottoRecommend() {
  const recommendList = useAppSelector((state) => state.lotto.recommendList);
  const statisticsNumDesc = useAppSelector(
    (state) => state.lotto.statisticsNumDesc,
  );

  const dispatch = useAppDispatch();
  const onClickRecommend = () => {
    if (statisticsNumDesc.length > 10) {
      dispatch(LOTTORECOMMEND());
    }
  };
  return (
    <>
      <ButtonBox>
        <Button onClick={onClickRecommend} variant="outline-secondary">
          추첨하기{' '}
        </Button>
        <Rotate onClick={onClickRecommend}>
          <BiRefresh size={'100%'}></BiRefresh>
        </Rotate>
      </ButtonBox>

      <Table striped bordered hover size="sm">
        <tbody>
          {recommendList.map((data, i) => (
            <tr key={i}>
              {data.map((number, j) => (
                <td key={j}>{number}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
export default LottoRecommend;
