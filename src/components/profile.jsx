function Profile({ nama, status, avatar, children }) {
  return (
    <main className="profile-layout">
      <section className="profile-card">
        <img className="profile-avatar" src={avatar} alt={`Foto profil ${nama}`} />
        <div>
          <p className="eyebrow">PROFIL UTAMA</p>
          <h2>{nama}</h2>
          <p className="status-badge">{status}</p>
        </div>
      </section>

      <div className="profile-content">{children}</div>
    </main>
  );
}

export default Profile;
