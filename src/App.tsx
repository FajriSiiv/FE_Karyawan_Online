import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { getKaryawans } from "./api/api";
import { columns, TitleTable } from "./config/TableOption";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const datas = await getKaryawans();
    setData(datas);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto pt-5">
      <div className="p-5 border-2 rounded-md">
        <DataTable
          columns={columns}
          data={data}
          title={<TitleTable data={data.length} />}
          className="border-2 mt-5"
        />
      </div>
    </div>
  );
}

export default App;
