import img from "../assets/imgs/foto.png";
import "../assets/css/about.css";
import ItensContact from "../components/itensContact";
function About() {
  return (
    <div id="about" className="about">
      <div className="about-image">
        <img src={img} alt="Erick Dutra" />
      </div>
      <div className="about-text">
        <p>
            Sou um desenvolvedor <b>Back-end</b> com experiência profissional em
          <b>TypeScript</b>, com o principal foco em desenvolvimento de soluções
          em <b>Java</b>, utilizando Spring Boot. Além disso, tenho experiência no
          desenvolvimento de aplicações multiplataforma com <b>Flutter</b> e
          conhecimentos básicos em Front-end com React.
          <br />
          Por atuar não apenas no desenvolvimento de aplicações, mas também na
          integração de clientes e na estilização de relatórios, adquiri um
          conhecimento solidos em bancos de dados relacionais, como
          <b>PostgreSQL</b> e <b>MySQL</b>. Também possuo conhecimento em <b>Docker</b>, o
          que me permite criar ambientes de desenvolvimento e produção mais
          eficientes e escaláveis.{" "}
        </p>
        <ItensContact/>
      </div>
    </div>
  );
}

export default About;
