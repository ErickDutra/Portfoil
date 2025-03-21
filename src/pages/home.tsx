import '../assets/css/home.css';
import img from '../assets/imgs/img-duck.gif';
import ButtonsHome from '../components/buttonsHome';
function HomePage(){
    return (
        <div id="home" className="home">
        <div className="home-text">
            <p>Seja bem-vindo!</p>
            <p> Aqui, inovação e tecnologia se unem para entregar soluções que fazem a diferença.</p>
            <div><ButtonsHome/></div>
        </div>
        <div className="home-image">
            <img src={img} alt="Erick Dutra"/>
            </div>
        </div>
    );
}

export default HomePage;