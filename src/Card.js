import React from "react"

function Card({name, wins, loses, champ}){

    return(
        <article>
            <div>
                <img className={champ && "champ" }src={`${process.env.PUBLIC_URL}/img/${name}.jpg`} alt={name}/>
                {champ && <b>{champ}</b>}
            </div>
            <section>
                <h3>{name}</h3>
                <p><span>{wins}</span> wins | <span>{loses}</span>  loses</p>
            </section>
        </article>
        )



}
export default Card