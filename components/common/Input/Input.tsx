import styles from './Input.module.css';
import React, {useMemo} from "react";

export interface IInput {
  inputName: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, inputName: string) => void;
  placeholder?: string;
  style?: any;
}
const Input: React.FC<IInput> = ({ value, onChange, placeholder, style, inputName }) => {
  console.log("INPUT #", inputName)
  return (
    <input 
    value={value} 
    onChange={e => onChange(e, inputName)} 
    placeholder={placeholder} 
    style={style} 
    />
  )
};

export default React.memo(Input);