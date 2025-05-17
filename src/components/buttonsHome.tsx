import "../assets/css/buttonsHome.css";
import curriculo from "../assets/curriculo.pdf";

function ButtonsHome() {
  return (
    <div className="home-buttons">
      <a href="https://github.com/ErickDutra" target="_blank">
        <button>{" "}
        <img width="24"
         height="24" 
         src="https://skillicons.dev/icons?i=github" 
         alt="github"/>{" "}
          Git-Hub
        </button>
      </a>
      {" "}
      <a href="https://www.linkedin.com/in/erick-dutra/" target="_blank" >
        <button>
          <img
            width="100"
            height="100"
            src="https://img.icons8.com/ios-filled/100/linkedin.png"
            alt="linkedin"
          />{" "}
          Linkedin
        </button>
      </a>
      <a href={curriculo} download>
        {" "}
        <button>
          <img
            width="40"
            height="40"
            src="https://img.icons8.com/material-outlined/96/documents--v2.png"
            alt="documents--v2"
          />{" "}
          Curriculum
        </button>
      </a>
    </div>
  );
}

export default ButtonsHome;
