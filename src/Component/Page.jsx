import React, { useState } from 'react';

const Page = () => {
  // let userId = 120;
  const [useStateData, setUseStateData] = useState(100);

  function handleClick(newState) {
    setUseStateData(newState);
  }


  return (
    <div>
       <h1>{useStateData}</h1>
       <button onClick={() => handleClick(500)}>  
         Change UserId
       </button>

       <input type="text" onChange={(event) => {
        setUseStateData(event.target.value);
        console.log(useStateData, "CurrentState:::::");
       }} />
    </div>
  )
}

export default Page;