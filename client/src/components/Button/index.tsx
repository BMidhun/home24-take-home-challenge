import React, { ReactNode } from "react";
import "./index.css";

type ButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

type ButtonProps = {
  children: ReactNode;
  onClick: ButtonClick;
};

function Button({ children, onClick }: ButtonProps) {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
