import React from "react";
import './redes-img.css';

function Redes({ redes }){
    return(
        <div className="cont-componentes">
            <div className="cont-redes">
                <img src={require(`../../../assets/img-redes-${redes}.png`)}  alt={`img-perro-${redes}`} />
            </div>
        </div>
    );

}
export default Redes;