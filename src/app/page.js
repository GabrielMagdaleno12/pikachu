import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>LifeStyle</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/style.css" />
        <link rel="icon" href="/cr7.jpg" type="icon" />
      </Head>

      {/* Header */}
      <header>
        <section className="container">
          <hgroup className="header-content">
            <a href="#" className="logo">LifeStyle</a>
            <nav className="nav-links">
              <a href="#recursos">Recursos</a>
              <a href="#depoimentos">Depoimentos</a>
              <a href="#contato">Contato</a>
            </nav>
            <section className="header-cta">
              <a href="#" className="botao botao-vazio">Login</a>
              <a href="#" className="botao botao-preenchido">Começar</a>
            </section>
            <button className="mobile-menu">☰</button>
          </hgroup>
        </section>
      </header>

      <main>
        {/* Seção Hero */}
        <section className="hero">
          <section className="container">
            <article className="hero-content">
              <section className="hero-text">
                <h1>Transforme seu estilo de vida da melhor forma</h1>
                <p>Inspire-se a viver com mais saúde, energia e propósito: descubra dicas de fitness, nutrição, bem-estar mental e qualidade de vida, tudo em um só lugar feito para transformar a sua jornada pessoal.</p>
                <section className="hero-buttons">
                  <a href="#" className="botao botao-preenchido">Experimente Grátis</a>
                  <a href="#" className="botao botao-vazio">Saiba Mais</a>
                </section>
              </section>
              <figure className="hero-image">
                <img src="cr7.jpg" alt="Painel de Marketing Digital" />
              </figure>
            </article>
          </section>
        </section>

        {/* Seção de Recursos */}
        <section className="recursos" id="recursos">
          <section className="container">
            <h2 className="section-title">Recursos Poderosos</h2>
            <p className="section-title">Tudo o que você precisa para conquistar uma vida mais saudável, ativa e equilibrada em um só lugar.</p>
            <section className="recursos-grid">
              <article className="recursos-card">
                <div className="recursos-icon">📊</div>
                <h3>Treinos Personalizados</h3>
                <p>Descubra rotinas de treino adaptadas ao seu objetivo, seja ganhar massa, emagrecer ou melhorar o condicionamento.</p>
              </article>
              <article className="recursos-card">
                <div className="recursos-icon">📱</div>
                <h3>Dicas de Alimentação Saudável</h3>
                <p>Receba orientações práticas de nutrição para manter uma dieta equilibrada e potencializar seus resultados.</p>
              </article>
              <article className="recursos-card">
                <div className="recursos-icon">📧</div>
                <h3>Bem-Estar e Saúde Mental</h3>
                <p>Encontre práticas para reduzir o estresse, aumentar sua energia e viver com mais equilíbrio emocional.</p>
              </article>
              <article className="recursos-card">
                <div className="recursos-icon">🎯</div>
                <h3>Programas de Desafio Fitness</h3>
                <p>Participe de desafios motivadores para transformar sua rotina e atingir suas metas de forma divertida.</p>
              </article>
              <article className="recursos-card">
                <div className="recursos-icon">💬</div>
                <h3>Comunidade VidaFit</h3>
                <p>Conecte-se com pessoas que compartilham os mesmos objetivos e receba apoio para seguir firme na sua jornada.</p>
              </article>
              <article className="recursos-card">
                <div className="recursos-icon">📝</div>
                <h3>Conteúdo Inspirador</h3>
                <p>Artigos, dicas e histórias reais para te motivar a seguir uma vida mais ativa, saudável e feliz.</p>
              </article>
            </section>
          </section>
        </section>

        {/* Seção de Depoimentos */}
        <section className="depoimentos" id="depoimentos">
          <section className="container">
            <h2 className="section-title">O que nossos clientes dizem</h2>
            <p className="section-title">Usuários que transformaram suas vidas com nossa plataforma!</p>
            <section className="depoimentos-container">
              <article className="depoimentos-card">
                <p className="depoimentos-text">
                  "Desde que começamos a usar o LifeStyle Fitness, nossa performance e resultados melhoraram muito em apenas 3 meses! A plataforma é intuitiva e os resultados são realmente impressionantes!"
                </p>
                <section className="depoimentos-author">
                  <figure className="author-avatar">
                    <img src="cr7c2.jpg" alt="Ana Silva" />
                  </figure>
                  <section className="author-info">
                    <h4>Cris</h4>
                    <p>Agricultor</p>
                  </section>
                </section>
              </article>
              <article className="depoimentos-card">
                <p className="depoimentos-text">
                  "A automação de treinos da plataforma nos economizou muitas horas semanais. Agora podemos focar em estratégias de treinamento enquanto o sistema cuida da rotina!"
                </p>
                <section className="depoimentos-author">
                  <figure className="author-avatar">
                    <img src="cr7cliente.jpg" alt="Carlos Ferreira" />
                  </figure>
                  <section className="author-info">
                    <h4>Yuri Alberto</h4>
                    <p>Diretor de Marketing</p>
                  </section>
                </section>
              </article>
            </section>
          </section>
        </section>

        {/* Seção CTA */}
        <section className="cta-section" id="contato">
          <section className="container">
            <h2 className="cta-title">Comece sua transformação hoje</h2>
            <p className="section-title">Experimente grátis por 14 dias. Sem compromisso.</p>
            <form className="cta-form">
              <input type="email" placeholder="Seu email..." required />
              <button type="submit">Começar Agora</button>
            </form>
          </section>
        </section>
      </main>

      {/* Rodapé */}
      <footer>
        <section className="container">
          <hgroup className="footer-content">
            <section className="footer-column">
              <h3>LifeStyle</h3>
              <p>Soluções completas para fitness digital e crescimento de resultados.</p>
              <section className="social-links">
                <a href="#" className="social-icon">📱</a>
                <a href="#" className="social-icon">💻</a>
                <a href="#" className="social-icon">📧</a>
                <a href="#" className="social-icon">📘</a>
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
                <a href="#">Guias</a>
                <a href="#">Documentação</a>
              </section>
            </section>
            <section className="footer-column">
              <h3>Suporte</h3>
              <section className="footer-links">
                <a href="#">Centro de Ajuda</a>
                <a href="#">Contato</a>
              </section>
            </section>
          </hgroup>
          <section className="footer-bottom">
            <p>© 2025 LifeStyle. Todos os direitos reservados.</p>
          </section>
        </section>
      </footer>
    </>
  );
}