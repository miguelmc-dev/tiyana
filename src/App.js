import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Frase from "./components/Frase";
import Esencia from "./components/Esencia";
import Platos from "./components/Platos";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Carta from "./components/Carta";
import Reservas from "./components/Reservas";
import IniciarSesion from "./components/IniciarSesion";
import Registrarse from "./components/Registrarse";
import Admin from "./components/Admin";

function Inicio() {
  return (
    <>
      <Header />
      <Hero />
      <Frase />
      <Esencia />
      <Platos />
      <Banner />
      <Footer />
    </>
  );
}

function App() {
  const pagina = window.location.pathname.toLowerCase();
  if (pagina.endsWith("/carta.html")) return <Carta />;
  if (pagina.endsWith("/reservas.html")) return <Reservas />;
  if (pagina.endsWith("/iniciar-sesion.html")) return <IniciarSesion />;
  if (pagina.endsWith("/registrarse.html")) return <Registrarse />;
  if (pagina.endsWith("/admin.html")) return <Admin />;
  return <Inicio />;
}

export default App;
