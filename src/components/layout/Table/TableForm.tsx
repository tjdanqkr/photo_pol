import TableBody from './TableBody';
import TableFilter from './TableFilter';

type TableProps = {
  renderList: any[];
  hedearList: TableHeaderType[];
  name: string;
  getList: string;
};
export type TableHeaderType = {
  name: string;
  key: string;
  custom: boolean;
  filterType: string;
  size: number;
  customFuncName?: string;
};

function TableForm(props: TableProps) {
  const { hedearList, name, renderList, getList } = props;
  return (
    <div>
      <TableFilter hedearList={hedearList} name={name}></TableFilter>
      <TableBody
        renderList={renderList}
        hedearList={hedearList}
        getList={getList}
      ></TableBody>
    </div>
  );
}
export default TableForm;
