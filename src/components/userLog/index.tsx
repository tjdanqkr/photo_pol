import { useCallback } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { postUserLog } from '../../store/userLog';

function UserLog() {
  const userLog = useAppSelector((state) => state.userLog);
  const dispatch = useAppDispatch();
  const useDispatchF = useDispatch();
  const handleFormSubmit = useCallback(
    (event) => {
      dispatch({
        type: 'INSERT_USER_LOG',
        userLog: [
          {
            action: 'buttonClick',
            time: new Date().toLocaleString(),
            log: '',
          },
        ],
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
              console.log(userLog);
            }}
          >
            click log
          </button>

          <button
            onClick={(e) => {
              handleFormSubmit(e);
            }}
          >
            click log
          </button>
          <button
            onClick={(e) => {
              dispatch(
                postUserLog({
                  action: 'buttonClick',
                  time: new Date().toLocaleString(),
                  log: '',
                }),
              );
            }}
          >
            click log
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default UserLog;
