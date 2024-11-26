import { useState } from "react";

function App() {
  const [buttonPosition, setButtonPosition] = useState({
    x: "0px",
    y: "0px",
  });

  const [isYes, setIsYes] = useState(false);

  // Function to generate random position
  const getRandomPosition = () => {
    const randomX = Math.floor(Math.random() * 300) + "px"; // Random X position between 0 and 300px
    const randomY = Math.floor(Math.random() * 300) + "px"; // Random Y position between 0 and 300px
    return { x: randomX, y: randomY };
  };

  // Handle the 'No' button click
  const handleNoClick = () => {
    setButtonPosition(getRandomPosition());
  };

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        fontSize: "2rem",
      }}
    >
      {isYes ? (
        <div>
          <h2>Meet me tommorow.</h2>
        </div>
      ) : (
        <div
          style={{
            position: "relative",
          }}
        >
          <h2>Would you like to go on a date with me?</h2>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <button
              style={{
                fontSize: "2rem",
              }}
              onClick={() => setIsYes(true)}
            >
              Yes
            </button>
            <button
              style={{
                position: "relative",
                left: buttonPosition.x,
                top: buttonPosition.y,
                fontSize: "2rem",
              }}
              onMouseOver={handleNoClick}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
