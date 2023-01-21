import React, { useEffect, useState } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import { getKaryawanById, updateKaryawan } from "../api/api";
import { NumericFormat } from "react-number-format";
import DatePicker from "react-datepicker";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment";

export default function editKaryawan() {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [namaKaryawan, setNamaKaryawan] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [umur, setUmur] = useState("");
  const [email, setEmail] = useState("");
  const [gaji, setGaji] = useState("");
  const [joinPerusahaan, setJoinPerusahaan] = useState(new Date());
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await updateKaryawan({
      ...data,
      nama_karyawan: namaKaryawan,
      jabatan: jabatan,
      umur: parseFloat(umur),
      email: email,
      gaji: parseFloat(gaji),
      join_perusahaan: joinPerusahaan,
      gender: gender,
    })
      .then(() =>
        toast.success("Kembali Ke Halaman", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          onClose: () =>
            setTimeout(() => {
              navigate("/");
            }, 3000),
        })
      )
      .catch(() => {
        toast.error("Sudah Maximal Data");
      });
  };

  useEffect(() => {
    const dataById = async () => {
      const data = await getKaryawanById(id);

      const tanggalS = new Date(data.join_perusahaan);

      setData(data);
      setNamaKaryawan(data.nama_karyawan);
      setUmur(data.umur);
      setGaji(data.gaji);
      setGender(data.gender);
      setJabatan(data.jabatan);
      setEmail(data.email);
      setJoinPerusahaan(tanggalS);
    };
    dataById();
  }, []);

  return (
    <div className="container mx-auto mt-5 pb-10">
      <h1 className="text-4xl font-semibold text-center mb-5">
        Edit Karyawan {namaKaryawan}
      </h1>
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
            min={0}
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
          <div className="flex justify-between items-center border-2 rounded-md p-[1px]">
            <NumericFormat
              value={Number(gaji)}
              thousandSeparator="."
              decimalSeparator=","
              onValueChange={(e) => setGaji(e.value)}
              className="w-[95%] p-2 focus:outline-none"
              placeholder="Input Gaji"
            />
          </div>
        </div>
        <div className="gap-y-2 flex flex-col">
          <label htmlFor="">Join Perusahaan</label>
          {/* <input
            type="text"
            className="border-2 rounded-md p-2"
            placeholder="Join Perusahaan.."
            value={joinPerusahaan}
            onChange={(e) => setJoinPerusahaan(e.target.value)}
          /> */}
          <DatePicker
            className="border-2 p-2 w-full rounded-md outline-2"
            dateFormat="dd/MM/yyyy"
            selected={joinPerusahaan}
            onChange={(date: Date) => setJoinPerusahaan(date)}
            minDate={new Date()}
          />
        </div>
        <div className="gap-y-2 flex flex-col">
          <label htmlFor="">Gender</label>
          <select
            className="border-2 rounded-md p-2"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Pilih Gender</option>
            <option>Laki-Laki</option>
            <option>Perempuan</option>
          </select>
        </div>
        <button
          type="submit"
          className="py-2 bg-emerald-500 rounded-md text-white"
        >
          Simpan Perubahan
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
