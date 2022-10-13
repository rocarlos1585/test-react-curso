
import React from 'react'

export const Input = ({name,type,placeholder}) => {
  return (
    <>
        <label id="label">
          {name}
        </label>
        <input id='input' type={type} placeholder={placeholder}/>
    </>
  );
};

