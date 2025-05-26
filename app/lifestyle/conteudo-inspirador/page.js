"use client";

import { useEffect, useState } from "react";

export default function DicaSaudavelPage() {
  const [dica, setDica] = useState("");

  useEffect(() => {
    const dicaArmazenada = localStorage.getItem("dicaSaudavel");
    if (dicaArmazenada) {
      setDica(dicaArmazenada);
    } else {
      setDica("Nenhuma dica encontrada. Volte e tente novamente.");
    }
  }, []);

  return (
    <section style={{ padding: "2rem" }}>
      <h1> Conteúdo Inspirador</h1>
      <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>{dica}</p>
    </section>
  );
}
