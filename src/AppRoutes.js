import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Home } from './pages/Home';
import { Name } from './pages/Name';
import { Contacts } from './pages/Contacts';
import { Skills } from './pages/Skills';
import { Intro } from './pages/Intro';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';

export const AppRoutes = () => {
  const location = useLocation(); // Get the current location

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key} // Use location key to trigger transitions
        timeout={1000} // Adjust to match animation duration
        classNames="distorted-merge" // Prefix for CSS classes
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/name" element={<Name />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};
