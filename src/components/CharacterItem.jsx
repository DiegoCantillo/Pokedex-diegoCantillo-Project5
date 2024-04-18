import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { colorByType } from '../utils/colorType';

const CharacterItem = ({url}) => {

    const [ charactersPokemon, setCharactersPokemon ] = useState({})

    useEffect(()=> {
        axios.get(url)
            .then(res => setCharactersPokemon(res.data))
            .catch(error => console.log(error.response.data))
    }, [])

    


    let type = charactersPokemon.types?.[0].type.name;

    const colorCard = colorByType(type);
    const colorDark = colorCard === '#000'? 'white' : '#000';





    return (
            <Link to={`/pokedexdetail/${charactersPokemon.id}`} className='link'>
                <div className='card' style={{background: colorCard}}>
                        <h2>{charactersPokemon.name?.toUpperCase()}</h2>
                        <img src={charactersPokemon.sprites?.other.dream_world.front_default} alt="" />
                    <div className="container-info"  style={{color: colorDark}}>
                        <div className="info-card">
                            <p><b>Tipo:</b> {charactersPokemon.types?.[0].type.name}.</p>
                            <p><b>Peso:</b> {charactersPokemon.weight}.</p> 
                        </div>
                        <div className="info-card">
                            <p><b>height:</b> {charactersPokemon.height}.</p>
                            <p><b>height:</b> {charactersPokemon.height}.</p>
                        </div> 
                    </div>
                    <div className="container-img-leter"></div>
                </div>
            </Link>
        
        
    );
};

export default CharacterItem;