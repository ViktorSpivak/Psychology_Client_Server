import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { selectIsActiveSendButton } from "../../redux/selectors";
import style from "./SendButton.module.css";

export const SendButton = () => {
  const isActive = useAppSelector(selectIsActiveSendButton);
  // const [show, setShow] = useState(false);

  // useEffect(() => {
  //   const interval = setTimeout(() => {
  //     setShow(true);
  //   }, 700);
  //   return clearInterval(interval);
  // }, []);
  // console.log(show);

  return (
    <>
      {/* {matchHome || ( */}
      {isActive && (
        <Link to="/programList" className={style.outerContainer}>
          {/* <CSSTransition
        in={homepage}
        timeout={{ enter: 2000, exit: 2000 }}
        classNames={style}
        unmountOnExit
      > */}
          <div className={style.container}>
            <div className={style.circle}></div>
            <div className={style.textWrapper} data-cursor-active>
              <p className={style.text}>записаться</p>
            </div>
            {/* <Massage /> */}
          </div>
          {/* </CSSTransition> */}
        </Link>
      )}
    </>
  );
};
