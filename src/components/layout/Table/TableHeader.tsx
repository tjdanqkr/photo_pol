import styled from 'styled-components';
import { TableHeaderType } from './TableForm';

type HeaderProps = {
  hedearList: TableHeaderType[];
  width: number;
};

const TableTr = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  background-color: white;
  color: black;
  font-weight: bold;
  position: sticky;
`;

const TableTd = styled.div`
  border: 1px outset gray;
  border-collapse: collapse;
  padding: 5px;
  font-size: 2em;
`;
function TableHeader(props: HeaderProps) {
  const { hedearList, width } = props;
  return (
    <TableTr style={{ width }}>
      {hedearList.map((data, i) => {
        return (
          <TableTd key={i} style={{ width: `${data.size}%` }}>
            {data.name}
          </TableTd>
        );
      })}
    </TableTr>
  );
}
export default TableHeader;
