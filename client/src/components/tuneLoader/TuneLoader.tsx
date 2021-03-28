import React, { useEffect } from "react";
import DotLoader from "react-spinners/DotLoader";
import { useAppDispatch } from "../../redux/hooks";
import { activeLoader, noActiveLoader } from "../../redux/slices/loaderSlice";
import {
  activeSendButton,
  noActiveSendButton,
} from "../../redux/slices/sendButtonSlice";
import style from "./tuneLoader.module.css";

interface IProps {
  overlay?: boolean;
}
export const TuneLoader = ({ overlay }: IProps) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    overlay && dispatch(noActiveSendButton());
    dispatch(activeLoader());
    return () => {
      overlay && dispatch(activeSendButton());
      dispatch(noActiveLoader());
    };
  }, []); // eslint-disable-line
  return (
    <div className={overlay ? style.container : undefined}>
      {overlay && <div className={style.overlay}></div>}
      <DotLoader color={"#eb7f21"} />
    </div>
  );
};
