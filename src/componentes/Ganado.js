import { useNavigate } from "react-router-dom"
import '../index.css';

const Ganado = () => {
    const navegacion = useNavigate();
    return (
        <div className="contenedor">
            <h1 className="titulo">Muy bien, has ganado, y continuas manteniendo tu cabeza sobre los hombro jajajajaj</h1>
            <div className="">
                <img src={require(`../assets/el_ahorcado1.png`)} alt=""/>
            </div>
        <button className="botonVolver" onClick={()=> navegacion('/juego/')}>Volver a jugar</button>
        </div>
    )
}

export default Ganado
