import React, { useState, useEffect } from "react";
import axios from "axios";

const Cidades = () => {
  const [menorPopulacao, setMenorPopulacao] = useState(null) //variáveis  de estado e funções para atualização de valor
  const [maiorPopulacao, setMaiorPopulacao] = useState(null)

  useEffect(() => {
    axios //requisição a API
      .get(
        "https://restcountries.com/v3.1/region/europe?fields=capital,population"
      )
      .then((response) => {   //quando for bem sucesdida

        const cidades = response.data

        let menor = cidades[0]
        let maior = cidades[0]

        cidades.forEach((element) => {      //percorrendo o vetor
     
          if (element.population < menor.population) {  //procurando o menor e comparando, se for menor, substitui
            menor = element
          }
 
          if (element.population > maior.population) {   //procurando o menor e comparando, se for maior, substitui
            maior = element
          }
        });

        setMenorPopulacao(menor)
        setMaiorPopulacao(maior)
      })


      .catch((error) => {  //quando houver erro e retorno do erro
        console.log(error)
      })
  }, 
  
  [])

  return (
    <div>
      <h3>Menor População</h3>
      {menorPopulacao && (  //verifica se os valores estão disponíveis ou são válidos
        <>
          <p>Capital: {menorPopulacao.capital}</p>
          <p>População: {menorPopulacao.population}</p>
        </>
      )}
      <h3>Maior População</h3>
      {maiorPopulacao && (
        <>
          <p>Capital: {maiorPopulacao.capital}</p>
          <p>População: {maiorPopulacao.population}</p>
        </>
      )}
    </div>
  );
}

export default Cidades
