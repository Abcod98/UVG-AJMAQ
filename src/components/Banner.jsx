import React, { useState, useEffect } from 'react';
import './styles/Banner.css'

function Banner() {

  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://media.discordapp.net/attachments/967269362425806858/1111853471520534671/banner1.png?width=734&height=413',
    'https://media.discordapp.net/attachments/967269362425806858/1111865284693868617/banner2.png?width=734&height=413',
    'https://media.discordapp.net/attachments/967269362425806858/1111870889747828816/banner3.png?width=734&height=413',
  ];

  const changeImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  useEffect(() => {
    const interval = setInterval(changeImage, 5000);
    return () => clearInterval(interval);
  }, [currentImage]);

  const imageStyle = {
    width: '60%',
    height: '60%',
  };

  return (
    <div>
       <img className='Banner' src={images[currentImage]} alt="Banner"/>
    </div>
  );
}

export default Banner;