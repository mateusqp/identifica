import React from 'react';
import { Outlet } from 'react-router-dom';

const LayoutWithoutDrawer: React.FC = () => {
  return (
    <div>
      <Outlet /> {/* Renderiza o conteúdo da página aqui */}
    </div>
  );
};

export default LayoutWithoutDrawer;