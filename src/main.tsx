import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PortfolioApp from './pages/portfolio/App.tsx';
import ResumeApp from './pages/resume/App.tsx';
import ProjectDetailApp from './pages/project-detail/App.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import './index.css';
import './i18n/config';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PortfolioApp />} />
        <Route path="/resume" element={<ResumeApp />} />
        <Route path="/project/:id" element={<ProjectDetailApp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
