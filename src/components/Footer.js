
function Footer() {
  return (
    <footer className="foot" id="contacto">
      <div className="wrap">
        <div className="marca">
          <span className="logo">TIYANA</span>
          <small>SABORES PERUANOS</small>
        </div>

        <div className="info">
          <p>
            <svg viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5">
              <path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            Av. Los Incas 123, Lima
          </p>

          <p>
            <svg viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            Lun - Dom &nbsp; 12:00 - 22:00
          </p>
        </div>

        <nav className="enlaces">
          <a href="/">Inicio</a>
          <a href="/#esencia">Nosotros</a>
          <a href="/carta.html">Menú</a>
          <a href="/reservas.html">Reservas</a>
        </nav>

        <div className="redes">
          <a href="https://www.instagram.com/"
            aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1"
                fill="currentColor" stroke="none" />
            </svg>
          </a>

          <a href="https://www.facebook.com/"
            aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.3H7.6V13h2.8v8z" />
            </svg>
          </a>

          <a href="https://tiktok.com/"
            aria-label="TikTok">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.5 3c.3 2.3 1.7 3.8 4 4v3.2c-1.5.1-2.8-.4-4-1.2v5.8c0 3.5-2.6 5.6-5.5 5.6-3 0-5.3-2.2-5.3-5.2 0-3.1 2.6-5.4 5.9-5v3.2c-1.5-.4-2.8.6-2.8 2 0 1.2.9 2 2 1.300 0 2.1-.9 2.1-2.4V3z" />
            </svg>
          </a>
        </div>
      </div>

      <p>
        © 2026 Tiyana. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
