import React from 'react';

const kpisData = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <rect x="3" y="5" width="18" height="16" rx="2"></rect>
        <path d="M3 10h18M8 3v4M16 3v4"></path>
      </svg>
    ),
    title: "Reservas hoy",
    value: "18"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <path d="M3 8h18v3H3zM6 11v8M18 11v8M9 11v4M15 11v4"></path>
      </svg>
    ),
    title: "Mesas ocupadas",
    value: "9/14"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M12 7v5l3 2"></path>
      </svg>
    ),
    title: "Pendiente",
    value: "4"
  }
];

const diasCalendario = [
  { day: "28", count: "", off: true },
  { day: "29", count: "", off: true },
  { day: "30", count: "", off: true },
  { day: "1", count: "4" },
  { day: "2", count: "5" },
  { day: "3", count: "6" },
  { day: "4", count: "5" },
  { day: "5", count: "2" },
  { day: "6", count: "3" },
  { day: "7", count: "3" },
  { day: "8", count: "6" },
  { day: "9", count: "3" },
  { day: "10", count: "1", type: "pen" },
  { day: "11", count: "2", type: "pen" },
  { day: "12", count: "3" },
  { day: "13", count: "5", type: "sel" },
  { day: "14", count: "6" },
  { day: "15", count: "4" },
  { day: "16", count: "5" },
  { day: "17", count: "4" },
  { day: "18", count: "0", type: "can" },
  { day: "19", count: "5" },
  { day: "20", count: "4" },
  { day: "21", count: "5" },
  { day: "22", count: "3" },
  { day: "23", count: "2", type: "pen" },
  { day: "24", count: "3" },
  { day: "25", count: "2", type: "pen" },
  { day: "26", count: "7" },
  { day: "27", count: "4" },
  { day: "28", count: "6" },
  { day: "29", count: "5" },
  { day: "30", count: "4" },
  { day: "31", count: "3" }
];

const reservasData = [
  { time: "13:00", nombre: "Cristhian Lopez Ramos", personas: "4 personas", mesa: "MESA 7", estado: "ok", textoEstado: "CONFIRMADA" },
  { time: "14:30", nombre: "Jorge Aquise Maguiña", personas: "6 personas", mesa: "MESA 3", estado: "ok", textoEstado: "CONFIRMADA" },
  { time: "15:00", nombre: "Marcelo Chancafe Ruiz", personas: "4 personas", mesa: "MESA 5", estado: "pen", textoEstado: "PENDIENTE" },
  { time: "16:00", nombre: "Carlos Taipe Guiterrez", personas: "3 personas", mesa: "MESA 1", estado: "ok", textoEstado: "CONFIRMADA" },
  { time: "18:00", nombre: "Miguel Masgo Castro", personas: "4 personas", mesa: "MESA 6", estado: "can", textoEstado: "CANCELADA" }
];

export default function Admin() {
  return (
    <>
      <header className="nav">
        <div className="wrap">
          <a className="logo" href="/">
            TIYANA
          </a>
          <input className="tg" type="checkbox" id="mn" />
          <label className="burger" htmlFor="mn" aria-label="Abrir menú">
            ≡
          </label>
          <nav className="menu">
            <a href="/">Inicio</a>
            <a href="/#esencia">Nosotros</a>
            <a href="/carta.html">Menú</a>
            <a href="/reservas.html">Reservas</a>
          </nav>
          <a className="user" href="/iniciar-sesion.html" aria-label="Iniciar sesión">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="12" cy="8" r="4"></circle>
              <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"></path>
            </svg>
          </a>
        </div>
      </header>

      <main className="adm" style={{ "--img": "url(/img/admin.jpg)" }}>
        <div className="adm-top">
          <h1>
            Panel de
            <br />
            administración
          </h1>
          <div className="adm-kpis">
            {kpisData.map((kpi, index) => (
              <div className="adm-kpi" key={index}>
                {kpi.icon}
                <div>
                  {kpi.title}
                  <b>{kpi.value}</b>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="adm-grid">
          {/* Calendario */}
          <section className="adm-box adm-cal" aria-label="Calendario">
            <div className="adm-mes">
              <a href="#" aria-label="Mes anterior">{"<"}</a>
              <span>Octubre</span>
              <a href="#" aria-label="Mes siguiente">{">"}</a>
            </div>
            <div className="adm-sem">
              {["LU", "MA", "MI", "JU", "VI", "SÁ", "DO"].map((dia, idx) => (
                <span key={idx}>{dia}</span>
              ))}
            </div>
            <div className="adm-dias">
              {diasCalendario.map((d, index) => {
                let className = "adm-d";
                if (d.off) className += " off";
                if (d.type) className += ` ${d.type}`;

                return (
                  <span className={className} key={index}>
                    <b>{d.day}</b>
                    {d.count !== "" && <small>{d.count}</small>}
                  </span>
                );
              })}
            </div>
          </section>

          {/* Lista de Reservas */}
          <section className="adm-box adm-lista" aria-label="Reservas del día">
            <div className="adm-tools">
              <div className="adm-alerta">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3 2 20h20L12 3z"></path>
                  <path d="M12 10v5M12 17.5v.5"></path>
                </svg>
                <span>Conflicto detectado: Mesa 7 tiene dos reservas a las 20:00</span>
              </div>
              <a className="btn p" href="/reservas.html">+ Nueva reserva</a>
              <a className="btn" href="#">Ver todas</a>
              <select aria-label="Filtrar por estado">
                <option>Estado: todas</option>
                <option>Confirmada</option>
                <option>Pendiente</option>
                <option>Cancelada</option>
              </select>
            </div>

            {reservasData.map((res, index) => (
              <article className="adm-row" key={index}>
                <time>{res.time}</time>
                <div className="adm-cli">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                    <circle cx="12" cy="8" r="4"></circle>
                    <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"></path>
                  </svg>
                  <div>
                    <b>{res.nombre}</b>
                    <small>{res.personas}</small>
                  </div>
                </div>
                <div className="adm-mesa">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8h18v3H3zM6 11v8M18 11v8"></path>
                  </svg>
                  {res.mesa}
                </div>
                <span className={`adm-est ${res.estado}`}>{res.textoEstado}</span>
                <div className="adm-acc">
                  <a href="#" aria-label="Editar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 20l4-1 11-11-3-3L5 16l-1 4z"></path>
                    </svg>
                  </a>
                  <a href="#" aria-label="Cancelar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 6l12 12M18 6 6 18"></path>
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}