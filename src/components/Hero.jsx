import "./Hero.css";
import pires from "../assets/pires.jpg";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="overlay">

        <img
          src={pires}
          alt="Personal Trainer"
          className="hero-logo"
          data-aos="zoom-in"
        />

        <h1 data-aos="fade-up" data-aos-delay="200">
          Transforme seu corpo
        </h1>

        <p data-aos="fade-up" data-aos-delay="400">
          Treinos personalizados para resultados reais
        </p>

        <a
          href="https://wa.me/5511941823204"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-button"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          Agendar Avaliação
        </a>

      </div>
    </section>
  );
}

export default Hero;