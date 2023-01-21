import { create } from "zustand";
import { getKaryawans } from "../api/api";

const useStore = create((set: any) => ({
  karyawan: [],
  fetchData: async () => {
    const karyawan = await getKaryawans();
    set({ karyawan });
  },
}));

export default useStore;
