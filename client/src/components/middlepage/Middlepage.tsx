import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
// import { TransitionGroup } from "react-transition-group";

import style from "./middlepage.module.css";

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
    <div>
      {/* <TransitionGroup appear={true} className={style.container}> */}
      <div className={style.container}>
        {/* <CSSTransition timeout={daleyLeafOver} classNames={style}> */}
        {matchMystory ? (
          <div className={style.componentWrapper}></div>
        ) : (
          <Link to="/mystory" className={style.link}>
            <span className={style.linkText}>Обо мне</span>
          </Link>
        )}
        {/* </CSSTransition> */}
        {/* <CSSTransition timeout={daleyLeafOver} classNames={style}> */}
        {matchSpecialization ? (
          <div className={style.componentWrapper}></div>
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
          <div className={style.componentWrapper}></div>
        ) : (
          <Link to="/howItWorks" className={style.link}>
            <span className={style.linkText}>Как это работает</span>
          </Link>
        )}
        {/* </CSSTransition> */}
        {/* <CSSTransition timeout={daleyLeafOver} classNames={style}> */}
        {matchContacts ? (
          <div className={style.componentWrapper}></div>
        ) : (
          <Link to="/contacts" className={style.link}>
            <span className={style.linkText}>Как со мной связаться</span>
          </Link>
        )}
        {/* </CSSTransition> */}
        {/* <CSSTransition timeout={daleyLeafOver} classNames={style}> */}
        {matchWatch ? (
          <div className={style.componentWrapper}></div>
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
  );
};
// export const MiddlePage = () => {
//   const [state, setstate] = useState(false);
//   const [myStory, setMyStory] = useState(false);
//   const [contacts, setContacts] = useState(false);
//   const [useful, setUseful] = useState(false);
//   const [forwhom, setForwhom] = useState(false);
//   const [watch, setWatch] = useState(false);

//   const matchMystory = useRouteMatch("/mystory");
//   const matchContacts = useRouteMatch("/contacts");
//   const matchUseful = useRouteMatch("/useful");
//   const matchForwhom = useRouteMatch("/forwhom");
//   const matchWatch = useRouteMatch("/watch");

//   useEffect(() => {
//     matchMystory && setMyStory(true);
//     matchMystory || setMyStory(false);
//   }, [matchMystory]);
//   useEffect(() => {
//     matchUseful && setUseful(true);
//     matchUseful || setUseful(false);
//   }, [matchUseful]);
//   useEffect(() => {
//     matchContacts && setContacts(true);
//     matchContacts || setContacts(false);
//   }, [matchContacts]);
//   useEffect(() => {
//     matchForwhom && setForwhom(true);
//     matchForwhom || setForwhom(false);
//   }, [matchForwhom]);
//   useEffect(() => {
//     matchWatch && setWatch(true);
//     matchWatch || setWatch(false);
//   }, [matchWatch]);

//   return (
//     <div className={style.linksContainer}>
//       <CSSTransition
//         in={myStory}
//         timeout={3000}
//         classNames={style}
//         unmountOnExit
//       >
//         <div>
//           <Contacts></Contacts>
//         </div>
//       </CSSTransition>
//       {!myStory && (
//         <Link to="/mystory" className={style.linksItem}>
//           Обо мне
//         </Link>
//       )}

//       <CSSTransition
//         in={useful}
//         timeout={3000}
//         classNames={style}
//         unmountOnExit
//       >
//         <div>
//           {" "}
//           <Contacts></Contacts>
//         </div>
//       </CSSTransition>
//       {!useful && (
//         <Link to="/useful" className={style.linksItem}>
//           Ситуации, когда ко мне обращаются
//         </Link>
//       )}

//       <CSSTransition
//         in={forwhom}
//         timeout={3000}
//         classNames={style}
//         unmountOnExit
//       >
//         <div>
//           {" "}
//           <Contacts></Contacts>
//         </div>
//       </CSSTransition>
//       {!forwhom && (
//         <Link to="/forwhom" className={style.linksItem}>
//           Как это работает
//         </Link>
//       )}

//       <CSSTransition
//         in={contacts}
//         timeout={3000}
//         classNames={style}
//         unmountOnExit
//       >
//         <div>
//           {" "}
//           <Contacts></Contacts>
//         </div>
//       </CSSTransition>
//       {!contacts && (
//         <Link to="/contacts" className={style.linksItem}>
//           Как со мной связаться
//         </Link>
//       )}

//       <CSSTransition in={watch} timeout={3000} classNames={style} unmountOnExit>
//         <div>
//           {" "}
//           <Contacts></Contacts>
//         </div>
//       </CSSTransition>
//       {!watch && (
//         <Link to="/watch" className={style.linksItem}>
//           Посмотреть и почитать
//         </Link>
//       )}
//     </div>
//   );
// };
