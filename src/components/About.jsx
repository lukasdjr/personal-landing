import "./About.css";
import videoPersonal from "../assets/personal.mp4.mp4";

function About() {
  return (
    <section className="about"id="sobre">

      <div className="about-container">

        <div className="about-video" data-aos="fade-right">
          <video
            src={videoPersonal}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        <div className="about-text" data-aos="fade-left">
          <h2>Sobre o Personal</h2>

          <p>
            Formado em Educação Física, com mais de 6 anos de experiência como Personal Trainer,
            atuando em academias e atendendo clientes de forma personalizada.
            Ajudo pessoas a conquistarem saúde, definição muscular e qualidade
            de vida através de treinos personalizados e acompanhamento profissional.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;