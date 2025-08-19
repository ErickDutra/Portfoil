import '../assets/css/home.css';
import img from '../assets/imgs/img-duck.gif';
import ButtonsHome from '../components/buttonsHome';
function HomePage(){
    return (
        <div id="home" className="home block">
            <div className="home-content">
                <div className="home-text">
                    <div className="greeting">
                        <h1>Olá, eu sou o <span className="name-highlight">Erick Dutra</span></h1>
                        <div className="role-container">
                            <h2>Desenvolvedor <span className="role-highlight">Full Stack</span></h2>
                        </div>
                    </div>
                    <p className="description">
                        Sou um desenvolvedor <b>Full Stack</b> com especialização em <b>desenvolvimento back-end</b>, 
                        transformando ideias em soluções digitais robustas e escaláveis. Combino{" "}
                        <b>arquiteturas backend sólidas</b>, <b>interfaces modernas</b> e{" "}
                        <b>experiências mobile fluidas</b> para criar produtos que impactam positivamente 
                        a vida das pessoas.
                    </p>
                    <div className="technologies-preview">
                        <span className="tech-item">Java</span>
                        <span className="tech-item">TypeScript</span>
                        <span className="tech-item">React</span>
                        <span className="tech-item">Flutter</span>
                    </div>
                    <div className="cta-section">
                        <ButtonsHome/>
                    </div>
                </div>
            </div>
            <div className="home-image block">
                <div className="image-container">
                    <img src={img} alt="Erick Dutra - Desenvolvedor Full Stack"/>
                    <div className="image-decoration"></div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;