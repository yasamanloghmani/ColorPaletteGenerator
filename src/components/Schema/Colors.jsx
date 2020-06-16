import React from "react";


export default function Colors({ hex }) {
  return (
    <div className='ColorPeg' style={{ backgroundColor: hex }}>
      <div className='pContainerRotat'>
        <p className='rotatedp'>
        {hex}
        </p>
      </div>

    </div>
  );
}