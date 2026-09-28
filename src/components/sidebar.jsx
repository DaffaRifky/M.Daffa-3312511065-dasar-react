function Sidebar({ menuAktif, onPilihMenu }) {
  const menu = ["Dashboard", "Data Mahasiswa", "Pengaturan", "KRS"];

  return (
    <aside className="sidebar">
      <p className="sidebar-title">MENU UTAMA</p>
      <nav>
        {menu.map((item) => (
          <button
            key={item}
            type="button"
            className={menuAktif === item ? "menu-item active" : "menu-item"}
            onClick={() => onPilihMenu(item)}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
