import React from 'react';
import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={`container-fluid ${styles.footer}`}>
      <p>© 2023 NBA. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
