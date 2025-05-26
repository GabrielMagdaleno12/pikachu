"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [recursos, setRecursos] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/recursos")
      .then((response) => {
        if (!response.ok) throw new Error("Erro");
        return response.json();
      })
      .then((data) => setRecursos(data))
      .catch((error) => console.error("Erro ao buscar recursos:", error));
  }, []);

  function handleClickRecurso(recurso) {
  if (recurso.title === "Conteúdo Inspirador") {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("dicaSaudavel", data.slip.advice);
        router.push("/lifestyle/conteudo-inspirador");
      })
      .catch((error) => {
        console.error("Erro ao buscar dica externa:", error);
        alert("Erro ao carregar conteúdo inspirador.");
      });
  }
}


  return (
    <>
      <section className="hero">
        <section className="container">
          <article className="hero-content">
            <section className="hero-text">
              <h1>Transforme seu estilo de vida da melhor forma</h1>
              <figure className="hero-image-mobile">
                <img src="cr7.jpg" alt="Painel de Marketing Digital" />
              </figure>
              <p>
                Inspire-se a viver com mais saúde, energia e propósito: descubra
                dicas de fitness, nutrição, bem-estar mental e qualidade de
                vida, tudo em um só lugar feito para transformar a sua jornada
                pessoal.
              </p>
              <section className="hero-buttons">
                <a href="#" className="botao botao-preenchido">
                  Experimente Grátis
                </a>
                <a href="#" className="botao botao-vazio">
                  Saiba Mais
                </a>
              </section>
            </section>
            <figure className="hero-image-desktop">
              <img src="cr7.jpg" alt="Painel de Marketing Digital" />
            </figure>
          </article>
        </section>
      </section>

      <section className="recursos" id="recursos">
        <section className="container">
          <h2 className="section-title">Recursos Poderosos</h2>
          <p className="section-title">
            Tudo o que você precisa para conquistar uma vida mais saudável,
            ativa e equilibrada em um só lugar.
          </p>
          <section className="recursos-grid">
            {recursos.length > 0 ? (
              recursos.map((recurso) => (
                <article
                  className="recursos-card"
                  key={recurso.id}
                  onClick={() => handleClickRecurso(recurso)}
                  style={{
                    cursor:
                      recurso.title === "Dicas de Alimentação Saudável"
                        ? "pointer"
                        : "default",
                  }}
                >
                  <div className="recursos-icon">{recurso.icon}</div>
                  <h3>{recurso.title}</h3>
                  <p>{recurso.description}</p>
                </article>
              ))
            ) : (
              <p>Carregando recursos...</p>
            )}
          </section>
        </section>
      </section>

      <section className="depoimentos" id="depoimentos">
        <section className="container">
          <h2 className="section-title">O que nossos clientes dizem</h2>
          <p className="section-title">
            Usuários que transformaram suas vidas com nossa plataforma!
          </p>
          <section className="depoimentos-container">
            <article className="depoimentos-card">
              <p className="depoimentos-text">
                "Desde que começamos a usar o LifeStyle Fitness, nossa
                performance e resultados melhoraram muito em apenas 3 meses! A
                plataforma é intuitiva e os resultados são realmente
                impressionantes!"
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
                "A automação de treinos da plataforma nos economizou muitas
                horas semanais. Agora podemos focar em estratégias de
                treinamento enquanto o sistema cuida da rotina!"
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

      <section className="cta-section" id="contato">
        <section className="container">
          <h2 className="cta-title">Comece sua transformação hoje</h2>
          <p className="section-title">
            Experimente grátis por 14 dias. Sem compromisso.
          </p>
          <form className="cta-form">
            <input type="email" placeholder="Seu email..." required />
            <button type="submit">Começar Agora</button>
          </form>
        </section>
      </section>
    </>
  );
}
