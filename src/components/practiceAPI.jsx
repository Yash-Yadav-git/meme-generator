import React, { useState, useEffect } from "react";

function PracticeApi() {
  const [starWarData, setStarWarData] = useState({});
  const [count, setCount] = useState(1);

  useEffect(
    function () {
      fetch(`https://swapi.dev/api/people/${count}`)
        .then((res) => res.json())
        .then((data) => setStarWarData(data));
    },
    [count]
  );
  return (
    <div>
      <p>{`The count is ${count}`}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Generate next Character
      </button>
      <br />
      <br />
      <button
        onClick={() =>
          setCount((prevCount) => {
            if (prevCount === 1) {
              return prevCount;
            } else {
              return prevCount - 1;
            }
          })
        }
      >
        Generate Prev Character
      </button>
      <p>{JSON.stringify(starWarData, null, 2)}</p>
    </div>
  );
}

export default PracticeApi;
