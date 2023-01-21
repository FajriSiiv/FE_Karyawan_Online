import axios from "axios";
import { toast } from "react-toastify";

const apiUrl = axios.create({
  baseURL: import.meta.env.VITE_BASE_BASE_BACKEND,
  withCredentials: true,
});

export const getKaryawans = async () => {
  try {
    const response = await apiUrl.get("/karyawan");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getKaryawanById = async (id: any) => {
  try {
    const response = await apiUrl.get(`/karyawan/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addKaryawan = async (karyawan: any) => {
  return await apiUrl.post("/karyawan", karyawan, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateKaryawan = async (karyawan: any) => {
  return await apiUrl.patch(`/karyawan/${karyawan._id}`, karyawan);
};

export const deleteKaryawan = async (id: any) => {
  return await apiUrl.delete(`/karyawan/${id}`, id);
};
