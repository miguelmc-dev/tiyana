
function Registrarse() {
  return (
    <main className="auth">
      <a className="ini" href="/">INICIO</a>

      <div className="lado" style={{ "--img": "url(/img/chef2.png)" }}>
        <div>
          <span className="logo">TIYANA</span>
          <span className="rombo"><i></i></span>
          <p>SABORES PERUANOS • EN CADA MOMENTO</p>
        </div>
      </div>

      <form className="rg" onSubmit={(e) => e.preventDefault()}>
        <div className="cab">
          <h2>Crear cuenta</h2>
          <span className="line c"></span>
          <p>REGÍSTRATE PARA RESERVAR MÁS RÁPIDO.</p>
        </div>

        <div className="par">
          <label>
            Nombres
            <input type="text" placeholder="Ingresa tus nombres" required />
          </label>

          <label>
            Apellidos
            <input type="text" placeholder="Ingresa tus apellidos" required />
          </label>

          <label>
            DNI
            <input type="text" inputMode="numeric" maxLength={8}
              placeholder="12345678" required />
          </label>

          <label>
            Teléfono
            <div className="pref">
              <span>+51</span>
              <input type="tel" placeholder="987 654 321" required />
            </div>
          </label>

          <label className="w">
            Correo electrónico
            <input type="email" placeholder="tucorreo@ejemplo.com" required />
          </label>

          <label className="pw">
            Contraseña
            <input type="password" placeholder="••••••••" required />
            <svg className="ojo" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5">
              <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </label>

          <label className="pw">
            Confirmar contraseña
            <input type="password" placeholder="••••••••" required />
            <svg className="ojo" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5">
              <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </label>
        </div>

        <small className="ayuda">
          MÍNIMO 8 CARACTERES, CON UNA MAYÚSCULA Y UN NÚMERO
        </small>

        <label className="chk">
          <input type="checkbox" required />
          <span>ACEPTO LA POLÍTICA DE PRIVACIDAD Y LOS TÉRMINOS DE USO.</span>
        </label>

        <button className="btn p">Crear cuenta</button>

        <p className="pie">
          ¿Ya tienes cuenta?{" "}
          <a className="u" href="/iniciar-sesion.html">INICIA SESIÓN</a>
        </p>
      </form>
    </main>
  );
}

export default Registrarse;
