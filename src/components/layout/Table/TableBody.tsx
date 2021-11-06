import React, { useRef } from 'react';
import styled, { ThemeProps } from 'styled-components';
import { TableHeaderType } from './TableForm';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
// import { VariableSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import {
  CellMeasurer,
  CellMeasurerCache,
  List,
  ListRowProps,
  Size,
  WindowScroller,
} from 'react-virtualized';

type TableProps = {
  renderList: any[];
  hedearList: TableHeaderType[];
  getList: string;
};

type CellProps = {
  index: number;
  style: object;
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
  background-color: white;
  color: black;
  font-weight: bold;
  &:hover {
    background-color: aliceblue;
  }
`;

const TableTrOdd = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  background-color: #e0e0e0;
  color: black;
  font-weight: bold;
  &:hover {
    background-color: aliceblue;
  }
`;

const TableTd = styled.div`
  border: 1px outset gray;
  border-collapse: collapse;
  padding: 5px;
`;
const cache = new CellMeasurerCache({
  defaultWidth: 100,
  fixedWidth: true,
});
const TableBody = (props: TableProps) => {
  const { renderList, hedearList, getList } = props;
  const listRef = useRef<List | null>(null);
  const Column = ({ index, key, parent, style }: ListRowProps) => {
    const rowData = renderList[index];

    return (
      <CellMeasurer
        cache={cache}
        parent={parent}
        key={key}
        columnIndex={0}
        rowIndex={index}
      >
        {index % 2 === 0 ? (
          <TableTr style={style}>
            {hedearList.map((data, i) => {
              return (
                <TableTd key={i} style={{ width: `${data.size}%` }}>
                  {rowData[data.key]}
                </TableTd>
              );
            })}
          </TableTr>
        ) : (
          <TableTrOdd style={style}>
            {hedearList.map((data, i) => {
              return (
                <TableTd key={i} style={{ width: `${data.size}%` }}>
                  {rowData[data.key]}
                </TableTd>
              );
            })}
          </TableTrOdd>
        )}
      </CellMeasurer>
    );
  };

  return (
    <div style={{ height: 1000, overflow: 'auto' }}>
      {/* <WindowScroller>
        {({ height, scrollTop, isScrolling, onChildScroll }) => ( */}
      <AutoSizer>
        {({ width, height }: Size) => {
          return (
            <List
              ref={listRef}
              height={height}
              width={width}
              // isScrolling={isScrolling}
              overscanRowCount={0}
              // onScroll={onChildScroll}
              // scrollTop={scrollTop}
              rowCount={renderList.length}
              rowHeight={cache.rowHeight}
              rowRenderer={Column}
              deferredMeasurementCache={cache}
            ></List>
          );
        }}
      </AutoSizer>
      {/* )}
       </WindowScroller> */}
    </div>
  );
};
export default TableBody;
