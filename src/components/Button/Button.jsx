import style from "./Button.module.css";

const Button = () => {
  const handleClick = () => {
    alert("Sofia pickme");
  };

  return (
    // <div className={style.wrapper}>
    //   <button onClick={handleClick}>{children}</button>
    // </div>
    <div className={style.wrapper}>
            <main>
    <button  onClick={handleClick}>
        <span></span>
        <span>Click me!</span>
    </button>
    </main>
    <button onClick={() => alert('some text')}></button>
    {/* <button onClick={alert('new text')}></button> */}


</div>


  );
};

export default Button;

