import React, { useState } from "react";

const Counter = ({ type }) => {
    const [count, setCount] = useState(1);

    const handleClick = () => {
        if (type === "incread") setCount(count + 1);
        else setCount(count - 1);
    };

    return (
        <button onClick={handleClick}>{count}</button>
    );
};

export default Counter;
