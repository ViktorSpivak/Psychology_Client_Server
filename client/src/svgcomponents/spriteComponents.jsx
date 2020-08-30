// import React from "react";
import React, { Component } from "react";

export class spriteComponents extends Component {
  paper = ({ isButton, color }) => {
    const circle = <circle fill="#e62649" cx="30" cy="30" r="30"></circle>;
    return (
      <svg aria-hidden="true" viewBox="0 0 60 60">
        <title>paper</title>
        <g fill="none" fillRule="evenodd">
          {isButton && circle}
          <path
            d="M39.704 38.826v-2.53h3.27l1.174-1.174v-2.53h1.789l1.174-1.173V28.58l-1.174-1.174h-1.048v-2.53l-1.174-1.173h-8.519l.434-.434v-2.096L34.456 20H22.359L16 26.36v7.28L22.36 40h16.17l1.174-1.174zm-16.73-.307l-5.493-5.493v-6.052l5.493-5.493h10.867l.307.308v.867L33.1 23.704h-5.989v1.481H43.1l.307.308v1.914h-11.11v1.482h13.025l.308.307v1.608l-.308.307H32.296v1.482h10.37v1.914l-.307.308H32.296v1.481h5.926v1.915l-.307.308h-14.94z"
            fill={color}
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    );
  };
  scissors = ({ isButton, color }) => {
    const circle = <circle fill="#e62649" cx="30" cy="30" r="30"></circle>;
    return (
      <svg aria-hidden="true" viewBox="0 0 60 60">
        <title>scissors</title>
        <g fill="none" fillRule="evenodd">
          {isButton && circle}
          <path
            d="M46 31.563l-6.104-2.674h5.297l1.177-1.174v-2.837l-1.174-1.174h-13.64v-2.53L30.38 20H22.36L16 26.36v7.28L22.36 40h10.614l1.111-1.111 1-6.004 8.37 3.215 1.541-.415 1.419-2.455L46 31.563zM44.037 34.4l-.481.13-9.63-3.704-1.211 7.322-.37.37h-9.37l-5.494-5.492v-6.052l5.493-5.493h6.793l.307.308v1.915H26.37v1.481h18.211l.308.308V27.1l-.308.307H35.26v1.063l9.482 4.167.1.37-.804 1.393z"
            fill={color}
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    );
  };
  stone = ({ isButton, color }) => {
    const circle = <circle fill="#e62649" cx="30" cy="30" r="30"></circle>;
    console.log(isButton, color);
    return (
      <svg aria-hidden="true" viewBox="0 0 60 60">
        <title>stone</title>
        <g fill="none" fillRule="evenodd">
          {isButton && circle}
          <path
            d="M37.048 23.704h-5.492v-2.53L30.38 20H22.36L16 26.36v7.28L22.36 40h12.096l1.13-1.13 1.48-9.918 1.156-.778v-3.296l-1.174-1.174zm-.307 3.677l-1.056.704-1.481 10.082-.352.352H22.974l-5.493-5.493v-6.052l5.493-5.493h6.793l.307.308v1.915h-2.963v1.481h9.322l.308.308v1.888z"
            fill={color}
            fillRule="nonzero"
          ></path>
        </g>
      </svg>
    );
  };
}

export default new spriteComponents();
