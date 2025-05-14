import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const colorList = [
  { name: "Red", value: "#e74c3c" },
  { name: "Blue", value: "#3498db" },
  { name: "Green", value: "#2ecc71" },
  { name: "Yellow", value: "#f1c40f" },
  { name: "Purple", value: "#9b59b6" },
  { name: "Orange", value: "#e67e22" },
  { name: "Pink", value: "#ff69b4" },
];

const App = () => {
  const [bgColor, setBgColor] = useState(() => {
    return localStorage.getItem("bgColor") || "#ffffff";
  });

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    localStorage.setItem("Color", bgColor);
  }, [bgColor]);

  return (
    <>
      <div className="container">
        <h2 className="text-center">BG Changer</h2>
        <div className="d-flex justify-content-center gap-3">
          {colorList.map((color, index) => (
            <button
              className="btn"
              key={index}
              style={{
                backgroundColor: color.value,
                minWidth: "100px",
                fontWeight: "600",
                color: "white",
              }}
              onClick={() => setBgColor(color.value)}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
export default App;
