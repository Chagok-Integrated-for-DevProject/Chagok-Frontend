import styled from "@emotion/styled";
import type { FC, MouseEvent } from "react";

interface ScrabButtonProps {
  isScrabbed?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ScrabButton: FC<ScrabButtonProps> = ({ isScrabbed, onClick }) => {
  return (
    <StyledScrabButton onClick={onClick}>
      {isScrabbed && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="49"
          height="50"
          viewBox="0 0 49 50"
          fill="none"
        >
          <g filter="url(#filter0_bd_429_2641)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.5 4C5.567 4 4 5.567 4 7.5V34.9845C4 38.0215 7.60291 39.6173 9.85196 37.5765L15.5271 32.4268L20.1515 27.9309C20.3455 27.7423 20.6545 27.7423 20.8485 27.9309L25.4729 32.4268L31.148 37.5765C33.3971 39.6173 37 38.0215 37 34.9845V7.5C37 5.567 35.433 4 33.5 4H7.5Z"
              fill="black"
            />
            <path
              d="M9.85196 37.5765L10.8599 38.6873L9.85196 37.5765ZM15.5271 32.4268L16.5351 33.5377L16.5542 33.5203L16.5727 33.5023L15.5271 32.4268ZM20.1515 27.9309L21.1971 29.0064V29.0064L20.1515 27.9309ZM20.8485 27.9309L19.8029 29.0064L19.8029 29.0064L20.8485 27.9309ZM25.4729 32.4268L24.4273 33.5023L24.4458 33.5203L24.4649 33.5377L25.4729 32.4268ZM31.148 37.5765L32.156 36.4656H32.156L31.148 37.5765ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5V2.5C4.73858 2.5 2.5 4.73858 2.5 7.5H5.5ZM5.5 34.9845V7.5H2.5V34.9845H5.5ZM8.84398 36.4656C7.5588 37.6318 5.5 36.7199 5.5 34.9845H2.5C2.5 39.323 7.64701 41.6028 10.8599 38.6873L8.84398 36.4656ZM14.5191 31.316L8.84398 36.4656L10.8599 38.6873L16.5351 33.5377L14.5191 31.316ZM19.1058 26.8554L14.4815 31.3513L16.5727 33.5023L21.1971 29.0064L19.1058 26.8554ZM21.8942 26.8554C21.1179 26.1008 19.8821 26.1007 19.1058 26.8554L21.1971 29.0064C20.809 29.3838 20.191 29.3838 19.8029 29.0064L21.8942 26.8554ZM26.5185 31.3513L21.8942 26.8554L19.8029 29.0064L24.4273 33.5023L26.5185 31.3513ZM32.156 36.4656L26.4809 31.316L24.4649 33.5377L30.1401 38.6873L32.156 36.4656ZM35.5 34.9845C35.5 36.7199 33.4412 37.6318 32.156 36.4656L30.14 38.6873C33.353 41.6028 38.5 39.3231 38.5 34.9845H35.5ZM35.5 7.5V34.9845H38.5V7.5H35.5ZM33.5 5.5C34.6046 5.5 35.5 6.39543 35.5 7.5H38.5C38.5 4.73858 36.2614 2.5 33.5 2.5V5.5ZM7.5 5.5H33.5V2.5H7.5V5.5Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_bd_429_2641"
              x="-1.5"
              y="-1.5"
              width="50"
              height="51.4944"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_429_2641"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="4" dy="4" />
              <feGaussianBlur stdDeviation="3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_backgroundBlur_429_2641"
                result="effect2_dropShadow_429_2641"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_429_2641"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      )}
      {!isScrabbed && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="49"
          height="50"
          viewBox="0 0 49 50"
          fill="none"
        >
          <g filter="url(#filter0_bd_429_2638)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.5 4C5.567 4 4 5.567 4 7.5V34.9845C4 38.0215 7.60291 39.6173 9.85196 37.5765L15.5271 32.4268L20.1515 27.9309C20.3455 27.7423 20.6545 27.7423 20.8485 27.9309L25.4729 32.4268L31.148 37.5765C33.3971 39.6173 37 38.0215 37 34.9845V7.5C37 5.567 35.433 4 33.5 4H7.5Z"
              fill="white"
            />
            <path
              d="M9.85196 37.5765L10.8599 38.6873L9.85196 37.5765ZM15.5271 32.4268L16.5351 33.5377L16.5542 33.5203L16.5727 33.5023L15.5271 32.4268ZM20.1515 27.9309L21.1971 29.0064V29.0064L20.1515 27.9309ZM20.8485 27.9309L19.8029 29.0064L19.8029 29.0064L20.8485 27.9309ZM25.4729 32.4268L24.4273 33.5023L24.4458 33.5203L24.4649 33.5377L25.4729 32.4268ZM31.148 37.5765L32.156 36.4656H32.156L31.148 37.5765ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5V2.5C4.73858 2.5 2.5 4.73858 2.5 7.5H5.5ZM5.5 34.9845V7.5H2.5V34.9845H5.5ZM8.84398 36.4656C7.5588 37.6318 5.5 36.7199 5.5 34.9845H2.5C2.5 39.323 7.64701 41.6028 10.8599 38.6873L8.84398 36.4656ZM14.5191 31.316L8.84398 36.4656L10.8599 38.6873L16.5351 33.5377L14.5191 31.316ZM19.1058 26.8554L14.4815 31.3513L16.5727 33.5023L21.1971 29.0064L19.1058 26.8554ZM21.8942 26.8554C21.1179 26.1008 19.8821 26.1007 19.1058 26.8554L21.1971 29.0064C20.809 29.3838 20.191 29.3838 19.8029 29.0064L21.8942 26.8554ZM26.5185 31.3513L21.8942 26.8554L19.8029 29.0064L24.4273 33.5023L26.5185 31.3513ZM32.156 36.4656L26.4809 31.316L24.4649 33.5377L30.1401 38.6873L32.156 36.4656ZM35.5 34.9845C35.5 36.7199 33.4412 37.6318 32.156 36.4656L30.14 38.6873C33.353 41.6028 38.5 39.3231 38.5 34.9845H35.5ZM35.5 7.5V34.9845H38.5V7.5H35.5ZM33.5 5.5C34.6046 5.5 35.5 6.39543 35.5 7.5H38.5C38.5 4.73858 36.2614 2.5 33.5 2.5V5.5ZM7.5 5.5H33.5V2.5H7.5V5.5Z"
              fill="black"
            />
          </g>
          <defs>
            <filter
              id="filter0_bd_429_2638"
              x="-1.5"
              y="-1.5"
              width="50"
              height="51.4944"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_429_2638"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="4" dy="4" />
              <feGaussianBlur stdDeviation="3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_backgroundBlur_429_2638"
                result="effect2_dropShadow_429_2638"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_429_2638"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      )}
    </StyledScrabButton>
  );
};

export default ScrabButton;

const StyledScrabButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 1rem;
`;
