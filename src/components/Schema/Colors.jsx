import React from "react";

export default function Colors({ hex }) {
  return (
    <div style={{ backgroundColor: hex }} className='ColorPeg'>
      <div className="hex-value">{hex}</div>
    </div>
  );
}