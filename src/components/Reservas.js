
function Reservas() {
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
            <a href="/carta.html">Menú</a>
            <a href="/reservas.html" className="on">Reservas</a>
          </nav>

          <a className="user" href="/iniciar-sesion.html" aria-label="Iniciar sesión">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
            </svg>
          </a>
        </div>
      </header>

      <main className="fondo tiyana-reservas" style={{ "--img": "url(/img/fondo-reservas.png)" }}>
        <div className="flujo">

          <section className="paso" id="p1">
            <ol className="bar">
              <li className="a">PERSONAS</li>
              <li>FECHA</li>
              <li>HORA</li>
              <li>DATOS</li>
              <li>PREGUNTAS</li>
              <li>CONFIRMAR</li>
            </ol>

            <div className="card">
              <h2>¿Cuántas personas serán?</h2>
              <span className="line c"></span>

              <div className="chips">
                <label className="chip r"><input type="radio" name="n" value="1" /><span>1</span></label>
                <label className="chip r"><input type="radio" name="n" value="2" /><span>2</span></label>
                <label className="chip r"><input type="radio" name="n" value="3" /><span>3</span></label>
                <label className="chip r"><input type="radio" name="n" value="4" /><span>4</span></label>
                <label className="chip r"><input type="radio" name="n" value="5" /><span>5</span></label>
                <label className="chip r"><input type="radio" name="n" value="6" /><span>6</span></label>
                <label className="chip r"><input type="radio" name="n" value="7" /><span>7</span></label>
                <label className="chip r"><input type="radio" name="n" value="8" /><span>8</span></label>
                <label className="chip r"><input type="radio" name="n" value="9" /><span>9</span></label>
                <label className="chip r"><input type="radio" name="n" value="10" /><span>10</span></label>
              </div>

              <p className="nota">
                PARA GRUPOS DE MÁS DE 10 PERSONAS, CONTÁCTANOS DIRECTAMENTE.
              </p>

              <div className="acc">
                <span></span>
                <a className="btn p" href="#p2">Continuar →</a>
              </div>
            </div>
          </section>

          <section className="paso" id="p2">
            <ol className="bar">
              <li className="d">PERSONAS</li>
              <li className="a">FECHA</li>
              <li>HORA</li>
              <li>DATOS</li>
              <li>PREGUNTAS</li>
              <li>CONFIRMAR</li>
            </ol>

            <div className="card">
              <h2>Elige la fecha</h2>
              <span className="line c"></span>

              <div className="cals">
                <div>
                  <h3>OCTUBRE 2026</h3>

                  <div className="g">
                    <i>LU</i><i>MA</i><i>MI</i><i>JU</i><i>VI</i><i>SÁ</i><i>DO</i>
                    <b></b><b></b><b></b>

                    <label className="chip"><input type="radio" name="fecha" value="2026-10-01" disabled /><span>1</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-02" disabled /><span>2</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-03" disabled /><span>3</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-04" disabled /><span>4</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-05" disabled /><span>5</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-06" disabled /><span>6</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-07" disabled /><span>7</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-08" disabled /><span>8</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-09" disabled /><span>9</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-10" disabled /><span>10</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-11" disabled /><span>11</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-12" disabled /><span>12</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-13" disabled /><span>13</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-14" disabled /><span>14</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-15" disabled /><span>15</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-16" disabled /><span>16</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-17" disabled /><span>17</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-18" disabled /><span>18</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-19" disabled /><span>19</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-20" disabled /><span>20</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-21" disabled /><span>21</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-22" disabled /><span>22</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-23" disabled /><span>23</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-24" disabled /><span>24</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-25" disabled /><span>25</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-26" disabled /><span>26</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-27" /><span>27</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-28" /><span>28</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-29" /><span>29</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-30" /><span>30</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-10-31" /><span>31</span></label>
                  </div>
                </div>

                <div>
                  <h3>NOVIEMBRE 2026</h3>

                  <div className="g">
                    <i>LU</i><i>MA</i><i>MI</i><i>JU</i><i>VI</i><i>SÁ</i><i>DO</i>
                    <b></b><b></b><b></b><b></b><b></b><b></b>

                    <label className="chip"><input type="radio" name="fecha" value="2026-11-01" /><span>1</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-02" /><span>2</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-03" /><span>3</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-04" /><span>4</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-05" /><span>5</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-06" /><span>6</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-07" /><span>7</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-08" /><span>8</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-09" /><span>9</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-10" /><span>10</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-11" /><span>11</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-12" /><span>12</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-13" /><span>13</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-14" /><span>14</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-15" /><span>15</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-16" /><span>16</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-17" /><span>17</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-18" /><span>18</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-19" /><span>19</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-20" /><span>20</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-21" /><span>21</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-22" /><span>22</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-23" /><span>23</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-24" /><span>24</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-25" /><span>25</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-26" /><span>26</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-27" /><span>27</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-28" /><span>28</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-29" /><span>29</span></label>
                    <label className="chip"><input type="radio" name="fecha" value="2026-11-30" /><span>30</span></label>
                  </div>
                </div>
              </div>

              <p className="nota">Se reserva con 3 días de anticipación.</p>

              <div className="acc">
                <a className="btn" href="#p1">← Regresar</a>
                <a className="btn p" href="#p3">Continuar →</a>
              </div>
            </div>
          </section>

          <section className="paso" id="p3">
            <ol className="bar">
              <li className="d">PERSONAS</li>
              <li className="d">FECHA</li>
              <li className="a">HORA</li>
              <li>DATOS</li>
              <li>PREGUNTAS</li>
              <li>CONFIRMAR</li>
            </ol>

            <div className="card">
              <h2>¿A qué hora te esperamos?</h2>
              <span className="line c"></span>

              <h3>ALMUERZO</h3>
              <div className="chips">
                <label className="chip"><input type="radio" name="hora" value="12:00" /><span>12:00</span></label>
                <label className="chip"><input type="radio" name="hora" value="12:30" /><span>12:30</span></label>
                <label className="chip"><input type="radio" name="hora" value="13:00" /><span>13:00</span></label>
                <label className="chip"><input type="radio" name="hora" value="13:30" disabled /><span>13:30</span></label>
                <label className="chip"><input type="radio" name="hora" value="14:00" /><span>14:00</span></label>
              </div>

              <h3>CENA</h3>
              <div className="chips">
                <label className="chip"><input type="radio" name="hora" value="19:00" /><span>19:00</span></label>
                <label className="chip"><input type="radio" name="hora" value="19:30" /><span>19:30</span></label>
                <label className="chip"><input type="radio" name="hora" value="20:00" /><span>20:00</span></label>
                <label className="chip"><input type="radio" name="hora" value="20:30" /><span>20:30</span></label>
                <label className="chip"><input type="radio" name="hora" value="21:00" /><span>21:00</span></label>
                <label className="chip"><input type="radio" name="hora" value="21:30" disabled /><span>21:30</span></label>
                <label className="chip"><input type="radio" name="hora" value="22:00" /><span>22:00</span></label>
              </div>

              <div className="acc">
                <a className="btn" href="#p2">← Regresar</a>
                <a className="btn p" href="#p4">Continuar →</a>
              </div>
            </div>
          </section>

          <section className="paso" id="p4">
            <ol className="bar">
              <li className="d">PERSONAS</li>
              <li className="d">FECHA</li>
              <li className="d">HORA</li>
              <li className="a">DATOS</li>
              <li>PREGUNTAS</li>
              <li>CONFIRMAR</li>
            </ol>

            <div className="card">
              <h2>Datos</h2>
              <span className="line c"></span>

              <p className="res-subtitle">
                SÁB 24 OCT · 20:00 · 4 PERSONAS (EJEMPLO)
              </p>

              <div className="f">
                <label>
                  Nombres
                  <input type="text" placeholder="Ingresa tus nombres" />
                </label>

                <label>
                  Apellidos
                  <input type="text" placeholder="Ingresa tus apellidos" />
                </label>

                <label>
                  DNI (8 dígitos)
                  <input type="text" inputMode="numeric" maxLength={8} placeholder="12345678" />
                </label>

                <label>
                  Teléfono (+51)
                  <input type="tel" placeholder="987 654 321" />
                </label>

                <label className="w">
                  Correo electrónico
                  <input type="email" placeholder="tucorreo@ejemplo.com" />
                </label>
              </div>

              <label className="res-terms">
                <input type="checkbox" />
                ACEPTO LA POLÍTICA DE PRIVACIDAD Y EL USO DE MIS DATOS PARA GESTIONAR MI RESERVA.
              </label>

              <div className="acc">
                <a className="btn" href="#p3">← Regresar</a>
                <a className="btn p" href="#p5">Continuar →</a>
              </div>
            </div>
          </section>

          <section className="paso" id="p5">
            <ol className="bar">
              <li className="d">PERSONAS</li>
              <li className="d">FECHA</li>
              <li className="d">HORA</li>
              <li className="d">DATOS</li>
              <li className="a">PREGUNTAS</li>
              <li>CONFIRMAR</li>
            </ol>

            <div className="card">
              <h2>Cuéntanos un poco más</h2>
              <span className="line c"></span>

              <h3>¿ES UNA OCASIÓN ESPECIAL?</h3>
              <div className="chips">
                <label className="chip"><input type="radio" name="oc" value="Cumpleaños" /><span>Cumpleaños</span></label>
                <label className="chip"><input type="radio" name="oc" value="Aniversario" /><span>Aniversario</span></label>
                <label className="chip"><input type="radio" name="oc" value="Cita" /><span>Cita</span></label>
                <label className="chip"><input type="radio" name="oc" value="Celebración" /><span>Celebración</span></label>
                <label className="chip"><input type="radio" name="oc" value="Otros" /><span>Otros</span></label>
              </div>

              <h3>¿DÓNDE PREFIERES SENTARTE?</h3>
              <div className="chips">
                <label className="chip"><input type="radio" name="amb" value="Terraza con vista" /><span>Terraza con vista</span></label>
                <label className="chip"><input type="radio" name="amb" value="Salón interior" /><span>Salón interior</span></label>
              </div>

              <div className="res-extra">
                <label>
                  ALERGIAS O PROBLEMAS ALIMENTARIOS
                  <input type="text" placeholder="Ej: Alergia a los mariscos" />
                </label>

                <label>
                  COMENTARIOS ADICIONALES
                  <textarea rows={3} placeholder="Ej: Necesitamos una silla para un bebé"></textarea>
                </label>
              </div>

              <div className="acc">
                <a className="btn" href="#p4">← Regresar</a>
                <a className="btn p" href="#p6">Continuar →</a>
              </div>
            </div>
          </section>

          <section className="paso" id="p6">
            <ol className="bar">
              <li className="d">PERSONAS</li>
              <li className="d">FECHA</li>
              <li className="d">HORA</li>
              <li className="d">DATOS</li>
              <li className="d">PREGUNTAS</li>
              <li className="a">CONFIRMAR</li>
            </ol>

            <div className="card">
              <h2>Revisa tu reserva</h2>
              <span className="line c"></span>

              <div className="ticket">
                <div className="top">
                  <div>FECHA <b>Sáb 28 nov</b></div>
                  <div>HORA <b>20:00</b></div>
                  <div>PERSONAS <b>4</b></div>
                </div>

                <hr />

                <dl>
                  <div><dt>TITULAR</dt>Cristhian L.</div>
                  <div><dt>DNI</dt>••••5678</div>
                  <div><dt>AMBIENTE</dt>Terraza con vista</div>
                  <div><dt>OCASIÓN</dt>Cumpleaños</div>
                </dl>
              </div>

              <p className="nota">
                Ejemplo de resumen. RECIBIRÁS LA CONFIRMACIÓN EN TU CORREO.
              </p>

              <div className="acc">
                <a className="btn" href="#p5">← Regresar</a>
                <a className="btn p" href="/">Confirmar reserva</a>
              </div>
            </div>
          </section>

        </div>
      </main>

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
                <path d="M16.5 3c.3 2.3 1.7 3.8 4 4v3.2c-1.5.1-2.8-.4-4-1.2v5.8c0 3.5-2.6 5.6-5.5 5.6-3 0-5.3-2.2-5.3-5.2 0-3.1 2.6-5.4 5.9-5v3.2c-1.5-.4-2.8.6-2.8 2 0 1.2.9 2 2 1.3 0 2.1-.9 2.1-2.4V3z" />
              </svg>
            </a>
          </div>
        </div>

        <p>© 2026 Tiyana. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default Reservas;
