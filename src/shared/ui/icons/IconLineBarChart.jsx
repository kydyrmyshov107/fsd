const IconLineBarChart = ({ width = 30, height = 30, color = "#143dea" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 14.93H12V19.93H9V14.93Z" fill={color} />
      <path d="M5 17.93H8V19.93H5V17.93Z" fill={color} />
      <path d="M17 15.93H20V19.93H17V15.93Z" fill={color} />
      <path d="M13 12.93H16V19.93H13V12.93Z" fill={color} />
      <path
        d="M20 4L14.32 8.97L8.85 7.27L4 11.03V12.93L9.15 8.93L14.68 10.65L20 5.99V4Z"
        fill={color}
      />
    </svg>
  );
};

export default IconLineBarChart;
