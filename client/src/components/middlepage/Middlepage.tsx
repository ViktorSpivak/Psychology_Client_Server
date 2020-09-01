import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
// import { TransitionGroup } from "react-transition-group";

import style from "./middlepage.module.css";
import Wave from "../wave/Wave";
import { Cursor } from "../cursor/Cursor";

export const MiddlePage: FunctionComponent<any> = ({ post }) => {
  // const [state, setState] = useState(false);
  // const daleyPage = () => {
  //   setTimeout(() => setState(true), 1000);
  // };
  // const daleyLeafOver = 500;
  const matchMystory = useRouteMatch("/myStory");
  const matchContacts = useRouteMatch("/contacts");
  const matchSpecialization = useRouteMatch("/specialization");
  const matchHowItWorks = useRouteMatch("/howItWorks");
  const matchWatch = useRouteMatch("/watch");
  // console.log(document.body.clientHeight);
  // , document.body.clientWidth);
  // console.log(post);
  return (
    <>
      <div>
        {/* <TransitionGroup appear={true} className={style.container}> */}
        <div className={style.wrapper}>
          <Wave canvasHeight={1000} />
        </div>
        <div className={style.container}>
          {/* <CSSTransition timeout={daleyLeafOver} classNames={style}> */}

          {matchMystory ? (
            <div className={style.openLink}></div>
          ) : (
            <Link to="/mystory" className={style.link}>
              <span className={style.linkText}>Обо мне</span>
            </Link>
          )}
          {/* </CSSTransition> */}
          {/* <CSSTransition timeout={daleyLeafOver} classNames={style}> */}
          {matchSpecialization ? (
            <div className={style.openLink}></div>
          ) : (
            <Link to="/specialization" className={style.link}>
              <span className={style.linkText}>
                Ситуации, когда ко мне обращаются
              </span>
            </Link>
          )}
          {/* </CSSTransition> */}
          {/* <CSSTransition timeout={daleyLeafOver} classNames={style}> */}
          {matchHowItWorks ? (
            <div className={style.openLink}></div>
          ) : (
            <Link to="/howItWorks" className={style.link}>
              <span className={style.linkText}>Как это работает</span>
            </Link>
          )}
          {/* </CSSTransition> */}
          {/* <CSSTransition timeout={daleyLeafOver} classNames={style}> */}
          {matchContacts ? (
            <div className={style.openLink}></div>
          ) : (
            <Link to="/contacts" className={style.link}>
              <span className={style.linkText}>Как со мной связаться</span>
            </Link>
          )}
          {/* </CSSTransition> */}
          {/* <CSSTransition timeout={daleyLeafOver} classNames={style}> */}
          {matchWatch ? (
            <div className={style.openLink}>{/* <Watch /> */}</div>
          ) : (
            <Link to="/watch" className={style.link}>
              <span className={style.linkText}>Посмотреть и почитать</span>
            </Link>
          )}
          {/* </CSSTransition> */}
        </div>
        {/* </TransitionGroup> */}
        {post}
      </div>
    </>
  );
};
