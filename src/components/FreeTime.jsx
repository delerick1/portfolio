const FreeTime = ({tittle}) => {
    const cardBtn = () => alert ("free time")
    
    return (
        <div onClick={cardBtn} className='card yellow'>
        <h1>{tittle}</h1>
        <ul>
            <li>party</li>
            <li>gambeling</li>
            <li>gaming</li>
            <li>soccer</li>
        </ul>
    </div>
    );
};

export default FreeTime;