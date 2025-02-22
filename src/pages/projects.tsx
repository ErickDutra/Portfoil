import { useEffect, useState } from 'react';
import '../assets/css/projects.css';
class ProjectItem {
    name: string;
    description: string;
    link: string;
    imagem: string;

    constructor(name: string, description: string, link: string, imagem: string) {
        this.name = name;
        this.description = description;
        this.link = link;
        this.imagem = imagem
    }
}

interface ProfileData {
    itens: {
        title: string;
        descricao: string;
        url: string;
        imagem: string;
    }[];
}

async function fetchProfileData(): Promise<ProfileData | null> {
    try {
        const response = await fetch(
            "https://raw.githubusercontent.com/ErickDutra/New_repository/main/assets/data/profile.json"
        );
        if (!response.ok) {
            throw new Error("Erro ao buscar os dados do perfil");
        }
        return await response.json();
    } catch (error) {
        console.error("Erro ao buscar os dados do perfil:", error);
        return null;
    }
}

function ProjectsPage() {
    const [listProjects, setListProjects] = useState<ProjectItem[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        async function loadProjects() {
            const response = await fetchProfileData();
            if (response) {
                const projects: ProjectItem[] = response.itens.map((item) =>
                    new ProjectItem(item.title, item.descricao, item.url, item.imagem)
                );
                setListProjects(projects);
            }
        }
        loadProjects();
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % listProjects.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + listProjects.length) % listProjects.length);
    };

    if (listProjects.length === 0) {
        return <div>Loading...</div>;
    }

    const currentProject = listProjects[currentIndex];

    return (
        <div className="projects">

            <div className="projects-list">
                <div className="project-item">
                    <div className="project-image"> 
                        <img src={currentProject.imagem}  alt="icons" className='front' />
                    </div>
                    <h3>{currentProject.name}</h3>
                    <p>{currentProject.description}</p>
                    <a href={currentProject.link}><img width="80" height="80" src="https://img.icons8.com/color/100/000000/github.png" alt="github" /></a>
                    <button id="left" onClick={handlePrev}>
                        <img width="32" height="32" src="https://img.icons8.com/skeuomorphism/32/back.png" alt="back" />
                    </button>
                    <button id="right" onClick={handleNext}>
                        <img width="32" height="32" src="https://img.icons8.com/skeuomorphism/32/forward.png" alt="forward" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;