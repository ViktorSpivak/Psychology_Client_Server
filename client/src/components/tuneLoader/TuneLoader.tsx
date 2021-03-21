import React, { useEffect } from "react";
import DotLoader from "react-spinners/DotLoader";
import { useAppDispatch } from "../../redux/hooks";
import { AppDispatch } from "../../redux/reduxOld/store";
import {
  activeSendButton,
  noActiveSendButton,
} from "../../redux/slices/sendButtonSlice";
import style from "./tuneLoader.module.css";

export const TuneLoader = ({ overlay }: { overlay?: boolean }) => {
  const dispatch: AppDispatch = useAppDispatch();
  useEffect(() => {
    overlay && dispatch(noActiveSendButton());
    return () => {
      overlay && dispatch(activeSendButton());
    };
  });
  return (
    <div className={overlay ? style.container : undefined}>
      {overlay && <div className={style.overlay}></div>}
      <DotLoader color={"#eb7f21"} />
    </div>
  );
};
