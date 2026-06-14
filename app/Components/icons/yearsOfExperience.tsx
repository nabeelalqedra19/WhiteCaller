export default function YearsOfExperience({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      width="122"
      height="122"
      viewBox="0 0 122 122"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1_3199)">
        <circle cx="61" cy="61" r="36" fill="currentColor" />
      </g>
      <path
        d="M75.7812 51.5938H46.2188C45.4766 51.5938 44.875 52.1954 44.875 52.9375V74.4375C44.875 75.1796 45.4766 75.7812 46.2188 75.7812H75.7812C76.5234 75.7812 77.125 75.1796 77.125 74.4375V52.9375C77.125 52.1954 76.5234 51.5938 75.7812 51.5938Z"
        stroke="#6B77E5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M67.7188 75.7812V48.9062C67.7188 48.1935 67.4356 47.5099 66.9316 47.0059C66.4276 46.5019 65.744 46.2188 65.0312 46.2188H56.9688C56.256 46.2188 55.5724 46.5019 55.0684 47.0059C54.5644 47.5099 54.2812 48.1935 54.2812 48.9062V75.7812"
        stroke="#6B77E5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_d_1_3199"
          x="0"
          y="0"
          width="122"
          height="122"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="11"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_1_3199"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="7" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.945833 0 0 0 0 0.945833 0 0 0 0 0.945833 0 0 0 0.44 0"
          />
          <feBlend
            mode="multiply"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_3199"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_3199"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
