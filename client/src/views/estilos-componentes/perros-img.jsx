import React from "react";
import './perros-img.css';

function ImgInfoPerros({ imagen, parrafo }){
    return(
        <div className="cont-componentes">
            <div className="cont-perros">
                <p>{parrafo}</p>
                <img src={require(`../../../assets/img-perros-${imagen}.png`)}  alt={`img-perro-${imagen}`} />

            </div>
        </div>
    );

}
export default ImgInfoPerros;