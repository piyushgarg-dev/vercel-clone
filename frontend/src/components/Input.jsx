import styled from "@emotion/styled";
import { useMemo } from "react";

function Input({ onChange, value, placeholder }) {
  const Styled = useMemo(
    () => styled.input`
      border-radius: 8px;
      border: 1px solid #ccc;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      outline: none;
      width: 300px;
    `,
    []
  );

  return (
    <Styled
      type="text"
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
}

export default Input;
