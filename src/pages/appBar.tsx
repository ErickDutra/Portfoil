import '../assets/css/AppBar.css'
import img from "../assets/imgs/logo.png";
function AppBar() {
  return (

    <div  className="appbar">
        <div className="appbar-logo">
            <img src={img} alt="Erick Dutra - Desenvolvedor Full Stack" />
            <h1>Erick Dutra</h1>
        </div>
      <div className="appbar-buttons">
        <a href="#home"><button>Início</button></a>
        <a href="#about"><button>Sobre</button></a>
        <a href="#projects"><button>Projetos</button></a>
      </div>
    </div>
  )
}
export default AppBar;