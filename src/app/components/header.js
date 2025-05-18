"use client"; // Necessário para usar hooks do React

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fechar o menu mobile quando a tela for redimensionada para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Função para fechar o menu quando clicar em qualquer link
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <section className="container">
        <div className="header-content">
          <Link href="/" className="logo">
            LifeStyle
          </Link>
          
          {/* Botão do menu mobile */}
          <button className="mobile-menu" onClick={toggleMenu} aria-label="Menu de navegação">
            {menuOpen ? '✕' : '☰'}
          </button>
          
          {/* Menu de navegação e CTA */}
          <div className={`nav-container ${menuOpen ? 'open' : ''}`}>
            <nav className="nav-links">
              <Link href="#recursos" onClick={closeMenu}>Recursos</Link>
              <Link href="#depoimentos" onClick={closeMenu}>Depoimentos</Link>
              <Link href="#contato" onClick={closeMenu}>Contato</Link>
            </nav>
            
            <section className="header-cta">
              <Link href="#" className="botao botao-vazio" onClick={closeMenu}>
                Login
              </Link>
              <Link href="#" className="botao botao-preenchido" onClick={closeMenu}>
                Começar
              </Link>
            </section>
          </div>
        </div>
      </section>
    </header>
  );
}