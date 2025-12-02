import { useEffect, useState } from 'react';
import axios from "axios";

const Counter = () => {
    const [count, setCount] = useState(1);
    // http://localhost:3001으로 요청하면서 테스트

    useEffect(() => {
        const getCount = async () => {
            const { data } = await axios.get(`${process.env.REACT_APP_BACK_API}/`);
            setCount(data.count);
        }
        getCount();
    }, [])

    const fetchIncrement = async () => {
        const { data } = await axios.post(`${process.env.REACT_APP_BACK_API}/increment`);
        setCount(data.count);
    }

    return (
        <div className="Counter">
            {count}
            <button onClick={fetchIncrement}>+</button>
        </div>
    );
}

export default Counter;