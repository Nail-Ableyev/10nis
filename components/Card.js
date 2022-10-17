import React from "react"

function Card({name, wins, loses, prevChamp, nc}){

    return(
        <article>
            <div>
                <img className={prevChamp!=="x" && "champ" }src={`./img/${name}.jpg`} alt={name}/>
                {prevChamp!=="x" && <b>{prevChamp}</b>}
            </div>
            <section>
                <h3>{name}</h3>
                <p><span>{wins}</span> wins | <span>{loses}</span>  loses</p>
            </section>
        </article>
        )



}
export default Card