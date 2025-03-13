import React from 'react';
import { Outlet } from 'react-router-dom';
import PersistentDrawer from './PersistentDrawer.tsx';

const LayoutWithDrawer: React.FC = () => {
  return (
    <PersistentDrawer>
      <Outlet /> {/* Renderiza o conteúdo da página dentro do Main */}
    </PersistentDrawer>
  );
};

export default LayoutWithDrawer;