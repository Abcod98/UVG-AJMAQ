import {useLocation } from "react-router-dom";
import '../components/styles/About.css'

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&family=Tilt+Warp&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Petrona:wght@200&family=Tilt+Warp&display=swap');
</style>

function About() {

  return (
    <div className="about-container">
      <div className="about-image-container">
        <img src="https://i.pinimg.com/564x/61/8c/7b/618c7bbf198b83787eb533c9bd4bbf91.jpg" alt="Foto de perfil" className="about-image" />
      </div>
      <div className="about-text-container">
        <h2 className="about-title">Sobre <br/> Nosotros</h2>
        <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus sapien vel vestibulum fermentum. Donec tempor arcu sit amet odio dapibus, ut tempus est venenatis. Nullam semper felis et ipsum gravida, ut malesuada ligula tempus. Proin malesuada ante et elit sollicitudin, vitae bibendum tellus lacinia. Morbi aliquam eu urna eu porta. Suspendisse ullamcorper mauris eu gravida ullamcorper. Nam aliquam finibus turpis, id scelerisque ex consequat et.</p>
      </div>
    </div>
  );
}

export default About;
