const Hobbies = ({tittle}) => {
    const cardBtn = () => alert ("hobbies")
    
    return (
        <div onClick={cardBtn} className='card blue'>
        <h1 >{tittle}</h1>
        <ul>
            <li>party</li>
            <li>gambeling</li>
            <li>gaming</li>
            <li>soccer</li>
        </ul>
    </div>
    );
};

export default Hobbies;