
function Banner() {
  return (
    <section
      className="banner"
      style={{
        "--img": "url('/img/reserva.png')"
      }}
    >
      <div>
        <h2>Reserva tu mesa</h2>
        <span className="line"></span>

        <p>
          DISFRUTA DE UNA EXPERIENCIA ÚNICA.
          HAZ TU RESERVA Y ASEGURA TU
          LUGAR EN TIYANA.
        </p>

        <small>
          Las reservas se habilitan con 3 días
          de anticipación, para 1 a 10 personas
          y sujetas a disponibilidad.
        </small>

        <a className="btn" href="/reservas.html">
          Reserve aquí →
        </a>
      </div>
    </section>
  );
}

export default Banner;
