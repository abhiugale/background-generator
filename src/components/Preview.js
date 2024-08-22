import React from "react";

function Preview({ colors, gradientType }) {
  const gradient = `${gradientType}-gradient(${colors.join(", ")})`;
  const style = {
    background: gradient,
    width: "50%",
    height: "500px",
    border: "1px solid #000",
  };

  return (
    <div className="previewContainer">
      <div className="preview" style={style}></div>
    </div>
  );
}

export default Preview;
