

import { useState } from "react";
import React from 'react';
import "./Toggle.css";

const Toggle = () => {
    const [isStyled, setIsStyled] = useState(false);

    const handleStyleChange = () => {
      setIsStyled(prevState => !prevState);
    };
  
    // Apply the appropriate classes based on the isStyled state
    const elementClasses = `myStyledElement ${isStyled ? 'blue' : 'red'}`;
  
    return (
      <div>
        <div className={elementClasses}>Element with changing style</div>
        <button onClick={handleStyleChange}>
         change
        </button>
      </div>
    );
}

export default Toggle


