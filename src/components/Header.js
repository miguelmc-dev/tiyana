
function Header() {
  return (
    <header className="nav">
      <div className="wrap">
        <a className="logo" href="/">TIYANA</a>

        <input
          className="tg"
          type="checkbox"
          id="mn"
        />

        <label
          className="burger"
          htmlFor="mn"
          aria-label="Abrir menú"
        >
          ≡
        </label>

        <nav className="menu">
          <a href="/" className="on">Inicio</a>
          <a href="/#esencia">Nosotros</a>
          <a href="/carta.html">Menú</a>
          <a href="/reservas.html">Reservas</a>
        </nav>

        <a
          className="user"
          href="/iniciar-sesion.html"
          aria-label="Iniciar sesión"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
          </svg>
        </a>
      </div>
    </header>
  );
}

export default Header;
