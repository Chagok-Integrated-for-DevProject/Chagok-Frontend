import type { FC } from "react";

interface IArrowProps {
  width: number;
  color: string;
}

const ArrowSVG: FC<IArrowProps> = ({ width, color }) => {
  return (
    <svg
      width={`${width}`}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="grommet-icons:form-next">
        <path
          id="Vector"
          d="M27 13.5L18 22.5L9 13.5"
          stroke={`${color}`}
          strokeWidth="3"
        />
      </g>
    </svg>
  );
};

export default ArrowSVG;
