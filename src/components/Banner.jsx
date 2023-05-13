import React, { useState, useEffect } from 'react';

function Banner() {

  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://c8.alamy.com/compes/2j5aa6h/conjunto-de-cestas-de-mimbre-para-picnic-sobre-fondo-blanco-2j5aa6h.jpg',
    'https://c7.alamy.com/compes/2mxeg5m/conjunto-de-cestas-de-mimbre-para-picnic-sobre-fondo-blanco-diseno-de-banner-2mxeg5m.jpg',
    'https://c8.alamy.com/compes/2m7h48y/conjunto-de-elegantes-cestas-de-ratan-sobre-fondo-blanco-2m7h48y.jpg',
  ];

  const changeImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  useEffect(() => {
    const interval = setInterval(changeImage, 5000);
    return () => clearInterval(interval);
  }, [currentImage]);

  const imageStyle = {
    width: '100%',
    height: '70%',
    objectFit: 'cover',
    borderRadius: '10px',

  };

  return (
    <div>
       <img src={images[currentImage]} alt="Banner" style={imageStyle} />
    </div>
  );
}

export default Banner;