const IconActiveStar = ({ width = 30, height = 30, color = "#143dea" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.9 19.1L12 16.5L7.1 19.1L8 13.7L4 9.8L9.5 9L11.9 4L14.3 9L19.8 9.8L16 13.7L16.9 19.1Z"
        fill={color}
      />
    </svg>
  );
};

export default IconActiveStar;
