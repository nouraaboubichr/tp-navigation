import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Accueil from './Accueil';
import Apropos from './Apropos';

function App() {
  return (
    <div>
      <nav style={{ padding: '10px', background: '#eee' }}>
        <Link to="/" style={{ marginRight: '15px' }}>Accueil</Link>
        <Link to="/apropos">À propos</Link>
      </nav>

      <hr />

      <div style={{ padding: '20px' }}>
        <h1 className="titre-principal">Mon Application React</h1>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;