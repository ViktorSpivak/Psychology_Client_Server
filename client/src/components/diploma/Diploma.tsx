import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IDiploma } from "../../../../common/interfaces";
import { diplomaThunk } from "../../redux/slices/diplomaSlice";
import { RootState } from "../../redux/rootReducer";
import { AppDispatch } from "../../redux/store";
import style from "./diploma.module.css";

export const Diploma = () => {
  const { diplomaList, error } = useSelector(
    (state: RootState) => state.diplomas
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const promise = dispatch(diplomaThunk({ page: 1 }));
    return () => {
      promise.abort();
    };
  }, [dispatch]);
  error && console.log('Компонент "Diploma" не отрисован ', error.message);

  return (
    <>
      {diplomaList && (
        <div>
          <h2 className={style.topic}>дипломы</h2>
          <ul className={style.diplomas}>
            {diplomaList.map((el: IDiploma, idx: number) => (
              <li key={idx} className={style.diploma}>
                {el.photo}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
