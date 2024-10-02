const IconDefaultStar = ({ width = 30, height = 30, color = "#143dea" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.8 9.8L14.3 9L11.9 4L9.5 9L4 9.8L7.9 13.6L7 19L11.9 16.5L16.8 19.1L15.9 13.6L19.8 9.8ZM11.9 15.4L8.3 17.3L9 13.3L6.1 10.5L10.1 9.9L11.9 6.3L13.7 9.9L17.7 10.5L14.8 13.3L15.5 17.3L11.9 15.4Z"
        fill={color}
      />
    </svg>
  );
};

export default IconDefaultStar;
