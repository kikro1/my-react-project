// // import Product from "./Product";
// // export default function App() {
// //   return (
// //     <div>
// //       <h1>Best selling</h1>

// //       <Product 
// //       name = "Tacos With Lime"
// //       imgUrl = "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
// //       price = {10.99}
// //       />
// //       <Product 
// //       name = "Fries and Burger"
// //       imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
// //       price = {14.29}
// //       />
// //     </div>
  
// //   );
// // }



// // App.jsx
// import { useState, useEffect } from 'react';
// // import favouriteBooks from "./components/BookList/FavouriteBooks.jsx";
// // import BookList from "./components/BookList/BookList.jsx";
// import "./index.css";
// import "react-icons";
// // import Button from "./components/Button/Button.jsx";
// // import NewButton from "./components/NewButton/NewButton.jsx";
// // import CustomButton from "./components/CustomButton/CustomButton.jsx";
// // import ClickCounter from "./components/CLickCounter/ClickCounter.jsx";
// // import MultipleClickCounter from "./components/MultipleClickCounter/MultipleClickCounter.jsx";
// import Modal from "./components/Modal/Modal"

// const App = () => {
//   // const [clicks, setClicks] = useState(0);
//   // const handleClick = () => {
//   //   setClicks(clicks + 1)
//   // }

//   // const [values, setValues] = useState({
//   //   x: 0,
//   //   y: 0,
//   // });

//   // const updateX = () => {

    
//   //   setValues({
//   //     ...values,
//   //     x: values.x + 1
//   //   });
//   // };

//   // const updateY =() => {
//   //   setValues({
//   //     ...values,
//   //     y: values.y + 1
//   //   })
//   // }
//   const [clicks, setClicks] = useState(0);
//   useEffect(() => {
//     console.log("you can see me only once!")
//   }, []);

//   return (
//     <>



//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times

//       </button>

//       {/* <h1 className="header">Books of the week</h1> */}
//       {/* <BookList books={favouriteBooks} />
//       <BookList books={favouriteBooks} />
//       <BookList books={favouriteBooks} />
//       <BookList books={favouriteBooks} />
//       <Button />
//       <button onClick={() => alert("I'm a button")}> click me! </button>
//       <NewButton />
//       <CustomButton message="lalal">
//         click lalalal to reveal message
//       </CustomButton> */}

//         {/* <ClickCounter /> */}

//         {/* <MultipleClickCounter value={clicks} onUpdate={handleClick}/>
//         <MultipleClickCounter value={clicks} onUpdate={handleClick}/> */}
// {/* 
//           <button onClick={updateX}>Update Y : {values.x}</button>
//           <button onClick={updateY}>Update X : {values.y}</button> */}





          
           
        

//     </>

    
//   );
// };

// export default App;














// // const App =() => {
// //   return (
// //     <div>
// //       <h2>heading</h2>
// //       <button>click</button>
// //     </div>
// //   );
// // }

// // export default App;



// import { useState, useEffect } from 'react';
// import Modal from "./components/Modal/Modal.jsx"

// const App = () => {

//   useEffect(() => {
//     console.log("effect");
//     return () => {
//       console.log("clean up");
//     };
//   });

//   const [isOpen, setisOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setisOpen(!isOpen)}>
//         {isOpen ? 'close' : 'Open'}

//       </button>
//       {isOpen && <Modal />}
//     </div>
//   );

// };

// export default App;

// import { useState, useEffect } from 'react';

// const App = () => {
//   const [first, setFirst] = useState(0);
//   const [second, setSecond] = useState(0);
//   const add = first + second;

//   useEffect(() => {
//     console.log("First updated: ", first);
//   }, [first]);

//   useEffect(() => {
//     console.log("Second updated: ", second);
//   }, [second]);

//   useEffect(() => {
//     console.log("Updated first and second: ", first + second);
//   }, [first, second]);

//   useEffect(() => {
//     document.title = `All clicks: ${add}`
//   })

//   useEffect(() => {
//     window.localStorage.setItem("saved-clicks", first + second);
//   }, [first, second]);

//   return (
//     <>
//     <button onClick={() => setFirst(first +1)}>
//       First: {first}
//     </button>
//     <button onClick={() => setSecond(second + 1)}>
//       Second: {second}
//     </button>

//     <button onClick={() => setFirst(0)}>
//       Reset first
//     </button>
//     <button onClick={() => setSecond(0)}>
//       Reset second
//     </button>
//     </>
//   );

// };

// export default App;

import {useState, useEffect } from 'react';

const App = () => {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem("saved-clicks");
    if (savedClicks !== null) {
      return Number(savedClicks);
    }
    return 0;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", clicks);
  }, [clicks]);

  useEffect(() => {
    document.title = `You clicked ${clicks} times`;

  });

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times!
      </button>
      <button onClick={() => setClicks(0)}>
        Reset
      </button>
    </div>
  )

};
export default App;