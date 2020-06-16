import React from "react";

export default function Colors({ hex }) {
  return (
   

<div className='ColorPeg' style={{ backgroundColor: hex }}x >
<div className='pContainer'>
    <p className='colorCode'>
    {hex}
    </p>
    </div>

</div>
  );
}