import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Content from "./components/content";

const dataMahasiswa = [
  { nama: "Ayu Lestari", nim: "231001", jurusan: "Teknik Informatika", semester: 4, status: "Aktif", angkatan: 2023, ipk: 3.75 },
  { nama: "Budi Santoso", nim: "231002", jurusan: "Sistem Informasi", semester: 2, status: "Aktif", angkatan: 2023, ipk: 3.75 },
  { nama: "Citra Dewi", nim: "231003", jurusan: "Teknik Informatika", semester: 6, status: "Aktif", angkatan: 2023, ipk: 3.75 },
];

const dataKRS = [
  {kode: "if101", mataKuliah: "informatika", sks: 3, dosen: "John Doe", ruang: "A101", status: "Disetujui"}, 
  {kode: "me101", mataKuliah: "mekatronika", sks: 3, dosen: "Jane Dew", ruang: "B202", status: "Menunggu"},
  {kode: "el101", mataKuliah: "elektronika", sks: 3, dosen: "Bob", ruang: "C303", status: "Disetujui"},
];

function App() {
  const [menuAktif, setMenuAktif] = useState("Dashboard");

  return (
    <div className="dashboard-shell">
      <Header />
      <div className="dashboard-body">
        <Sidebar menuAktif={menuAktif} onPilihMenu={setMenuAktif} />
        <Content menuAktif={menuAktif} mahasiswa={dataMahasiswa} krs={dataKRS} />
      </div>
    </div>
  );
}

export default App;
