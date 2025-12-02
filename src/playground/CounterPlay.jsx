import Counter from "../components/Counter";

const CounterPlay = () => {
    return (
        <>
            <p>난 마이너스</p>
            <Counter type="decread" />
            <p>난 플러스</p>
            <Counter type="incread" />
        </>
    );
};

export default CounterPlay;
