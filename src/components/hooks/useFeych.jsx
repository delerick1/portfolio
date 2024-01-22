import axios from 'axios';
import { useEffect, useState } from 'react';

const useFeych = (url, accessData) => {

    const [data, setData] = useState({});


    useEffect(() => {
        changeData();
    }, [])
    
    const changeData = () => {
        axios.get(url)
            .then(res => setData(accessData(res)))

    }
    return { data, changeData };
};

export default useFeych;