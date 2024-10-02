const IconActiveDot = ({ width = 30, height = 30, color = "#143dea" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="7.24138" cy="7.5" rx="7.24138" ry="7.5" fill={color} />
    </svg>
  );
};

export default IconActiveDot;
