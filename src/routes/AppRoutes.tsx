import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import LayoutWithDrawer from '../components/layout/LayoutWithDrawer';
import LayoutWithoutDrawer from '../components/layout/LayoutWithoutDrawer';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Rotas com Drawer */}
        <Route element={<LayoutWithDrawer />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>

        {/* Rotas sem Drawer */}
        <Route element={<LayoutWithoutDrawer />}>
        </Route>

        {/* Rota para página não encontrada */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;