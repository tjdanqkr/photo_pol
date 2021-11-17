import { useRef } from 'react';
import styled from 'styled-components';
import { TableHeaderType } from './TableForm';
import AutoSizer from 'react-virtualized-auto-sizer';
import {
  CellMeasurer,
  CellMeasurerCache,
  List,
  ListRowProps,
  Size,
} from 'react-virtualized';
import TableHeader from './TableHeader';
import { Scrollbars } from 'react-custom-scrollbars';

type TableProps = {
  renderList: any[];
  hedearList: TableHeaderType[];
  getList: string;
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
const TableBodyForm = styled.div`
  height: 1000px;
  overflow: hidden;
`;
const cache = new CellMeasurerCache({
  defaultWidth: 100,
  fixedWidth: true,
});

const TableBody = (props: TableProps) => {
  const { renderList, hedearList } = props;
  const listRef = useRef<List | null>(null);
  const handleScroll = (e: any) => {
    const { scrollTop, scrollLeft } = e.target;
    const Grid = listRef.current?.Grid;
    Grid?.handleScrollEvent({ scrollTop, scrollLeft });
  };

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
    <TableBodyForm>
      {/* <WindowScroller>
        {({ height, scrollTop, isScrolling, onChildScroll }) => ( */}
      <AutoSizer>
        {({ width, height }: Size) => {
          return (
            <>
              <TableHeader hedearList={hedearList} width={width}></TableHeader>
              <Scrollbars
                onScroll={(e) => handleScroll(e)}
                style={{ height, width }}
                autoHide
              >
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
                  containerStyle={{ overflow: 'initial' }}
                ></List>
              </Scrollbars>
            </>
          );
        }}
      </AutoSizer>
      {/* )}
       </WindowScroller> */}
    </TableBodyForm>
  );
};
export default TableBody;
