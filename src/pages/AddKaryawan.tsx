import React, { useState } from "react";
import { addKaryawan } from "../api/api";

export default function AddKaryawan() {
  const [namaKaryawan, setNamaKaryawan] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [umur, setUmur] = useState("");
  const [email, setEmail] = useState("");
  const [gaji, setGaji] = useState("");
  const [joinPerusahaan, setJoinPerusahaan] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(gender);
  };

  return (
    <div className="container mx-auto mt-5 pb-10">
      <h1 className="text-4xl font-semibold text-center mb-5">Add Karyawan</h1>
      <form
        className="w-1/2 mx-auto flex flex-col gap-y-5 border-2 p-5 border-slate-500 rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="gap-y-2 flex flex-col">
          <label htmlFor="">Nama Karyawan</label>
          <input
            type="text"
            className="border-2 rounded-md p-2"
            placeholder="Nama Karyawan.."
            value={namaKaryawan}
            onChange={(e) => setNamaKaryawan(e.target.value)}
          />
        </div>

        <div className="gap-y-2 flex flex-col">
          <label htmlFor="">Jabatan</label>
          <input
            type="text"
            className="border-2 rounded-md p-2"
            placeholder="Jabatan.."
            value={jabatan}
            onChange={(e) => setJabatan(e.target.value)}
          />
        </div>
        <div className="gap-y-2 flex flex-col">
          <label htmlFor="">Umur</label>
          <input
            type="number"
            className="border-2 rounded-md p-2"
            placeholder="Umur.."
            value={umur}
            onChange={(e) => setUmur(e.target.value)}
          />
        </div>
        <div className="gap-y-2 flex flex-col">
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Email.."
            className="border-2 rounded-md p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="gap-y-2 flex flex-col">
          <label htmlFor="">Gaji</label>
          <input
            type="text"
            className="border-2 rounded-md p-2"
            placeholder="Gaji.."
            value={gaji}
            onChange={(e) => setGaji(e.target.value)}
          />
        </div>
        <div className="gap-y-2 flex flex-col">
          <label htmlFor="">Join Perusahaan</label>
          <input
            type="text"
            className="border-2 rounded-md p-2"
            placeholder="Join Perusahaan.."
            value={joinPerusahaan}
            onChange={(e) => setJoinPerusahaan(e.target.value)}
          />
        </div>
        <div className="gap-y-2 flex flex-col">
          <label htmlFor="">Gender</label>
          <select
            className="border-2 rounded-md p-2"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option>Laki-Laki</option>
            <option>Perempuan</option>
          </select>
        </div>
        <button
          type="submit"
          className="py-2 bg-emerald-500 rounded-md text-white"
        >
          Add Karyawan
        </button>
      </form>
    </div>
  );
}
