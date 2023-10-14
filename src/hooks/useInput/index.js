import { useState } from "react";

export const useInput = () => {
    const [value, setValue] = useState("");
  
    const onChange = (event) => {
      setValue(event.target.value);
    };
  
    return { value: value, onChange: onChange ,setValue :setValue};
  };