import { useNavigate } from "react-router-dom";

function PixelButton({
  children,
  to,
  onClick,
  className = ""
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }

    if (to) {
      navigate(to);
    }
  };

  return (
    <button
      className={`pixel-button ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default PixelButton;