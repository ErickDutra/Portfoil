import img from "../assets/imgs/foto.png";
import "../assets/css/about.css";
import ItensContact from "../components/itensContact";
function About() {
  return (
    <div className="about">
      <div className="about-image">
        <img src={img} alt="Erick Dutra" />
      </div>
      <div className="about-text">
        <p>
            Sou um desenvolvedor <b>Back-end</b> com experiência profissional em
          TypeScript, mas meu principal foco está no desenvolvimento de soluções
          em Java, utilizando Spring Boot. Além disso, tenho experiência no
          desenvolvimento de aplicações multiplataforma com Flutter e
          conhecimentos básicos em Front-end com React.
          <br />
          Por atuar não apenas no desenvolvimento de aplicações, mas também na
          integração de clientes e na estilização de relatórios, adquiri um
          conhecimento intermediário em bancos de dados relacionais, como
          PostgreSQL e MySQL. Também possuo uma básica experiência em Docker, o
          que me permite criar ambientes de desenvolvimento e produção mais
          eficientes e escaláveis.{" "}
        </p>
        <ItensContact/>
      </div>
    </div>
  );
}

export default About;
