import { useEffect, useState } from "react";
import "../assets/css/projects.css";
import json from "../assets/projetos/projetos.json";

class ProjectItem {
  titulo: string;
  descricao: string;
  ferramentas: string[];
  link: string;
  imagem: string;
  constructor(
    titulo: string,
    descricao: string,
    ferramentas: string[],
    link: string,
    imagem: string
  ) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.ferramentas = ferramentas;
    this.link = link;
    this.imagem = imagem;
  }
}

interface ProfileData {
  itens: {
    titulo: string;
    descricao: string;
    ferramentas?: string[];
    link: string;
    imagem: string;
  }[];
}

function ProjectsPage() {
  const [listProjects, setListProjects] = useState<ProjectItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  const images = import.meta.glob(
    "../assets/projetos/image/*.{png,jpg,jpeg,svg}"
  );

  useEffect(() => {
    function loadProjects() {
      const response: ProfileData = json;
      const projects: ProjectItem[] = response.itens.map(
        (item) =>
          new ProjectItem(
            item.titulo,
            item.descricao,
            item.ferramentas || [],
            item.link,
            item.imagem
          )
      );
      setListProjects(projects);
    }
    loadProjects();
  }, []);

  useEffect(() => {
    if (listProjects.length === 0) return;
    const currentProject = listProjects[currentIndex];
    const path = `../assets/projetos/image/${currentProject.imagem}`;
    if (images[path]) {
      images[path]().then((module: any) => {
        setImageUrl(module.default);
      });
    }
  }, [listProjects, currentIndex, images]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + listProjects.length) % listProjects.length
    );
  };

  if (listProjects.length === 0) {
    return <div>Loading...</div>;
  }
  const currentProject = listProjects[currentIndex];

  return (
    <div id="projects" className="projects ">
      <div className="projects-list">
        <div className="project-item">
          <div className="project-container ">
            <h3>{currentProject.titulo}</h3>
            <div className="project-image">
              {imageUrl && <img src={imageUrl} alt="icons" className="front" />}
            </div>
            <div className="project-footer">
                <div className="ferramentas">
                    {currentProject.ferramentas.map((item) => (
                <img src={item} alt="" />
              ))}
                </div>
              <p>{currentProject.descricao}</p>
              <a href={currentProject.link}>
                <img
                  width="80"
                  height="80"
                  src="https://img.icons8.com/color/100/000000/github.png"
                  alt="github"
                />
              </a>
            </div>
          </div>
          <button id="left" onClick={handlePrev}>
            <img
              width="32"
              height="32"
              src="https://img.icons8.com/skeuomorphism/32/back.png"
              alt="back"
            />
          </button>
          <button id="right" onClick={handleNext}>
            <img
              width="32"
              height="32"
              src="https://img.icons8.com/skeuomorphism/32/forward.png"
              alt="forward"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
