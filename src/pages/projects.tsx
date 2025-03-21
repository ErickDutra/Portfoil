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
    return <div>Loading...</div>;
  }

  return (
    <div id="projects" className="projects">
      <div className="scroll-container block">
        {listProjects.map((project) => (
          <div
            key={`${project.titulo}-${project.link}`}
            className="scroll-item block"
          >
            {imageUrls[project.id] && (
              <img src={imageUrls[project.id]} alt="icons" className="front block" />
            )}
            <div className="project-description block">
            <h3>{project.titulo}</h3>
            <p>{project.descricao}</p>
            <a href={project.link}>
            <div>
            {project.ferramentas.map((item) => (
            <img key={item} src={`${item}`} alt={item}  className="stacks block" />
              ))}</div>
              <img
                width="50"
                height="50"
                src="https://img.shields.io/badge/GitHub-0168a8?style=for-the-badge&logo=github&logoColor=white"
                alt="github"
                className="badge"
              />
            </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
