import React from "react";
import styled from "@emotion/styled";

function Button({ text, onClick }) {
  const Styled = styled.div`
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
    :hover {
      border-color: #646cff;
    }
    :focus,
    :focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
  `;
  return (
    <Styled onClick={onClick} role="presentation" className="button">
      {text}
    </Styled>
  );
}

export default Button;
