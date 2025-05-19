export default function Footer() {
  return (
    <footer>
      <section className="container">
        <hgroup className="footer-content">
          {/* Primeira linha com 3 footer-columns */}
          <section className="footer-row">
            <section className="footer-column">
              <h3>Suporte</h3>
              <section className="footer-links">
                <a href="#">Centro de Ajuda</a>
                <a href="#">Contato</a>
              </section>
            </section>
            <section className="footer-column">
              <h3>Empresa</h3>
              <section className="footer-links">
                <a href="#">Sobre nós</a>
                <a href="#">Blog</a>
              </section>
            </section>
            <section className="footer-column">
              <h3>Recursos</h3>
              <section className="footer-links">
                <a href="#">Documentação</a>
                <a href="#">Guias</a>
              </section>
            </section>
          </section>
          {/* Segunda linha com 1 footer-column centralizada e links sociais */}
          <section className="footer-row single-column">
            <section className="footer-column full-width">
              <h3>LifeStyle</h3>
              <p>
                Soluções completas para fitness digital e crescimento de
                resultados.
              </p>
              <section className="social-links">
                <a href="#" className="social-icon">📱</a>
                <a href="#" className="social-icon">💻</a>
                <a href="#" className="social-icon">📧</a>
                <a href="#" className="social-icon">📘</a>
              </section>
            </section>
          </section>
        </hgroup>
        <section className="footer-bottom">
          <p>© 2025 LifeStyle. Todos os direitos reservados.</p>
        </section>
      </section>
    </footer>
  );
}
