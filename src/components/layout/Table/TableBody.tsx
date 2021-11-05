import styled, { ThemeProps } from 'styled-components';
import { VariableSizeList as List } from 'react-window';
import { TableHeaderType } from './TableForm';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { useMemo } from 'react';

type TableProps = {
  renderList: any[];
  hedearList: TableHeaderType[];
  getList: string;
};

type CellProps = {
  index: number;
};
type scrollAction = {
  scrollDirection: 'forward' | 'backward';
  scrollOffset: number;
  scrollUpdateWasRequested: boolean;
};

const TableTr = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  background-color: ${(props) => props.theme.mainBackground};
  &:hover {
    background-color: aliceblue;
  }
  &: nth-child(odd) {
    background-color: ${(props) => props.theme.oddBackground};
  }
`;

const TableTd = styled.div`
  border: 1px outset gray;
  border-collapse: collapse;
  padding: 5px;
`;

const TableBody = (props: TableProps) => {
  const { renderList, hedearList, getList } = props;

  const dispatch = useAppDispatch();

  const Column = (cellProps: CellProps) => {
    const { index } = cellProps;
    const rowData = renderList[index];

    return (
      <TableTr>
        {hedearList.map((data, i) => {
          return (
            <TableTd key={i} style={{ maxWidth: `${data.size}%` }}>
              {' '}
              {rowData[data.key]}
            </TableTd>
          );
        })}
      </TableTr>
    );
  };

  const rowHeights = renderList.map(() => 100);

  const getItemSize = (index: number) => rowHeights[index];

  const onScroll = (props: scrollAction) => {
    console.log(props.scrollOffset);
  };
  return (
    <div>
      <List
        height={600}
        itemSize={getItemSize}
        itemCount={renderList.length}
        width={'100%'}
        onScroll={onScroll}
      >
        {Column}
      </List>
    </div>
  );
};
export default TableBody;
