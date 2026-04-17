import "./Whatsapp.css";

function Whatsapp() {
  const numero = "5511941823204"; // coloque o número do personal

  return (
    <a
      href={`https://wa.me/${numero}`}
      className="whatsapp"
      target="_blank"
      rel="noopener noreferrer"
    >
      💬
    </a>
  );
}

export default Whatsapp;