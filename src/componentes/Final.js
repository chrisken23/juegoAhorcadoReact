import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import Contexto from "../contexto/Contexto";
import '../index.css';
const Final = () => {
    const {laCorrecta}= useContext(Contexto);
    const navegacion = useNavigate();
    return (
        <div className="contenedor">
            <h1 className="titulo">Vaya, respuesta incorrecta</h1>
            <h2 className="titulo">La respuesta correcta era:<strong>{laCorrecta}</strong> </h2>
            <div className="">
                <img src={require(`../assets/el_ahorcado6.png`)} alt=""/>
            </div>
        <button className="botonVolver" onClick={()=> navegacion('/juego/')}>Volver a jugar</button>
        </div>
    )
}

export default Final
