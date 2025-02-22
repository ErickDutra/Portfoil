import '../assets/css/barTecnology.css';

export function BarTecnology(){
    return (
        <div className="bar-tecnology">
            <div className="tecnology-slider">
                <div className="tecnology">
                    <div className="tecnology-item">
                    <img src="https://img.icons8.com/color/50/java-coffee-cup-logo.png" alt="java-coffee-cup-logo"/>
                    </div>
                    <div className="tecnology-item">
                        <img src="https://img.icons8.com/color/50/000000/typescript.png" alt="TypeScript"/>
                    </div>
                    <div className="tecnology-item">
                    <img src="https://img.icons8.com/color/50/spring-logo.png" alt="spring-logo"/>
                    </div>
                    <div className="tecnology-item">
                        <img src="https://img.icons8.com/color/50/000000/nodejs.png" alt="Node"/>
                    </div>
                    <div className="tecnology-item">
                    <img  src="https://img.icons8.com/color/50/flutter.png" alt="flutter"/>
                    </div>
                    <div className="tecnology-item">
                        <img src="https://img.icons8.com/color/50/000000/postgreesql.png" alt="PostgreSQL"/>
                    </div>
                    <div className="tecnology-item">
                        <img src="https://img.icons8.com/color/50/000000/docker.png" alt="Docker"/>
                    </div>
                </div>
                <div className="tecnology">
                    {/* Repetir os itens para rolagem infinita */}
                    <div className="tecnology-item">
                    <img src="https://img.icons8.com/color/50/java-coffee-cup-logo.png" alt="java-coffee-cup-logo"/>
                    </div>
                    <div className="tecnology-item">
                        <img src="https://img.icons8.com/color/50/000000/typescript.png" alt="TypeScript"/>
                    </div>
                    <div className="tecnology-item">
                    <img  src="https://img.icons8.com/color/50/spring-logo.png" alt="spring-logo"/>
                    </div>
                    <div className="tecnology-item">
                        <img src="https://img.icons8.com/color/50/000000/nodejs.png" alt="Node"/>
                    </div>
                    <div className="tecnology-item">
                        <img src="https://img.icons8.com/color/50/flutter.png" alt="flutter"/>
                    </div>
                    <div className="tecnology-item">
                        <img src="https://img.icons8.com/color/50/000000/postgreesql.png" alt="PostgreSQL"/>
                    </div>
                    <div className="tecnology-item">
                        <img src="https://img.icons8.com/color/50/000000/docker.png" alt="Docker"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BarTecnology;