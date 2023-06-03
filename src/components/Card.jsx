import React from 'react';
import './styles/Card.css' // Importa el archivo CSS para los estilos de la card

const Card = ({ imageSrc, description, whatsappLink }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt="Imagen de la card" className="card-image" />
      <div className="card-content">
        <p className="card-description">{description}</p>
        <a href={whatsappLink} className="card-button">
          <i className="fab fa-whatsapp"></i> Contactar por WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Card;