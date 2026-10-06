import React from "react";
import { useNavigate } from "react-router-dom";

function FlowButton({ to = "/home", children, className = "" }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button
      type="button"
      className={`flow-button ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default FlowButton;