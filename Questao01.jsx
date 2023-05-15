import React, { useEffect, useState } from "react";

function Questao01X() {
  const [alunosBaixoDesempenho, setAlunosBaixoDesempenho] = useState([]); // variável que armazena alunos / atualiza alunos e inicia com vetor vazio
  const [loading, setLoading] = useState(true); // inicia processo de carregamento
  const [loaded, setLoaded] = useState(false);

  const receberMedias = (medias) => {
    const alunosBaixoDesempenho = medias.filter((aluno) => aluno.media <= 5); //percorre o vetor e filtra os alunos <= 5
    setAlunosBaixoDesempenho(alunosBaixoDesempenho); //atualiza o vetor
    setLoading(false); //carregamento concluído
  };

  const alunos = [
    { nome: "Luizinho", notas: { ap1: 3.4, ap2: 5.4 } },
    { nome: "Carlinho", notas: { ap1: 5.7, ap2: 3.5 } },
    { nome: "Joãozinho", notas: { ap1: 1.3, ap2: 4.2 } }
  ];

  useEffect(() => {
    //atraso proposital para "carregamento" na tela
    const timer = setTimeout(() => {
      setLoading(false); //atualiza estados
      setLoaded(true);
    }, 3000);

    return () => {
      // cancela o temporizador
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (loaded) {
      //verifica se dados foram carregados
      const medias = alunos.map((aluno) => {
        //pecorre o vetor
        const media = (aluno.notas.ap1 + aluno.notas.ap2) / 2; //calcula a média
        return { ...aluno, media }; //retorna para o novo vetor medias com informações sobre os alunos e médias
      });
      receberMedias(medias);
    }
  }, [loaded, alunos]);

  return (
    <div>
      <Questao01Y alunos={alunos} />

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          <h2>Alunos com nota igual ou menor que 5:</h2>
          <ul>
            {alunosBaixoDesempenho.map((aluno) => (
              <li key={aluno.nome}>
                {aluno.nome} - {aluno.media}{" "}
                {/*apresenta lista com alunos e suas médias*/}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const Questao01Y = ({ alunos }) => {
  return null;
};

export default Questao01X;
