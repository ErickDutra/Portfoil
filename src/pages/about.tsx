import img from "../assets/imgs/foto.png";
import "../assets/css/about.css";
import ItensContact from "../components/itensContact";
function About() {
  return (
    <div id="about" className="about ">
      <div className="about-image ">
        <img src={img} alt="Erick Dutra - Desenvolvedor Full Stack" />
        <div className="image-overlay">
          <div className="tech-badge">Java</div>
          <div className="tech-badge">TypeScript</div>
          <div className="tech-badge">React</div>
        </div>
      </div>
      <div className="about-content ">
        <div className="about-header">
          <h2>Sobre Mim</h2>
          <div className="underline"></div>
        </div>
        <div className="about-text">
          <p className="intro">
            Olá! Sou <span className="highlight">Erick Dutra</span>,
            desenvolvedor apaixonado por criar soluções tecnológicas que sejam
            inovadoras e eficientes. Atuo no <b>Back-end</b> com <b>Java</b> e{" "}
            <b>Spring Boot</b>, construindo APIs seguras e escaláveis, e também
            tenho experiência com <b>TypeScript</b> em aplicações modernas e
            performáticas. No mobile, utilizo <b>Flutter</b> para desenvolver
            apps multiplataforma, enquanto no <b>Front-end</b> trabalho com{" "}
            <b>React</b> para criar interfaces dinâmicas e responsivas. Minha
            experiência vai desde a arquitetura de sistemas até a integração com
            clientes e a personalização de relatórios. Além disso, possuo
            conhecimento sólido em bancos de dados como <b>PostgreSQL</b> e{" "}
            <b>MySQL</b>, e utilizo <b>Docker</b> para containerização e
            práticas de DevOps.
          </p>
        </div>
        <ItensContact />
      </div>
    </div>
  );
}

export default About;
