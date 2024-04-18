import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slice/pokeName.slice';
import fondopoke from '../assets/pokeImg.png'


const InputName = () => {

    const [inputName, setInputName] = useState("");
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const searchName = () =>{
        dispatch(changeName(inputName))
        navigate('/pokedex')
    }

    return (
        <div className='welcome-page'>
            <div className="containImg">
                <img  src={fondopoke} alt="" />
            </div>
            <section className='login-page'>
                <h1>¡Bienvenido a Pokedex! Escribe tú nombre para iniciar tú PokeAventura 🕵️‍♂️.</h1>
                <div className="container-input_button">
                    <input  type="text"
                            value={inputName}
                            onChange={(e)=> setInputName(e.target.value)}
                            placeholder='Escribe tú nombre Aquí'
                    />
                    <button onClick={searchName}>Listo 🔎</button>
                    </div>
            </section>
        </div>
    );
};

export default InputName;