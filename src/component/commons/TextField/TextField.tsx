import { ITextField } from "../../../types/ITextField";
import React from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const TextField: React.FC<ITextField> = ({ name,errorMessage,label,onChange,type,value }) => {
  return (
    <div className="text-field">
      <div className="text-field_content">
      <label className="text-field_label">{label}</label>
      <input className="text-field_input" type={type} value={value} name={name} onChange={onChange}></input>
      </div>
      
      {errorMessage ? <ErrorMessage message={errorMessage} /> : null}
    </div>
  );
}

export default TextField;