
function Hero() {
  return (
    <section
      className="hero"
      style={{ "--img": "url('/img/hero.png')" }}
    >
      <div>
        <h1>TIYANA</h1>
        <p>SABORES PERUANOS • EN CADA MOMENTO</p>

        <a className="btn p" href="/reservas.html">
          Reserva aquí
        </a>

        <a className="btn" href="/carta.html">
          Descubre nuestro menú
        </a>
      </div>
    </section>
  );
}

export default Hero;
