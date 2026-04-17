import "./Services.css";

function Services() {
  return (
    <section className="services"id="servicos">
      <h2>Serviços</h2>

      <div className="cards">

        <div className="card">
          <h3>Treino Presencial</h3>
          <p>Acompanhamento individual para resultados rápidos.</p>
        </div>

        <div className="card">
          <h3>Consultoria Online</h3>
          <p>Treinos personalizados onde você estiver.</p>
        </div>

        <div className="card">
          <h3>Emagrecimento</h3>
          <p>Protocolo focado em perda de gordura e definição.</p>
        </div>

      </div>
    </section>
  );
}

export default Services;