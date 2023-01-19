import { Link } from "react-router-dom";
import MenuDropdown from "../components/MenuDropdown";

export const columns: any = [
  {
    name: "Nama Karyawan",
    selector: (row: any) => row.nama_karyawan,
    width: "250px",
  },
  {
    name: "Gaji",
    selector: (row: any) => row.gaji,
  },
  {
    name: "Jabatan",
    selector: (row: any) => row.jabatan,
    width: "100px",
  },
  {
    name: "Umur",
    selector: (row: any) => row.umur,
    width: "70px",
  },
  {
    name: "Join",
    selector: (row: any) => row.join_perusahaan,
    width: "150px",
  },

  {
    name: "Gender",
    selector: (row: any) => row.gender,
    width: "120px",
  },
  {
    name: "Email",
    selector: (row: any) => row.email,
  },
  {
    name: "Action",
    selector: () => <MenuDropdown />,
    center: true,
  },
];

export const TitleTable = ({ data }: { data: any }) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold">Data Karyawan</h1>
      <div className="flex gap-x-4">
        <Link to={"/addkaryawan"}>
          <p className="py-2 px-5 rounded-md bg-rose-500 text-sm text-white">
            Add Karyawan
          </p>
        </Link>
        <p className="py-2 px-5 rounded-md bg-emerald-500 text-sm text-white cursor-default">
          Max Karyawan [ {data}/10 ]
        </p>
      </div>
    </div>
  );
};
