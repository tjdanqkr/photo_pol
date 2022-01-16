import { useCallback, useEffect, useState } from "react";
import { Col, Row, Container, Table, Button, Form } from "react-bootstrap";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { LOTTOADD, LOTTOANALYZE, LOTTOCAMERA } from "../../../store/lotto";
const BoxForm = styled.div`
  width: 100%;
  overflow: scroll;
`;

function LottoAnalyze() {
  const statisticsNumDesc = useAppSelector(
    (state) => state.lotto.statisticsNumDesc
  );
  const statisticsAppDesc = useAppSelector(
    (state) => state.lotto.statisticsAppDesc
  );
  const suggestion = useAppSelector((state) => state.lotto.suggestion);
  const dispatch = useAppDispatch();
  const [numberList, setNumberList] = useState<number[]>([]);

  useEffect(() => {
    setNumberListFuntion();
  }, []);

  const setNumberListFuntion = () => {
    let List = [];
    for (let i = 0; i < 45; i++) {
      List.push(i + 1);
    }
    setNumberList(List);
  };

  return (
    <BoxForm>
      <h4>번호 순</h4>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            {numberList.map((num) => (
              <td key={num}>{num}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {numberList.map((num) => {
              const findObj = statisticsNumDesc.find(
                (data) => data.num === num
              );
              const appearance = findObj?.appearance ? findObj?.appearance : 0;
              return <td key={num}>{appearance}</td>;
            })}
          </tr>
        </tbody>
      </Table>
      <h4>많이 나온 순</h4>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            {statisticsAppDesc.map((data) => (
              <td key={data.num}>{data.num}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {statisticsAppDesc.map((data) => (
              <td key={data.num}>{data.appearance}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </BoxForm>
  );
}
export default LottoAnalyze;
