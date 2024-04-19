import Table from "./Table";
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import useSort from "../hooks/use-sort";

function SortableTable(props) {
  const { config, data } = props;

  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  const getIcons = (label, sortBy, sortOrder) => {
    if (label !== sortBy) {
      return (
        <div>
          <BsCaretUp />
          <BsCaretDown />
        </div>
      );
    }

    if (sortOrder === null) {
      return (
        <div>
          <BsCaretUp />
          <BsCaretDown />
        </div>
      );
    } else if (sortOrder === "asc") {
      return <BsCaretUp />;
    } else if (sortOrder === "desc") {
      return <BsCaretDown />;
    }
  };

  return <Table {...props} config={updatedConfig} data={sortedData} />;
}

export default SortableTable;
