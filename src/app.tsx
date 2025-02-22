import  AppBar  from './pages/appBar.tsx'
import HomePage from './pages/home.tsx'
import About from './pages/about.tsx'
import './assets/css/main.css'
import BarTecnology from './components/barTecnology.tsx'
import ProjectsPage from './pages/projects.tsx'

function App() {

  return (
    <>
      <div className="app">
        <AppBar />
        <HomePage />
        <BarTecnology/>
        <About/>
        <BarTecnology/>
        <ProjectsPage/>
      </div>
    </>
  )
}

export default App
