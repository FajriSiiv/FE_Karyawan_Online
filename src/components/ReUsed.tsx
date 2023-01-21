import moment from "moment";

export const tglFormal = (tanggal: any) => {
  return moment(tanggal).format("DD/MM/yyyy");
};

export const formatRupiah = (money: any) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(money);
};
