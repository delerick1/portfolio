const Cards = ({title, item1, item2, item3, bg}) => {

    return (

        <div className={`card ${bg}`}>
            <h1 >{title}</h1>
            <ul>
                <li>{item1}</li>
                <li>{item2}</li>
                <li>{item3}</li>
            </ul>
        </div>

    )
}
export default Cards;