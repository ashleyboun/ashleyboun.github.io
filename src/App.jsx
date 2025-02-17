import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Home } from './best/Home'
import { ProjectOne } from './best/ProjectOne';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project-1" element={<ProjectOne />} />
    </Routes>
  )
}

export default App
