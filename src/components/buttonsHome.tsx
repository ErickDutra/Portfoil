import "../assets/css/buttonsHome.css"
import curriculo from "../assets/curriculo.pdf"

function ButtonsHome(){
    return (
        <div className="home-buttons">
            <a href="https://github.com/ErickDutra"><button >Git-Hub</button></a>
            <a href="https://www.linkedin.com/in/erick-dutra/"><button >Linkedin</button></a>
            <a href={curriculo} download> <button >Curriculum</button></a>
        </div>
    )
}

export default ButtonsHome;