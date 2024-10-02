const IconMenu = ({ width = 30, height = 30, color = "#143dea" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 5H20V8H4V5Z" fill={color} />
      <path d="M4 10H20V13H4V10Z" fill={color} />
      <path d="M4 15H20V18H4V15Z" fill={color} />
    </svg>
  );
};

export default IconMenu;
