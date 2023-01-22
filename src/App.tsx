import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { getKaryawans } from "./api/api";
import { columns, TitleTable } from "./config/TableOption";
import useStore from "./store/store";

function App() {
  const { karyawan, fetchData } = useStore();
  const [pending, setPending] = useState(true);

  useEffect(() => {
    fetchData();

    const timeout = setTimeout(() => {
      if (karyawan) {
        setPending(false);
      }
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="container mx-auto pt-5">
      <div className="p-5 border-2 rounded-md">
        <DataTable
          columns={columns}
          data={karyawan}
          title={<TitleTable data={karyawan.length} />}
          progressPending={pending}
          className="border-2 mt-5"
        />
      </div>
    </div>
  );
}

export default App;
