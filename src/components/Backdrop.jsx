import React from 'react';
import { createPortal } from 'react-dom';

const Backdrop = ({ onClick, zIndex = 1000000, opacity = 0.5 }) => {
  const style = {
    position: 'fixed',
    inset: 0,
    background: `rgba(43,43,43,${opacity})`,
    zIndex,
  };
  return createPortal(<div style={style} onClick={onClick} aria-hidden="true" />, document.body);
};

export default Backdrop;
