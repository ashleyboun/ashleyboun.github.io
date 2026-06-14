import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from './best/Home'
import { ProjectDetail } from './best/ProjectDetail';
import { Experience } from './best/Experience';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  )
}

export default App
