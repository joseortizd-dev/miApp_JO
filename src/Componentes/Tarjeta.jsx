import {useState} from 'react';
import './Tarjeta.css';

function Tarjeta() {
    const [modoEstudio, setModoEstudio] = useState(true);
    
    const cambiarModo = () => {
        setModoEstudio(!modoEstudio);
    };

    const claseModo = modoEstudio ? 'modo-estudio' : 'modo-descanso';

    const imageActual = modoEstudio ? "https://www.solvetic.com/uploads/monthly_10_2014/tutorials-2308-0-95707500-1413507090.jpg"
    : "https://static.vecteezy.com/system/resources/previews/006/430/508/non_2x/game-console-with-website-coding-flat-icon-of-game-development-vector.jpg";
    
    const tituloActual = modoEstudio ? "Modo Estudio" : "Modo Descanso";
    const textoActual = modoEstudio ? "En este momento me encuentro aplicando lo aprendido en clases de Programación Front End." 
    : "Es hora de tomar un pequeño descanso, ha sido mucho código por ahora.";

    return (
        <article className={`contenedor-tarjeta ${claseModo}`}>
            <h2>{tituloActual}</h2>

            <figure> 
                <img 
                src={imageActual}
                alt="Imagen de ejemplo"
                className="imagen-tarjeta"
                />
                </figure>

            <p className="texto-tarjeta">{textoActual}</p>
            <button onClick={cambiarModo} className="boton-accion">
                {modoEstudio ? "Cambiar a modo descanso" : "Cambiar a modo estudio"}
            </button>
        </article>
    );
}
export default Tarjeta;