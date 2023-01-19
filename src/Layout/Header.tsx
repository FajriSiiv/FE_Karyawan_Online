import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className=" mx-auto py-5 bg-sky-300 text-white">
      <div className="flex justify-center items-center gap-x-5">
        <Link to={"/"}>
          <p className="py-2 px-5 rounded-md bg-rose-500">Home</p>
        </Link>
        <Link to={"/addkaryawan"}>
          <p className="py-2 px-5 rounded-md bg-rose-500">Add Karyawan</p>
        </Link>
        <Link to={"/about"}>
          <p className="py-2 px-5 rounded-md bg-rose-500">About</p>
        </Link>
      </div>
    </div>
  );
}
