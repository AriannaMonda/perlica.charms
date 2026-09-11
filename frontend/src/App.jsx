import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import ChiSiamo from './pages/ChiSiamo';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-surface text-on-surface min-h-screen flex flex-col antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} /> {/* 2. Aggiungi questa rotta */}
          <Route path="/chi-siamo" element={<ChiSiamo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}