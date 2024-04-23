import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import pikachuMp3 from '../assets/sound/pikachu.mp3'
import { useEffect } from 'react';

const ProtectedRoutes = () => {

    
 useEffect(()=> {
    const audioPikachu = new Audio(pikachuMp3) 
    audioPikachu.play();
   }, [])

    const pokeNames = useSelector(state => state.pokeName)
		// Aquí va la condición. Puede ser una condición de cualquier tipo. Lo que 
		// Importa es que valide si el usuario está loggeado o no
    if(pokeNames){
        return <Outlet />
    } else { 
        return <Navigate to='/' />      
    }                     // Aquí le debemos decir la ruta a la que queremos llevar
};                        // al usuario si no está autenticado

export default ProtectedRoutes;