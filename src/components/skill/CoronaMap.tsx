import { useCallback } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import TableForm, { TableHeaderType } from '../layout/Table/TableForm';

function CoronaMap() {
  const corona = useAppSelector((state) => state.corona.corona);
  const coronaHeader: TableHeaderType[] = [
    {
      key: 'CORONA19_DATE',
      name: '확진일',
      size: 5,
      filterType: 'date',
      custom: false,
    },
    {
      key: 'CORONA19_NO',
      name: '환자번호',
      size: 5,
      filterType: 'number',
      custom: false,
    },
    {
      key: 'CORONA19_COUNTRY',
      name: '국적',
      size: 5,
      filterType: 'string',
      custom: false,
    },

    {
      key: 'CORONA19_PERSONAL',
      name: '환자정보',
      size: 5,
      filterType: 'string',
      custom: false,
    },
    {
      key: 'CORONA19_AREA',
      name: '지역',
      size: 5,
      filterType: 'string',
      custom: false,
    },
    {
      key: 'CORONA19_TRAVEL_HISTORY',
      name: '여행력',
      size: 5,
      filterType: 'string',
      custom: false,
    },
    {
      key: 'CORONA19_CONTACT_HISTORY',
      name: '접촉력',
      size: 5,
      filterType: 'string',
      custom: false,
    },
    {
      key: 'CORONA19_CORRECTIVE',
      name: '조치사항',
      size: 5,
      filterType: 'string',
      custom: false,
    },
    {
      key: 'CORONA19_LEAVE_STATUS',
      name: '상태',
      size: 5,
      filterType: 'string',
      custom: false,
    },
    {
      key: 'CORONA19_MOVING_PATH',
      name: '이동경로',
      size: 5,
      filterType: 'string',
      custom: false,
    },
    {
      key: 'CORONA19_IDATE',
      name: '등록일',
      size: 5,
      filterType: 'date',
      custom: false,
    },
  ];
  const dispatch = useAppDispatch();
  const handleFormSubmit2 = useCallback(
    (event) => {
      dispatch({
        type: 'GET_CORONA',
        index: 1,
      });
    },
    [[], dispatch],
  );

  return (
    <Container fluid="md">
      <Row>
        <Col md={12}>
          <button
            onClick={() => {
              console.log(corona);
            }}
          >
            click log
          </button>

          <button
            onClick={(e) => {
              handleFormSubmit2(e);
            }}
          >
            click log
          </button>
          <TableForm
            hedearList={coronaHeader}
            name="corona"
            renderList={corona}
            getList="GET_CORONA"
          ></TableForm>
        </Col>
      </Row>
    </Container>
  );
}

export default CoronaMap;
