const Card = ({tittle}) => {
    const cardBtn = () => alert ("erick")
    const me = {
   name: "erick,",
  movie: "hulk",
  music: "POP"}
    return (

        <div onClick={cardBtn} className='card red'>
            <h1 >{tittle}</h1>
            <ul>
                <li>{me.name}</li>
                <li>Pelicula favorita: {me.movie}</li>
                <li>Musica Favorita: {me.music}</li>
            </ul>
        </div>

    )
}
export default Card;