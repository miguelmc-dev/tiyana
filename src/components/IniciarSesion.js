function IniciarSesion() {
  return (
    <>
      <main className="auth">
        <a className="ini" href="/">
          INICIO
        </a>
        <div className="lado" style={{ "--img": "url(/img/chef.png)" }}>
          <div>
            <span className="logo">
              TIYANA
            </span>
            <span className="line c"></span>
            <p>
              SABORES PERUANOS • EN CADA MOMENTO
            </p>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="c" style={{ "textAlign": "center" }}>
            <h2>
              Iniciar sesión
            </h2>
            <span className="line c"></span>
            <p style={{ "fontSize": "11px" }}>
              INGRESA PARA GESTIONAR TUS RESERVAS.
            </p>
          </div>
          <label className="">
            Correo electrónico
            <input type="email" required={true} />
          </label>
          <label>
            Contraseña
            <input type="password" required={true} />
          </label>
          <div className="fila">
            <label style={{ "display": "flex", "gap": "8px" }}>
              <input type="checkbox" />
              Recordarme
            </label>
            <a className="u" href="#">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <button className="btn p">
            Iniciar sesión
          </button>
          <div className="o">
            O
          </div>
          <a className="btn" style={{ "textAlign": "center" }} href="/reservas.html">
            Continuar como invitado
          </a>
          <a className="btn" style={{ "textAlign": "center" }} href="/admin.html">
            Ingresar como administrador
          </a>
          <p className="fila" style={{ "justifyContent": "center", "gap": "8px" }}>
            ¿AÚN NO TIENES CUENTA?
            <a className="u" href="/registrarse.html">
              REGÍSTRATE
            </a>
          </p>
        </form>
      </main>
    </>
  );
}

export default IniciarSesion;
