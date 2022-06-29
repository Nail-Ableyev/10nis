import React from "react"

function Card({name, wins, loses}){

    return(
        <article>
                <img src={`${process.env.PUBLIC_URL}/img/${name}.jpg`}/>
            <section>
                <h3>{name}</h3>
                <p><span>{wins}</span> wins | <span>{loses}</span>  loses</p>
            </section>
        </article>
        )



}
export default Card