import '../assets/css/AppBar.css'
function AppBar() {
  return (

    <div  className="appbar">
        <h1>Erick Dutra</h1>
      <div className="appbar-buttons">
        <a href="#home"><button>Inicio</button></a>
        <a href="#about"><button>Sobre</button></a>
        <a href="#projects"><button>Projetos</button></a>
      </div>
    </div>
  )
}
export default AppBar;