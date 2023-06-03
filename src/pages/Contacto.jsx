import "../components/styles/Contacto.css";

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&family=Tilt+Warp&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Petrona:wght@200&family=Tilt+Warp&display=swap');
</style>;

function Contacto() {
  return (
    <div className="contacto-conteiner">
      <div className="contacto-conteiner-encabezado">
        <h1>¡Hola! Te damos la bienvenida al proyecto Ajmaq. </h1>
        <p>
          Aquí encontrarás información para realizar tus <br />
          pedidos
        </p>
      </div>
      <div className="contacto-conteiner-section">
        <section className="contacto-section envios">
          <h2>Envíos</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type.
          </p>
        </section>
        <section className="contacto-section cotizacion">
          <h2>Cotización</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type.</p>
        </section>
        <section className="contacto-section pedidos">
          <h2>Pedidos</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type.</p>
        </section>
      </div>
    </div>
  );
}

export default Contacto;
