import React, { Component } from "react";
import style from "./wave.module.css";

const NUM_PARTICLES: number = 170;
const PARTICLE_SIZE: number = 1.5;
const SPEED: number = 20000;
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
let particles: TParticle[] = [];
export class Wave extends Component {
  randomNormal = (o: TParam): number => {
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
  rand = (low: number, high: number): number => {
    return Math.random() * (high - low) + low;
  };
  createParticle = (): TParticle => {
    const color = {
      r: 235,
      g: 127,
      b: 33,
      a: 191,

      // r: 235,
      // g: 226,
      // b: 255,
      // a: this.rand(0, 1),
    };
    return {
      x: -2,
      y: -2,
      diameter: Math.max(
        0,
        this.randomNormal({ mean: PARTICLE_SIZE, dev: PARTICLE_SIZE / 2 })
      ),
      duration: this.randomNormal({ mean: SPEED, dev: SPEED * 0.1 }),
      amplitude: this.randomNormal({ mean: 16, dev: 2 }),
      offsetY: this.randomNormal({ mean: 0, dev: 10 }),
      arc: Math.PI * 2,
      startTime: performance.now() - this.rand(0, SPEED),
      color:
        "rgba(" +
        color.r +
        ", " +
        color.g +
        ", " +
        color.b +
        ", " +
        color.a +
        ")",
    };
  };
  moveParticle = (particle: TParticle, time: number) => {
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
  drawParticle = (
    particle: TParticle,
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
  ) => {
    canvas = this.canvasRef.current!;
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
  };
  draw = (
    time: number,
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
  ) => {
    if (this.canvasRef.current) {
      particles.forEach((particle, index) => {
        particles[index] = this.moveParticle(particle, time);
      });
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        this.drawParticle(particle, canvas, ctx);
      });
      requestAnimationFrame((time) => this.draw(time, canvas, ctx));
    } else return;
  };
  initializeCanvas = (): [HTMLCanvasElement, CanvasRenderingContext2D] => {
    let canvas = this.canvasRef.current!;
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    let ctx = canvas.getContext("2d")!;
    window.addEventListener("resize", () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx = canvas.getContext("2d")!;
    });
    return [canvas, ctx];
  };
  startAnimation = () => {
    const [canvas, ctx] = this.initializeCanvas();
    for (let i = 0; i < NUM_PARTICLES; i++) {
      particles.push(this.createParticle());
    }
    requestAnimationFrame((time) => this.draw(time, canvas, ctx));
  };
  canvasRef = React.createRef<HTMLCanvasElement>();
  componentDidMount() {
    this.startAnimation();
  }

  render() {
    return <canvas ref={this.canvasRef} className={style.canvasArea} />;
  }
}

export default Wave;
