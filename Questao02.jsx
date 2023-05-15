import axios from "axios"
import { useEffect, useState } from "react"

const Pokemon = () => { //criando variáveis de estado
  
  const [id, setId] = useState(1); //baseado na atividade de sala, coloquei id tb
  const [nome, setNome] = useState("")
  const [imagem1, setImagem1] = useState("")
  const [imagem2, setImagem2] = useState("")
  const [flag, setFlag] = useState(false); //boolean para alterar imagem

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`) //consumo da api
      .then((response) => {
        setNome(response.data.name)
        setImagem1(response.data.sprites.front_default)
        setImagem2(response.data.sprites.back_default)
      })
      .catch((error) => console.log(error));
  }, [id])

  const VirarPokemon = () => {
    setFlag(!flag); //função para funcionar a flag(virar pokemon)
  };

  return (
    <div>
      <h3>Nome: {nome}</h3>
      <h3>ID: {id}</h3>
      <tbody>
        <tr>
          <td>
            <img
              src={flag ? imagem1 : imagem2} // flag true, imagem de frente. flag false, image de costas
              style={{ width: "400px" }}
              alt={nome}
            />
          </td>
        </tr>
      </tbody>
      <button onClick={VirarPokemon}> Virar Pokemon</button>
      <hr />
      <button onClick={() => setId(id + 1)}> Aumentar ID</button>{" "}       {/* só pra mudar os pokemons*/}
      <button onClick={() => setId(id - 1)}> Diminuir ID</button>
    </div>
  );
};

export default Pokemon;
