import React from "react";
import styled from "styled-components";

const Button = ({ text, handleClick, type }) => {
  return (
    <>
      <div className="custom-btn">
        <CustomBtn type={type} onClick={handleClick}>
          {text}
        </CustomBtn>
      </div>
    </>
  );
};

const CustomBtn = styled.button`
  display: inline-block;
  padding: 12px 28px;
  border-radius: 30px;
  background-color: var(--blue);
  color: var(--white);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "DM Sans", Sans-serif;
  font-weight: 700;
  fot-size: 16px;

  &:hover {
    background-color: var(--dark-blue);
  }
`;

export default Button;
