const Dashboard = () => (
  <svg
    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 22 21"
  >
    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
  </svg>
);

const Users = () => (
  <svg
    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 18"
  >
    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
  </svg>
);

const Products = () => (
  <svg
    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 18 20"
  >
    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
  </svg>
);

const Loading = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    width="200"
    height="200"
    // style="shape-rendering: auto; display: block; background: rgb(255, 255, 255);"
    xlink="http://www.w3.org/1999/xlink"
  >
    <g>
      <circle
        stroke-width="2"
        stroke="#0099e5"
        fill="none"
        r="0"
        cy="50"
        cx="50"
      >
        <animate
          begin="0s"
          calcMode="spline"
          keySplines="0 0.2 0.8 1"
          keyTimes="0;1"
          values="0;40"
          dur="1.1764705882352942s"
          repeatCount="indefinite"
          attributeName="r"
        ></animate>
        <animate
          begin="0s"
          calcMode="spline"
          keySplines="0.2 0 0.8 1"
          keyTimes="0;1"
          values="1;0"
          dur="1.1764705882352942s"
          repeatCount="indefinite"
          attributeName="opacity"
        ></animate>
      </circle>
      <circle
        stroke-width="2"
        stroke="#0099e5"
        fill="none"
        r="0"
        cy="50"
        cx="50"
      >
        <animate
          begin="-0.5882352941176471s"
          calcMode="spline"
          keySplines="0 0.2 0.8 1"
          keyTimes="0;1"
          values="0;40"
          dur="1.1764705882352942s"
          repeatCount="indefinite"
          attributeName="r"
        ></animate>
        <animate
          begin="-0.5882352941176471s"
          calcMode="spline"
          keySplines="0.2 0 0.8 1"
          keyTimes="0;1"
          values="1;0"
          dur="1.1764705882352942s"
          repeatCount="indefinite"
          attributeName="opacity"
        ></animate>
      </circle>
      <g></g>
    </g>
  </svg>
);

const Orders = () => (
  <span className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
    <svg
      class="w-6 h-6 font-bold text-gray-500"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path
        stroke="currentColor"
        stroke-width="2"
        d="M48 8H44.8C44.3 6.3 42.8 5 41 5H23C21.2 5 19.7 6.3 19.2 8H16C13.8 8 12 9.8 12 12V52C12 54.2 13.8 56 16 56H48C50.2 56 52 54.2 52 52V12C52 9.8 50.2 8 48 8ZM23 7H41C41.6 7 42 7.4 42 8H22C22 7.4 22.4 7 23 7ZM48 54H16V12H19V14C19 14.6 19.4 15 20 15H44C44.6 15 45 14.6 45 14V12H48V54ZM26 22H34V24H26V22ZM26 30H34V32H26V30ZM26 38H34V40H26V38ZM20 22.2L22.8 25L28 19.8L26.6 18.4L22.8 22.2L21.4 20.8L20 22.2ZM20 30.2L22.8 33L28 27.8L26.6 26.4L22.8 30.2L21.4 28.8L20 30.2ZM20 38.2L22.8 41L28 35.8L26.6 34.4L22.8 38.2L21.4 36.8L20 38.2Z"
      />
    </svg>
  </span>
);

export { Dashboard, Users, Products, Loading, Orders };
