import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PortfolioApp from './pages/portfolio/App.tsx';
import ResumeApp from './pages/resume/App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioApp />} />
        <Route path="/resume" element={<ResumeApp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
