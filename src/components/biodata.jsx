function Biodata({ nama, nim, jurusan, semester, email, angkatan, ipk }) {
  return (
    <section className="biodata" aria-labelledby="biodata-title">
      <div className="section-heading">
        <p className="eyebrow">DATA AKADEMIK</p>
        <h2 id="biodata-title">Biodata Mahasiswa</h2>
      </div>

      <dl className="biodata-list">
        <div>
          <dt>Nama</dt>
          <dd>{nama}</dd>
        </div>
        <div>
          <dt>NIM</dt>
          <dd>{nim}</dd>
        </div>
        <div>
          <dt>Program Studi</dt>
          <dd>{jurusan}</dd>
        </div>
        <div>
          <dt>Semester</dt>
          <dd>{semester}</dd>
        </div>
        <div>
          <dt>Email</dt>
          <dd>{email}</dd>
        </div>
        <div>
          <dt>Angkatan</dt>
          <dd>{angkatan}</dd>
        </div>
        <div>
          <dt>IPK</dt>
          <dd>{ipk}</dd>
        </div>
      </dl>
    </section>
  );
}

export default Biodata;
