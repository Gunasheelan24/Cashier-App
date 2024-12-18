import React, { useState } from 'react'

function PageOne() {
  const [isShow, setIsShow] = useState(false);

//   const isbtn = document.getElementById("btn");
//   isbtn.addEventListener('mouseover', () => {
//       console.log("Clicked")
//     })

//   const handleClick = ;
  return (
    <div>
      <h1>PageOne</h1>
      <button style={{
        backgroundColor: 'black',
        color: 'white',
        padding: "5px",
        border: "none",
        borderRadius: "5px",
      }}  id='btn'
      
    //   onClick={() => {console.log("Welcome Bro!!!!")}}
    //   onMouseOver={() => console.log("Red Color")}
      onMouseLeave={() => console.log("Mouse Leaved")}

    >Click Me</button>
      {isShow ? <h1>Hey.......</h1> : null}
    </div>
  )
}

export default PageOne;