import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CharacterItem from "./CharacterItem";
import { Paginator } from "primereact/paginator";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

const Pokedex = () => {
  const pokeName = useSelector((state) => state.pokeName);
  const [pokeCharacters, setPokeCharacters] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState([]);
  const [loading, setLoading] = useState(true);

  /* --Paginator-- */

  const [page, setPage] = useState(1);
  const [pokemonPerPage, setPokemonPerPage] = useState(12);
  const lastIndex = page * pokemonPerPage;
  const firstIndex = lastIndex - pokemonPerPage;
  const pokemonPaginated = pokeCharacters.slice(firstIndex, lastIndex);
  const totalPage = Math.ceil(pokeCharacters.length / pokemonPerPage);

  const onBasicPageChange = (event) => {
    setPokemonPerPage(event.rows);
    setPage(event.page);
  };

  /*------------------ */

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/?offset=${
          page * pokemonPerPage
        }&limit=${pokemonPerPage}`
      )
      .then((res) => {
        setLoading(false);
        setPokeCharacters(res.data.results);
      })
      .catch((error) => console.log(error.response?.data));

    axios.get("https://pokeapi.co/api/v2/type/").then((res) => {
      setLoading(false);
      setPokemonType(res.data.results);
    });
  }, [page, pokemonPerPage]);

  const btnPokemonPerName = () => {
    navigate(`/pokedexdetail/${pokemonName.toLocaleLowerCase()}`);
  };

  const filterPokeType = (e) => {
    const urlType = e.target.value;
    axios.get(urlType).then((res) => setPokeCharacters(res.data.pokemon));
  };
  console.log(totalPage);
  return (
    <>
      {loading ? (
        <div className="loading_content">
          <div className="classic-6"></div>
          <div className="wobbling-10"></div>
        </div>
      ) : (
        <div className="container-pokedex">
          <div className="leave" onClick={() => navigate("/")}>
            <i className="fa-solid fa-right-from-bracket"></i>
          </div>
          <div className="pokeball-container">
            <div className="pokeball"></div>
          </div>
          <div className="characters-pokedex">
            <div className="img-pokeball"></div>
            <h1>POKEDEX</h1>
            <p>
              ¡Hola <b>{pokeName}</b>! <br /> Yá puedes empezar a Explorar tús
              Pokemones Favoritos.
            </p>
            <form>
              <h2>Pokemones Por Nombre o Tipo</h2>
              <div className="search-poke">
                <input
                  type="text"
                  value={pokemonName}
                  onChange={(e) => setPokemonName(e.target.value)}
                  placeholder="Busca tú pokemon aquí"
                />

                <button onClick={btnPokemonPerName} disabled={!pokemonName}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
              <select onChange={filterPokeType}>
                {pokemonType.map((type) => (
                  <option value={type.url} key={type.url}>
                    {type.name}
                  </option>
                ))}
              </select>
            </form>
            <ul className="poke-card">
              {pokeCharacters?.map((pokemon) => (
                <li key={pokemon.url ? pokemon.url : pokemon.pokemon.url}>
                  <CharacterItem
                    url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                  />
                </li>
              ))}
            </ul>
            <Paginator
              first={1}
              rows={pokemonPerPage}
              totalRecords={500}
              rowsPerPageOptions={[12, 24, 36]}
              onPageChange={onBasicPageChange}
            ></Paginator>
          </div>
        </div>
      )}
    </>
  );
};

export default Pokedex;
