import React, { FunctionComponent } from "react";

export const Massage: FunctionComponent<any> = ({ color }) => {
  color = color || "#eb7f21";
  return (
    <svg aria-hidden="true" width="90" height="90">
      <title>massage</title>
      {/* <g fill="none" fillRule="evenodd"> */}
      <g
        transform="
        translate(0.000000,90.000000) 
        scale(0.0400000,-0.0400000)
        "
        fill="#000000"
        stroke="none"
      >
        <circle fill="#ffffff" cx="1135" cy="1125" r="975"></circle>
        <path
          d="M1040 2155 c-8 -2 -49 -9 -90 -15 -350 -56 -666 -319 -789 -656 -78
-214 -84 -467 -15 -679 118 -362 431 -634 804 -700 347 -61 687 49 931 302
127 131 203 261 255 438 35 122 45 337 19 470 -74 395 -393 728 -781 815 -80
18 -297 35 -334 25z m265 -69 c381 -67 682 -346 782 -725 22 -80 26 -118 26
-231 0 -188 -31 -315 -113 -467 -218 -404 -686 -604 -1129 -482 -308 84 -573
337 -669 639 -39 125 -47 173 -45 310 0 110 5 153 26 231 131 500 617 814
1122 725z"
          fill={color}
          fillRule="nonzero"
        />
        <path
          d="M661 1484 c-47 -39 -41 -63 27 -105 31 -20 140 -89 241 -154 102 -64
190 -119 197 -122 7 -3 126 67 263 154 274 173 279 178 220 227 l-31 26 -443
0 -443 0 -31 -26z"
          fill={color}
          fillRule="nonzero"
        />
        <path
          d="M630 1125 l0 -206 23 13 c60 33 296 184 297 190 0 3 -15 15 -32 26
-18 10 -90 56 -160 100 l-128 82 0 -205z"
          fill={color}
          fillRule="nonzero"
        />
        <path
          d="M1579 1291 c-30 -20 -101 -65 -157 -100 -91 -57 -118 -81 -94 -81 4
0 74 -43 156 -95 82 -53 151 -94 153 -92 2 2 2 94 1 204 l-3 199 -56 -35z"
          fill={color}
          fillRule="nonzero"
        />
        <path
          d="M824 952 c-204 -128 -216 -141 -172 -185 33 -33 74 -36 534 -33 351
2 394 4 417 19 32 21 45 63 26 81 -27 26 -371 236 -385 236 -8 0 -32 -11 -54
-25 -22 -14 -47 -25 -55 -25 -8 0 -33 11 -55 25 -22 14 -46 25 -53 25 -7 0
-99 -53 -203 -118z"
          fill={color}
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};
