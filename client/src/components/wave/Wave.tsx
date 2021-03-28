import React, { useEffect } from "react";
import style from "./wave.module.css";

const NUM_PARTICLES: number = 170;
const PARTICLE_SIZE: number = 1.5;
const SPEED: number = 20000;
const color: string = "rgba(235,127,33,191)";
// color = "#d5ac5f";
// {
//   r: 235,
//   g: 127,
//   b: 33,
//   a: 191,

//   // r: 235,
//   // g: 226,
//   // b: 255,
//   // a: this.rand(0, 1),
// };
type TParam = {
  mean: number;
  dev: number;
  pool?: number[];
};
type TParticle = {
  x: number;
  y: number;
  diameter: number;
  duration: any;
  amplitude: any;
  offsetY: any;
  arc: number;
  startTime: number;
  color: string;
};
interface IProps {
  canvasWidth?: number;
  canvasHeight?: number;
}
export const Wave = ({ canvasWidth, canvasHeight }: IProps) => {
  const canvasRef = React.createRef<HTMLCanvasElement>();
  const particles: TParticle[] = [];
  const randomNormal = (o: TParam): number => {
    let r,
      a,
      n,
      e,
      l = o.mean,
      t = o.dev;
    do {
      a = 2 * Math.random() - 1;
      n = 2 * Math.random() - 1;
      r = a ** 2 + n ** 2;
    } while (r >= 1);
    e = a * Math.sqrt((-2 * Math.log(r)) / r);
    return t * e + l;
  };
  const rand = (low: number, high: number): number => {
    return Math.random() * (high - low) + low;
  };
  const createParticle = (): TParticle => {
    return {
      x: -2,
      y: -2,
      diameter: Math.max(
        0,
        randomNormal({ mean: PARTICLE_SIZE, dev: PARTICLE_SIZE / 2 })
      ),
      duration: randomNormal({ mean: SPEED, dev: SPEED * 0.1 }),
      amplitude: randomNormal({ mean: 16, dev: 2 }),
      offsetY: randomNormal({ mean: 0, dev: 10 }),
      arc: Math.PI * 2,
      startTime: performance.now() - rand(0, SPEED),
      color,
      // "rgba(" +
      // color.r +
      // ", " +
      // color.g +
      // ", " +
      // color.b +
      // ", " +
      // color.a +
      // ")",
    };
  };
  const moveParticle = (particle: TParticle, time: number) => {
    const progress =
      ((time - particle.startTime) % particle.duration) / particle.duration;
    return {
      ...particle,
      x: progress,
      y:
        Math.sin(progress * particle.arc * 1.2) * particle.amplitude +
        particle.offsetY,
    };
  };
  const drawParticle = (
    particle: TParticle,
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
  ) => {
    canvas = canvasRef.current!;
    const vh = canvas.height / 100;

    ctx.fillStyle = particle.color;
    ctx.beginPath();
    ctx.arc(
      particle.x * canvas.width,
      particle.y * vh + canvas.height / 2,
      particle.diameter * vh,
      0,
      Math.PI * 2
    );
    ctx.fill();
    // ctx.stroke();
    ctx.strokeStyle = "#d5ac5f";
  };
  const draw = (
    time: number,
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
  ) => {
    if (canvasRef.current) {
      particles.forEach((particle, index) => {
        particles[index] = moveParticle(particle, time);
      });
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        drawParticle(particle, canvas, ctx);
      });
      requestAnimationFrame((time) => draw(time, canvas, ctx));
    }
  };
  const initializeCanvas = (
    width: number,
    height: number
  ): [HTMLCanvasElement, CanvasRenderingContext2D] => {
    const canvas = canvasRef.current!;
    // width = width || canvas.offsetWidth;
    // console.log(height, width);

    canvas.width = width * window.devicePixelRatio;
    // console.log(window.devicePixelRatio);
    canvas.height = height * window.devicePixelRatio;

    let ctx = canvas.getContext("2d")!;
    window.addEventListener("resize", () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx = canvas.getContext("2d")!;
    });
    return [canvas, ctx];
  };
  const startAnimation = () => {
    canvasHeight || (canvasHeight = window.innerHeight);
    canvasWidth || (canvasWidth = window.innerWidth);
    const [canvas, ctx] = initializeCanvas(canvasWidth, canvasHeight);
    for (let i = 0; i < NUM_PARTICLES; i++) {
      particles.push(createParticle());
    }

    requestAnimationFrame((time) => draw(time, canvas, ctx));
  };
  useEffect(() => {
    startAnimation();
  });

  return (
    <div className={style.container}>
      <canvas ref={canvasRef} className={style.canvasArea} />
    </div>
  );
};
