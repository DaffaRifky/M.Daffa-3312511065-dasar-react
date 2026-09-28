function Content({ menuAktif, mahasiswa, krs }) {
  return (
    <main className="dashboard-content">
      {/* Heading */}
      <div className="content-heading">
        <div>
          <p className="eyebrow">DASHBOARD</p>
          <h1>{menuAktif}</h1>
        </div>

        <span className="data-count">
          {mahasiswa.length} mahasiswa
        </span>
      </div>

      {/* Informasi Modul */}
      <div className="module-info">
        <p className="module-label">
          MODUL PRAKTIKUM PEMROGRAMAN WEB MODERN
        </p>
        <p className="module-title">
          Modul 3 <span>|</span> Konsep Dasar React
        </p>
      </div>

    {menuAktif === "KRS" ? (
      <div className="krs-info">
        {/* Data KRS */}
        <section className="student-table-card">
            <div className="table-header">
            <div>
                <h2>Data KRS</h2>
                <p>Daftar mata kuliah yang diambil oleh mahasiswa.</p>
            </div>
            </div>

            {/* table krs */}
            <div className="table-wrapper">
            <table>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Kode</th>
                    <th>Mata Kuliah</th>
                    <th>SKS</th>
                    <th>Dosen</th>
                    <th>Ruang</th>
                    <th>Status</th>
                </tr>
                </thead>

                <tbody>
                {krs.length > 0 ? (
                    krs.map((item, index) => (
                    <tr key={item.kode}>
                        <td className="number-column">
                        {index + 1}
                        </td>
                        <td>{item.kode}</td>
                        <td>{item.mataKuliah}</td>
                        <td>{item.sks}</td>
                        <td>{item.dosen}</td>
                        <td>{item.ruang}</td>
                        <td>
                        <span className={`${item.status === "Disetujui" ? "status-disetujui" : "status-menunggu"}`}>
                            {item.status}
                        </span>
                        </td>
                    </tr>
                    ))
                ) : (
                    <tr>
                    <td colSpan="6" className="empty-data">
                        Belum ada data KRS.
                    </td>
                    </tr>
                )}
                </tbody>
            </table>
            </div>
        </section>
      </div>
    ) :
    <div className="mahasiswa-info">
        {/* Data Mahasiswa */}
        <section className="student-table-card">
            <div className="table-header">
            <div>
                <h2>Data Mahasiswa</h2>
                <p>Daftar mahasiswa yang terdaftar pada program studi.</p>
            </div>
            </div>

            {/* table mahasiswa */}
            <div className="table-wrapper">
            <table>
                <thead>
                <tr>
                    <th>No.</th>
                    <th>Nama</th>
                    <th>NIM</th>
                    <th>Program Studi</th>
                    <th>Semester</th>
                    <th>Status</th>
                </tr>
                </thead>

                <tbody>
                {mahasiswa.length > 0 ? (
                    mahasiswa.map((item, index) => (
                    <tr key={item.nim}>
                        <td className="number-column">
                        {index + 1}
                        </td>

                        <td className="name-column">
                        <strong>{item.nama}</strong>
                        </td>

                        <td>{item.nim}</td>

                        <td>{item.jurusan}</td>

                        <td>
                        <span className="semester">
                            Semester {item.semester}
                        </span>
                        </td>

                        <td>
                        <span className="status">
                            {item.status}
                        </span>
                        </td>
                    </tr>
                    ))
                ) : (
                    <tr>
                    <td colSpan="6" className="empty-data">
                        Belum ada data mahasiswa.
                    </td>
                    </tr>
                )}
                </tbody>
            </table>
            </div>

        </section>
    </div>
    }

    </main>
  );
}

export default Content;

