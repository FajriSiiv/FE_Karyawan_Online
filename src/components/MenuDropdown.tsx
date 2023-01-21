import { Menu } from "@headlessui/react";
import { deleteKaryawan } from "../api/api";
import useStore from "../store/store";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function MenuDropdown({ idRow }: { idRow: any }) {
  const { fetchData } = useStore();

  const handleDelete = async (id: any) => {
    Swal.fire({
      title: "Apakah kamu ingin menghapus?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result: any) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        await deleteKaryawan(id);
        fetchData();
      }
    });
  };

  return (
    <Menu>
      <Menu.Button className="py-1 border-2 rounded-[3px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
          />
        </svg>
      </Menu.Button>
      <Menu.Items className="absolute right-0 -top-5 flex flex-col bg-white border-2 p-2 rounded-md ">
        <Menu.Item>
          {({ active }) => <Link to={`/editkaryawan/${idRow}`}>Edit</Link>}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button onClick={() => handleDelete(idRow)}>Delete</button>
          )}
        </Menu.Item>
      </Menu.Items>
      <ToastContainer />
    </Menu>
  );
}
