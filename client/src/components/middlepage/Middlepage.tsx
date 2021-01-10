import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
// import { TransitionGroup } from "react-transition-group";

import style from "./middlepage.module.css";
import { Wave } from "../wave/Wave";

export const MiddlePage: FunctionComponent<any> = ({ post }) => {
  // const [linkHovered, setLinkHovered] = useState<boolean>(false);

  // const [state, setState] = useState(false);
  // const daleyPage = () => {
  //   setTimeout(() => setState(true), 1000);
  // };
  // const daleyLeafOver = 500;
  const matchMystory = useRouteMatch("/myStory");
  const matchContacts = useRouteMatch("/contacts");
  const matchSpecialization = useRouteMatch("/specialization");
  const matchWorkStages = useRouteMatch("/workStages");
  const matchWatch = useRouteMatch("/watch");

  return (
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
          <Link to="/mystory" className={style.link} data-cursor-active>
            <span className={style.linkText}>Обо мне</span>
          </Link>
        )}
        {/* </CSSTransition> */}
        {/* <CSSTransition timeout={daleyLeafOver} classNames={style}> */}
        {matchSpecialization ? (
          <div className={style.openLink}></div>
        ) : (
          <Link to="/specialization" className={style.link} data-cursor-active>
            <span className={style.linkText}>
              Программы
            </span>
          </Link>
        )}
        {/* </CSSTransition> */}
        {/* <CSSTransition timeout={daleyLeafOver} classNames={style}> */}
        {matchWorkStages ? (
          <div className={style.openLink}></div>
        ) : (
          <Link to="/workStages" className={style.link} data-cursor-active>
            <span className={style.linkText}>Форматы работы</span>
          </Link>
        )}
        {/* </CSSTransition> */}
        {/* <CSSTransition timeout={daleyLeafOver} classNames={style}> */}
        {matchContacts ? (
          <div className={style.openLink}></div>
        ) : (
          <Link to="/contacts" className={style.link} data-cursor-active>
            <span className={style.linkText}>Спросить</span>
          </Link>
        )}
        {/* </CSSTransition> */}
        {/* <CSSTransition timeout={daleyLeafOver} classNames={style}> */}
        {matchWatch ? (
          <div className={style.openLink}>{/* <Watch /> */}</div>
        ) : (
          <Link to="/watch" className={style.link} data-cursor-active>
            <span className={style.linkText}>Интересное</span>
          </Link>
        )}
        {/* </CSSTransition> */}
      </div>
      {/* </TransitionGroup> */}
      {post}
    </div>
  );
};
