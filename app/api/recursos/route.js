export async function GET() {
  const recursos = [
    {
      id: 1,
      icon: "📊",
      title: "Treinos Personalizados",
      description: "Descubra rotinas de treino adaptadas ao seu objetivo, seja ganhar massa, emagrecer ou melhorar o condicionamento."
    },
    {
      id: 2,
      icon: "📱",
      title: "Dicas de Alimentação Saudável",
      description: "Receba orientações práticas de nutrição para manter uma dieta equilibrada e potencializar seus resultados."
    },
    {
      id: 3,
      icon: "📧",
      title: "Bem-Estar e Saúde Mental",
      description: "Encontre práticas para reduzir o estresse, aumentar sua energia e viver com mais equilíbrio emocional."
    },
    {
      id: 4,
      icon: "🎯",
      title: "Programas de Desafio Fitness",
      description: "Participe de desafios motivadores para transformar sua rotina e atingir suas metas de forma divertida."
    },
    {
      id: 5,
      icon: "💬",
      title: "Comunidade VidaFit",
      description: "Conecte-se com pessoas que compartilham os mesmos objetivos e receba apoio para seguir firme na sua jornada."
    },
    {
      id: 6,
      icon: "📝",
      title: "Conteúdo Inspirador",
      description: "Artigos, dicas e histórias reais para te motivar a seguir uma vida mais ativa, saudável e feliz."
    }
  ];

  return Response.json(recursos);
}
