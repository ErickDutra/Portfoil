import '../assets/css/home.css';
import img from '../assets/imgs/img-duck.gif';
import ButtonsHome from '../components/buttonsHome';
function HomePage(){
    return (
        <div className="home">
        <div className="home-text">
            <p>Olá! Seja muito bem-vindo ao meu portfólio! Como um bom nerd e desenvolvedor, decidi dar um toque pessoal a este espaço. Fique à vontade e aproveite a experiência!</p>
            <div><ButtonsHome/></div>
        </div>
        <div className="home-image">
            <img src={img} alt="Erick Dutra"/>
            </div>
        </div>
    );
}

export default HomePage;