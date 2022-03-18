import { useCallback, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import TableForm, { TableHeaderType } from "../../layout/Table/TableForm";

function CoronaMap() {
  const corona = useAppSelector((state) => state.corona.corona);
  const index = useAppSelector((state) => state.corona.index);
  const coronaHeader: TableHeaderType[] = [
    {
      key: "CORONA19_DATE",
      name: "확진일",
      size: 10,
      filterType: "date",
      custom: false,
    },
    // {
    //   key: 'CORONA19_NO',
    //   name: '환자번호',
    //   size: 5,
    //   filterType: 'number',
    //   custom: false,
    // },
    {
      key: "CORONA19_COUNTRY",
      name: "국적",
      size: 10,
      filterType: "string",
      custom: false,
    },

    {
      key: "CORONA19_PERSONAL",
      name: "환자정보",
      size: 10,
      filterType: "string",
      custom: false,
    },
    {
      key: "CORONA19_AREA",
      name: "지역",
      size: 10,
      filterType: "string",
      custom: false,
    },
    {
      key: "CORONA19_TRAVEL_HISTORY",
      name: "여행력",
      size: 10,
      filterType: "string",
      custom: false,
    },
    {
      key: "CORONA19_CONTACT_HISTORY",
      name: "접촉력",
      size: 10,
      filterType: "string",
      custom: false,
    },
    {
      key: "CORONA19_CORRECTIVE",
      name: "조치사항",
      size: 10,
      filterType: "string",
      custom: false,
    },
    {
      key: "CORONA19_LEAVE_STATUS",
      name: "상태",
      size: 10,
      filterType: "string",
      custom: false,
    },
    {
      key: "CORONA19_MOVING_PATH",
      name: "이동경로",
      size: 10,
      filterType: "string",
      custom: false,
    },
    {
      key: "CORONA19_IDATE",
      name: "등록일",
      size: 10,
      filterType: "date",
      custom: false,
    },
  ];
  const dispatch = useAppDispatch();
  const getCorona = useCallback(() => {
    dispatch({
      type: "GET_CORONA",
      index,
    });
  }, [dispatch, index]);
  useEffect(() => {
    if (corona.length === 0) {
      getCorona();
    }
  });

  return (
    <Container fluid="md">
      <Row>
        <Col md={12}>
          <span></span>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
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
