import React, { useState, useEffect } from "react";
// import { CSSTransition } from "react-transition-group";
// import { Logo } from "../logo/Logo";
// import { Logo } from "../../svgcomponents/Logo";
import style from "./specialization.module.css";

export const Specialization = () => {
  return (
    <div className={style.container}>
      <header>
        <a href="#1" className={style.link}>
          Page1
        </a>
        <a href="#2" className={style.link}>
          Page2
        </a>
        <a href="#3" className={style.link}>
          Page3
        </a>
      </header>
      <section id="1">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro minima
          impedit itaque nihil vero sapiente, quos blanditiis temporibus
          expedita aliquid quidem sed necessitatibus, adipisci sequi quod quasi
          ea nobis dolor voluptas, nemo delectus rem error aliquam! Cupiditate
          dolorem reprehenderit suscipit excepturi accusamus laborum dignissimos
          culpa deserunt, eius officiis sunt aspernatur.
        </p>
      </section>
      <section id="2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        eaque reiciendis, cum autem sequi repellendus. Voluptatibus harum
        sapiente, dicta neque laborum enim. Consequuntur incidunt sed ullam
        maiores. Aspernatur necessitatibus laboriosam, quas architecto harum
        ipsum, iste omnis consequatur error ratione tenetur, nostrum dolore vel
        dolorem nisi quod ex numquam! Officia, dignissimos.
      </section>
      <section id="3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        asperiores temporibus consectetur quod dolorem inventore optio iusto
        mollitia maxime id minima molestias, sed similique aperiam magnam. Quae
        eveniet, id eum quo deserunt, illum pariatur quas placeat ea soluta
        voluptates ratione. Sequi necessitatibus eveniet magni explicabo vero
        officiis doloribus nulla voluptate harum ullam, libero qui earum aut
        obcaecati eos porro, hic animi aperiam labore praesentium repudiandae.
        Incidunt quisquam, corrupti ratione saepe recusandae aperiam hic ipsa
        tempora ipsum repellat esse nihil eveniet, molestiae suscipit ex
        adipisci asperiores cum officiis voluptate numquam quibusdam quam
        nesciunt at dolore? Officiis facere unde odit. Cumque, et!
      </section>
    </div>
  );
};

// export const Specialization = () => {
//   const [turn1, setTurn1] = useState<boolean>(false);
//   const [turn2, setTurn2] = useState<boolean>(false);
//   const [turn3, setTurn3] = useState<boolean>(false);
//   const [turn4, setTurn4] = useState<boolean>(false);

//   const spinInterval = (duration: number, setTurn: Function) =>
//     setInterval(() => setTurn((state: boolean) => !state), duration);
//   useEffect(() => {
//     const interval1 = spinInterval(8000, setTurn1);
//     const interval2 = spinInterval(5000, setTurn2);
//     const interval3 = spinInterval(7000, setTurn3);
//     const interval4 = spinInterval(4000, setTurn4);
//     return () => {
//       clearInterval(interval1);
//       clearInterval(interval2);
//       clearInterval(interval3);
//       clearInterval(interval4);
//     };
//   }, []);
//   return (
//     <div className={style.container}>
//       <ul className={style.specialization}>
//         <li className={style.scene}>
//           <CSSTransition in={turn1} timeout={1000} classNames={style}>
//             <div className={style.card}>
//               <div className={style.card__face} data-cursor-active>
//                 front
//               </div>
//               <div className={style.card__face_back} data-cursor-active>
//                 back
//               </div>
//             </div>
//           </CSSTransition>
//         </li>
//         <li className={style.scene}>
//           <CSSTransition in={turn2} timeout={1000} classNames={style}>
//             <div className={style.card}>
//               <div className={style.card__face} data-cursor-active>
//                 front
//               </div>
//               <div className={style.card__face_back} data-cursor-active>
//                 back
//               </div>
//             </div>
//           </CSSTransition>
//         </li>
//         <li className={style.scene}>
//           <CSSTransition in={turn3} timeout={1000} classNames={style}>
//             <div className={style.card}>
//               <div className={style.card__face} data-cursor-active>
//                 front
//               </div>
//               <div className={style.card__face_back} data-cursor-active>
//                 back
//               </div>
//             </div>
//           </CSSTransition>
//         </li>
//         <li className={style.scene}>
//           <CSSTransition in={turn4} timeout={1000} classNames={style}>
//             <div className={style.card}>
//               <div className={style.card__face} data-cursor-active>
//                 front
//               </div>
//               <div className={style.card__face_back} data-cursor-active>
//                 back
//               </div>
//             </div>
//           </CSSTransition>
//         </li>
//       </ul>
//       <div className={style.logo_modify}>
//         <Logo
//         // width="200" height="200"
//         />
//       </div>
//     </div>
//   );
// };
