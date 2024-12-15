const NewButton = () => {
    const handleClick = (vent) => {
        console.log(vent);
    }

    return (
        <>
            <button onClick={handleClick}>Fist btn</button>
            <button onClick={event => console.log(event)}> Second btn</button>

        </>
    );
}
export default NewButton;