import { useEffect, useState } from "react";
import "../assets/css/projects.css";
import json from "../assets/projetos/projetos.json";

class ProjectItem {
  id: number;
  titulo: string;
  descricao: string;
  ferramentas: string[];
  link: string;
  imagem: string;
  constructor(
    id: number,
    titulo: string,
    descricao: string,
    ferramentas: string[],
    link: string,
    imagem: string
  ) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.ferramentas = ferramentas;
    this.link = link;
    this.imagem = imagem;
  }
}

interface ProfileData {
  itens: {
    id: number;
    titulo: string;
    descricao: string;
    ferramentas?: string[];
    link: string;
    imagem: string;
  }[];
}

function ProjectsPage() {
  const [listProjects, setListProjects] = useState<ProjectItem[]>([]);
  const [imageUrls, setImageUrls] = useState<{ [key: number]: string }>({});

  // Importação dinâmica das imagens
  const images = import.meta.glob("../assets/projetos/image/*.{png,jpg,jpeg,svg}");

  useEffect(() => {
    function loadProjects() {
      const response: ProfileData = json;
      const projects: ProjectItem[] = response.itens.map(
        (item) =>
          new ProjectItem(
            item.id,
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

    listProjects.forEach((project) => {
      const path = `../assets/projetos/image/${project.imagem}`;
      if (images[path]) {
        images[path]().then((module) => {
          setImageUrls((prev) => ({
            ...prev,
            [project.id]: (module as { default: string }).default,
          }));
        });
      }
    });
  }, [listProjects, images]);

  if (listProjects.length === 0) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Carregando projetos...</p>
      </div>
    );
  }

  return (
    <div id="projects" className="projects">
      <div className="projects-header">
        <h1>Meus Projetos</h1>
        <p>Conheça alguns dos projetos que desenvolvi</p>
      </div>
      
      <div className="projects-grid">
        {listProjects.map((project) => (
          <div
            key={`${project.titulo}-${project.link}`}
            className="project-card"
          >
            <div className="project-image">
              {imageUrls[project.id] && (
                <img 
                  src={imageUrls[project.id]} 
                  alt={`Preview do projeto ${project.titulo}`} 
                  className="project-screenshot" 
                />
              )}
              <div className="image-overlay">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project">
                  <span>Ver Projeto</span>
                </a>
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-header">
                <h3>{project.titulo}</h3>
              </div>
              
              <p className="project-description">{project.descricao}</p>
              
              <div className="project-technologies">
                <h4>Tecnologias:</h4>
                <div className="tech-stack">
                  {project.ferramentas.map((tech) => (
                    <div key={tech} className="tech-item">
                      <img src={tech} alt={`Tecnologia ${tech}`} />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="project-actions">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="github-link"
                >
                  <img
                    src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                    alt="Ver no GitHub"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
