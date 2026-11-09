
function Carta() {
  return (
    <>
      <header className="nav">
        <div className="wrap">
          <a className="logo" href="/">TIYANA</a>

          <input className="tg" type="checkbox" id="mn" />
          <label className="burger" htmlFor="mn" aria-label="Abrir menú">≡</label>

          <nav className="menu">
            <a href="/">Inicio</a>
            <a href="/#esencia">Nosotros</a>
            <a href="/carta.html" className="on">Menú</a>
            <a href="/reservas.html">Reservas</a>
          </nav>

          <a className="user" href="/iniciar-sesion.html" aria-label="Iniciar sesión">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
            </svg>
          </a>
        </div>
      </header>

      <section className="hd" style={{ "--img": "url(/img/carta-banner.png)" }}>
        <div>
          <h1>Nuestra carta</h1>
          <p>SABORES PERUANOS • EN CADA MOMENTO</p>
        </div>
      </section>

      <nav className="cat">
        <a href="#entradas">ENTRADAS</a>
        <a href="#fondos">FONDOS</a>
        <a href="#postres">POSTRES</a>
        <a href="#bebidas">BEBIDAS</a>
      </nav>

      <section className="carta wrap" id="entradas">
        <div className="foto" style={{ "--img": "url(/img/ceviche.png)" }} />

        <div>
          <h2>Entradas</h2>
          <span className="line" />

          <div className="item">
            <b>
              <span>CEVICHE CLÁSICO</span>
              <em>S/ 38</em>
            </b>
            <small>Pescado fresco, limón, cebolla y ají</small>
          </div>

          <div className="item">
            <b>
              <span>TIRADITO AL AJÍ AMARILLO</span>
              <em>S/ 40</em>
            </b>
            <small>Finas láminas de pescado con salsa de ají</small>
          </div>

          <div className="item">
            <b>
              <span>ANTICUCHOS DE CORAZÓN</span>
              <em>S/ 34</em>
            </b>
            <small>Corazón de res marinado y asado a la parrilla</small>
          </div>

          <div className="item">
            <b>
              <span>PAPA A LA HUANCAÍNA</span>
              <em>S/ 26</em>
            </b>
            <small>Papas amarillas con salsa cremosa de ají</small>
          </div>
        </div>
      </section>

      <section className="carta wrap" id="fondos">
        <div>
          <h2>Fondos</h2>
          <span className="line" />

          <div className="item">
            <b>
              <span>LOMO SALTADO</span>
              <em>S/ 48</em>
            </b>
            <small>Trocitos de res, tomate, cebolla y papas</small>
          </div>

          <div className="item">
            <b>
              <span>AJÍ DE GALLINA</span>
              <em>S/ 42</em>
            </b>
            <small>Finas hebras en salsa cremosa de ají amarillo</small>
          </div>

          <div className="item">
            <b>
              <span>CAUSA RELLENA</span>
              <em>S/ 36</em>
            </b>
            <small>Capas de papa, relleno de pollo y aguacate</small>
          </div>

          <div className="item">
            <b>
              <span>SECO DE CORDERO</span>
              <em>S/ 52</em>
            </b>
            <small>Cordero en salsa de culantro y ají</small>
          </div>
        </div>

        <div className="foto" style={{ "--img": "url(/img/lomo.png)" }} />
      </section>

      <section className="carta top wrap">
        <div id="postres">
          <h2>Postres</h2>
          <span className="line" />

          <div className="item">
            <b>
              <span>SUSPIRO A LA LIMEÑA</span>
              <em>S/ 18</em>
            </b>
            <small>Crema de leche, merengue y canela</small>
          </div>

          <div className="item">
            <b>
              <span>PICARONES</span>
              <em>S/ 16</em>
            </b>
            <small>Buñuelos de zapallo con miel de chancaca</small>
          </div>

          <div className="item">
            <b>
              <span>MAZAMORRA MORADA</span>
              <em>S/ 14</em>
            </b>
            <small>Dulce de maíz morado con frutas</small>
          </div>
        </div>

        <div id="bebidas">
          <h2>Bebidas</h2>
          <span className="line" />

          <div className="item">
            <b>
              <span>CHICHA MORADA</span>
              <em>S/ 10</em>
            </b>
            <small>Bebida tradicional de maíz morado</small>
          </div>

          <div className="item">
            <b>
              <span>PISCO SOUR</span>
              <em>S/ 18</em>
            </b>
            <small>El clásico peruano</small>
          </div>

          <div className="item">
            <b>
              <span>MARACUYÁ SOUR</span>
              <em>S/ 16</em>
            </b>
            <small>Fresco y tropical</small>
          </div>

          <div className="item">
            <b>
              <span>LIMONADA FROZEN</span>
              <em>S/ 12</em>
            </b>
            <small>Natural y refrescante</small>
          </div>
        </div>
      </section>

      <section className="cierre">
        <h2>¿Ya elegiste tu plato favorito?</h2>
        <p>RESERVA TU MESA Y NOSOTROS NOS ENCARGAMOS DEL RESTO.</p>
        <a className="btn p" href="/reservas.html">Reserva aquí →</a>
      </section>

      <footer className="foot" id="contacto">
        <div className="wrap">
          <div className="marca">
            <span className="logo">TIYANA</span>
            <small>SABORES PERUANOS</small>
          </div>

          <div className="info">
            <p>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              Av. Los Incas 123, Lima
            </p>

            <p>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
            <a href="https://www.instagram.com/" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>

            <a href="https://www.facebook.com/" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.3H7.6V13h2.8v8z" />
              </svg>
            </a>

            <a href="https://tiktok.com/" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.5 3c.3 2.3 1.7 3.8 4 4v3.2c-1.5.1-2.8-.4-4-1.2v5.8c0 3.5-2.6 5.4-5.5 5.4-3 0-5.3-2.2-5.3-5.2 0-3.1 2.6-5.4 5.9-5v3.2c-1.5-.4-2.8.6-2.8 2 0 1.2.9 2 2 1.3 0 2.1-.9 2.1-2.4V3z" />
              </svg>
            </a>
          </div>
        </div>

        <p>© 2026 Tiyana. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default Carta;
