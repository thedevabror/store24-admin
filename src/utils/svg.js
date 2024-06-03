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
        strokeWidth="2"
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
        strokeWidth="2"
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
      className="w-6 h-6 font-bold text-gray-500"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path
        stroke="currentColor"
        strokeWidth="2"
        d="M48 8H44.8C44.3 6.3 42.8 5 41 5H23C21.2 5 19.7 6.3 19.2 8H16C13.8 8 12 9.8 12 12V52C12 54.2 13.8 56 16 56H48C50.2 56 52 54.2 52 52V12C52 9.8 50.2 8 48 8ZM23 7H41C41.6 7 42 7.4 42 8H22C22 7.4 22.4 7 23 7ZM48 54H16V12H19V14C19 14.6 19.4 15 20 15H44C44.6 15 45 14.6 45 14V12H48V54ZM26 22H34V24H26V22ZM26 30H34V32H26V30ZM26 38H34V40H26V38ZM20 22.2L22.8 25L28 19.8L26.6 18.4L22.8 22.2L21.4 20.8L20 22.2ZM20 30.2L22.8 33L28 27.8L26.6 26.4L22.8 30.2L21.4 28.8L20 30.2ZM20 38.2L22.8 41L28 35.8L26.6 34.4L22.8 38.2L21.4 36.8L20 38.2Z"
      />
    </svg>
  </span>
);

const Categories = () => (
  <svg
    className="flex-shrink-0 w-8 h-8 font-bold text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    xmlns="http://www.w3.org/2000/svg"
    xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 40 40"
    fill="currentColor"
  >
    <g>
      <path
        d="M20,21.569c-0.095,0-0.189-0.021-0.282-0.062L5.434,15.115C5.165,14.995,4.994,14.72,5,14.413
		c0.006-0.303,0.191-0.578,0.46-0.683l14.286-5.681C19.828,8.017,19.913,8,20,8c0.086,0,0.172,0.017,0.254,0.049l14.285,5.679
		c0.275,0.11,0.455,0.378,0.461,0.683c0.008,0.308-0.163,0.584-0.434,0.704L20.281,21.51C20.192,21.549,20.096,21.569,20,21.569
		L20,21.569z M7.626,14.468l12.339,5.522l12.409-5.522L20,9.549L7.626,14.468z"
      ></path>
      <path
        d="M5.434,20.49c-0.361-0.163-0.53-0.604-0.376-0.983c0.113-0.275,0.372-0.454,0.659-0.454c0.097,0,0.191,0.021,0.282,0.062
		l13.967,6.249l14.037-6.249c0.092-0.042,0.186-0.062,0.283-0.062c0.286,0,0.544,0.177,0.656,0.454
		c0.155,0.379-0.014,0.82-0.376,0.983L20,27.008L5.434,20.49z"
      ></path>
      <path
        d="M5.434,25.48c-0.362-0.164-0.531-0.604-0.376-0.981c0.113-0.275,0.372-0.454,0.659-0.454c0.097,0,0.191,0.021,0.282,0.061
		l13.967,6.25l14.037-6.25c0.09-0.039,0.186-0.061,0.283-0.061c0.286,0,0.544,0.179,0.656,0.454
		c0.155,0.378-0.014,0.819-0.375,0.981L20,32L5.434,25.48z"
      ></path>
    </g>
  </svg>
);

const Brand = () => (
  <svg
    className="flex-shrink-0 w-8 h-8 font-bold text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    xmlns="http://www.w3.org/2000/svg"
    xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 64 64"
    fill="currentColor"
  >
    <path
      d="M50 1.5c-7.8 0-14.8 2.3-21.2 6.2C24.6 4.4 18.1 3.5 11.7 3.5 6 3.5 1 6 1 13c0 5.2 3.2 9.5 7.5 12.8-1.4 6.5-1.2 12.8.5 18.8C5.4 48.1 1 52.6 1 57c0 7 5 9.5 10.7 9.5 6.5 0 12.6-1.1 18.8-3.7C33.5 70.7 41 74.5 50 74.5c7.8 0 14.8-2.3 21.2-6.2 3.2 1.8 9.7 2.7 16.1 2.7 5.7 0 10.7-2.5 10.7-9.5 0-5.2-3.2-9.5-7.5-12.8 1.4-6.5 1.2-12.8-.5-18.8C94.6 36.9 99 32.4 99 27c0-7-5-9.5-10.7-9.5-6.5 0-12.6 1.1-18.8 3.7C66.5 3.3 59 1.5 50 1.5z"
      fill="#000"
    />
    <path
      d="M50 20l5.6 16.7H72l-13.2 9.6 5 16.7L50 53.4l-13.8 9.6 5-16.7L28 36.7h16.4L50 20z"
      fill="#FFF"
    />
    <path
      d="M20 70c-5.5 3.5-10 4-15 2.5-2.5-1-5-2.5-7.5-4.5 1 5.5 2.5 10 4.5 15 2 5 4.5 9 7.5 13s6 7 10 9.5 8.5 4 13 5 9 1 13-1c5.5-2.5 10-7 14-12 3-4 5.5-9 7-14s1.5-10-1-14c-2-5-5-9-9-13-4-4-9-6.5-14-7-5-.5-10-.5-15 1-5 1.5-9.5 5-14 8z"
      fill="#000"
    />
    <path
      d="M80 70c5.5 3.5 10 4 15 2.5 2.5-1 5-2.5 7.5-4.5-1 5.5-2.5 10-4.5 15-2 5-4.5 9-7.5 13s-6 7-10 9.5-8.5 4-13 5-9 1-13-1c-5.5-2.5-10-7-14-12-3-4-5.5-9-7-14s-1.5-10 1-14c2-5 5-9 9-13 4-4 9-6.5 14-7 5-.5 10-.5 15 1 5 1.5 9.5 5 14 8z"
      fill="#000"
    />
  </svg>
);

export { Dashboard, Users, Products, Loading, Orders, Categories, Brand };
