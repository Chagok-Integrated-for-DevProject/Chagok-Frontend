import type { FC } from "react";

interface ILogoProps {
  color: string;
  width?: number;
  height?: number;
}

const LogoSVG: FC<ILogoProps> = ({ width, height, color }) => {
  return (
    <svg
      width={`${width ?? "94"}`}
      height={`${height ?? "29"}`}
      viewBox={`0 0 ${width ?? "94"} ${height ?? "29"}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5262 6.87089C13.5262 6.87089 5.00438 0.935307 2.49176 9.68533C-0.592591 20.4351 11.7742 19.8806 13.4477 15.6209"
        stroke={color}
        strokeWidth="2.69911"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M18.0904 2.9126L16.417 20.7169"
        stroke={color}
        strokeWidth="2.69911"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M17.3545 10.8947C17.3545 10.8947 19.7641 5.95533 24.3305 7.62878C28.8969 9.30223 24.1783 21.0213 24.1783 21.0213"
        stroke={color}
        strokeWidth="2.69911"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M30.418 9.76123C30.418 9.76123 32.3957 6.26221 35.745 6.26221C39.0944 6.26221 40.92 7.93565 41.8327 10.6765C42.7455 13.4148 41.8327 19.5026 44.8754 20.4154"
        stroke={color}
        strokeWidth="2.69911"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M41.5263 11.4349C41.5263 11.4349 30.7225 10.6742 30.8746 17.0662C31.0268 23.4582 40.8049 20.1947 42.6869 16.8797"
        stroke={color}
        strokeWidth="2.69911"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M58.4939 5.94824C58.4939 5.94824 55.3703 7.63887 52.5092 7.24872C49.6482 6.85858 45.6142 10.7625 47.1748 14.0137C48.7354 17.2673 55.8929 17.9176 56.4131 13.3634C56.9333 8.8093 54.2023 7.63887 54.2023 7.63887"
        stroke={color}
        strokeWidth="2.69911"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M51.4162 16.9136C51.4162 16.9136 48.3736 18.2828 49.7428 20.869"
        stroke={color}
        strokeWidth="2.69911"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M49.2868 23.3033C49.2868 23.3033 49.591 18.7369 56.8958 20.1085C63.7589 21.3943 59.7446 28.2697 53.5489 27.109C48.6782 26.1962 49.2892 23.3057 49.2892 23.3057L49.2868 23.3033Z"
        stroke={color}
        strokeWidth="2.69911"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M72.2639 9.45676C70.2396 8.48263 67.6779 9.11324 65.7198 10.2174C64.1028 11.1302 62.449 13.4122 63.4378 16.4573C65.4155 22.545 75.3065 22.0886 75.6108 16.4573C75.7801 13.3263 74.1508 10.3671 72.2639 9.45676Z"
        stroke={color}
        strokeWidth="2.69911"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M78.96 2L82.005 20.8692"
        stroke={color}
        strokeWidth="2.69911"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M89.0025 4.73828L80.8389 13.3828"
        stroke={color}
        strokeWidth="2.69911"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M83.5264 10.9785C83.5264 10.9785 90.0705 18.7397 91.7439 19.5003"
        stroke={color}
        strokeWidth="2.69911"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M67.4501 14.2688C67.6534 14.2688 67.8182 14.104 67.8182 13.9008C67.8182 13.6975 67.6534 13.5327 67.4501 13.5327C67.2468 13.5327 67.082 13.6975 67.082 13.9008C67.082 14.104 67.2468 14.2688 67.4501 14.2688Z"
        fill={color}
      />
      <path
        d="M70.3944 13.7781C70.5977 13.7781 70.7625 13.6133 70.7625 13.4101C70.7625 13.2068 70.5977 13.042 70.3944 13.042C70.1912 13.042 70.0264 13.2068 70.0264 13.4101C70.0264 13.6133 70.1912 13.7781 70.3944 13.7781Z"
        fill={color}
      />
      <path
        d="M67.3262 16.5655C67.3262 16.5655 68.7223 17.5911 70.4694 16.5655C72.2165 15.5398 72.0423 14.5142 72.0423 14.5142"
        stroke={color}
        strokeWidth="1.02566"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LogoSVG;
