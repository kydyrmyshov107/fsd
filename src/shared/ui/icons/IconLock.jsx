const IconLock = ({ width = 30, height = 30, color = "#143dea" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.1111 9.55011H2.88889C1.84568 9.55011 1 10.4008 1 11.4501V18.1001C1 19.1495 1.84568 20.0001 2.88889 20.0001H16.1111C17.1543 20.0001 18 19.1495 18 18.1001V11.4501C18 10.4008 17.1543 9.55011 16.1111 9.55011Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.77783 9.55V5.75C4.77783 4.49022 5.27535 3.28204 6.16094 2.39124C7.04653 1.50044 8.24764 1 9.50005 1C10.7525 1 11.9536 1.50044 12.8392 2.39124C13.7248 3.28204 14.2223 4.49022 14.2223 5.75V9.55"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconLock;
