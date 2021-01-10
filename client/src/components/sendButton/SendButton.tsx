import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Massage } from "../../svgcomponents/massage";
import style from "./SendButton.module.css";

export const SendButton: FunctionComponent = () => {
  // const [show, setShow] = useState(true);
  // const matchHome = useRouteMatch("/");
  // console.log(homepage);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setShow(!show);
  //     return clearInterval(interval);
  //   }, 1000);
  // }, []);
  return (
    <>
      {/* {matchHome || ( */}
      <Link to="/askMe" className={style.outerContainer}>
        {/* <CSSTransition
        in={homepage}
        timeout={{ enter: 2000, exit: 2000 }}
        classNames={style}
        unmountOnExit
      > */}
        <div className={style.container}>
          <div className={style.circle}></div>
          <div className={style.textWrapper} data-cursor-active>
            <p className={style.text}>бесплатная консультация</p>
          </div>
          {/* <Massage /> */}
        </div>
        {/* </CSSTransition> */}
      </Link>
      {/* )} */}
      {/* )} */}
    </>
  );
};
