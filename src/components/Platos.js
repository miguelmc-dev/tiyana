
function Platos() {
  return (
    <section className="platos wrap">
      <div className="c">
        <h2>Platos destacados</h2>
        <span className="line c"></span>
      </div>

      <article className="plato">
        <div
          className="foto"
          style={{
            "--img": "url('/img/lomo-saltado.png')"
          }}
        ></div>
        <div>
          <h3>Lomo saltado</h3>
          <span className="line"></span>
          <p>
            Carne jugosa, vegetales frescos
            y un toque de soya
          </p>
        </div>
      </article>

      <article className="plato">
        <div
          className="foto"
          style={{
            "--img": "url('/img/aji-de-gallina.png')"
          }}
        ></div>
        <div>
          <h3>Ají de gallina</h3>
          <span className="line"></span>
          <p>
            Cremoso, suave y con un toque
            de picante
          </p>
        </div>
      </article>

      <article className="plato">
        <div
          className="foto"
          style={{
            "--img": "url('/img/causa-rellena.png')"
          }}
        ></div>
        <div>
          <h3>Causa rellena</h3>
          <span className="line"></span>
          <p>
            Capas suaves de papa amarilla,
            relleno cremoso y un toque
            fresco de palta
          </p>
        </div>
      </article>

      <a className="ver" href="/carta.html">
        VER CARTA COMPLETA →
      </a>
    </section>
  );
}

export default Platos;
