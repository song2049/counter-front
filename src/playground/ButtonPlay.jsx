import Button from "../components/Button";

const ButtonPlay = () => {
    return (
        <>
            <p>난 마이너스</p>
            <Button type="decread" />
            <p>난 플러스</p>
            <Button type="incread" />
        </>
    );
};

export default ButtonPlay;
