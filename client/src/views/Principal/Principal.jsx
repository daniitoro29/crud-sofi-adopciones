import './Principal.css';
import ImgInfoPerros from '../estilos-componentes/perros-img';
import Redes from '../estilos-componentes/redes-img.css';

function Principal() {
  return (
    <div className="App">
      <nav>Comentario: Aqui va la barra de navegacion</nav>
      <h1>¡Bienvenido a nuestra pagina de adopciones y campañas de animales rescatados</h1>
       <ImgInfoPerros
      parrafo="En nuestro sitio web, nos apasiona conectar animales con hogares amorosos. Creemos Firmemente que cada perro merece tener un lugar seguro y cariñoso al que llama hogar. Nuestro objetivo es fomentar la adopción responsable y crear conciencia sobre la importancia de brindarles una segunda oportunidad a estos maravillosos compañeros de cuatro patas."
      imagen="1"
      />

      <ImgInfoPerros
      parrafo="En esta plataforma, nos apasiona brindar apoyo y ayuda a las mascotas necesitadas. Creemos en el amor incondicional que los animales nos brindan y nos esforzamos por garantizar que cada mascota reciba el cuidado y el hogar amoroso que merecen."
      imagen="2"
      />
      <h2>¿Como nos puedes apoyar?</h2>
      <div className='cont-parrafos'>
        <p>Como voluntario tendras brindan la oportunidad de participar en emocionantes campañas y eventos que ayudan a crear conciencia y recaudar fondos para la Fundacion de mascotas.</p>
        <p>¿Estas buscando una nueva mascota para tu hogar?En nuestra pagina, encontràras una amplia variedad de mascotas disponibles para adopciòn.</p>
        <p>Como donador, puedes contribuir de diversas formas, desde donaciones ùnicas hasta donaciones periòdicas. Cada aporte es valioso y nos ayuda a continuar nuestro trabajo en beneficio de las mascotas màs neces</p>
      </div>
      <p className='agradecimiento'>¡Gracias por visitar nuestro sitio, puedes escribirnos en nuestra redes sociales y por considerar la adopciòn como una opciòn de amor! <br/> Una opciòn de amor!</p>
    <div className='cont-redes-img'>
      {/* <Redes 
      redes="instagram"
        />
        <Redes
      redes="facebook"
        />
        <Redes
      redes="twiter"
        /> */}
    </div>
    <footer>
      <p>@Copy Sofi</p>
    </footer>
    </div>
  );
}

export default Principal;