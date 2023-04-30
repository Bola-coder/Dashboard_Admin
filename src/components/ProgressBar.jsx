import { useState } from "react";

function ProgressBar({ width, color }) {
  const [progress, setProgress] = useState(width);

  const progressBarStyles = {
    width: "90%",
    height: "8px",
    backgroundColor: "#ddd",
    borderRadius: "10px",
    margin: "0 auto",
    // position: "relative",
  };

  const progressIndicatorStyles = {
    width: `${progress}%`,
    height: "100%",
    backgroundColor: `${color || "green"}`,
    borderRadius: "10px",
    transition: "width 0.5s ease-in-out",
  };

  return (
    <div className="progress-bar" style={progressBarStyles}>
      <div className="progress-indicator" style={progressIndicatorStyles}></div>
    </div>
  );
}

export default ProgressBar;
