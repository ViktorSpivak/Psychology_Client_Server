import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { Logo } from "../../svgcomponents/Logo";
import { Logo } from "../logo/Logo";
import style from "./signUpForm.module.css";
import { IUserMessage } from "../../../../common/interfaces";
import { Link, match, useParams, useRouteMatch } from "react-router-dom";
import {
  setUserMassage,
  userMessageThunk,
} from "../../redux/slices/userMessageSlice";
import { ModalWindow } from "../modalWindow/ModalWindow";
import { TuneLoader } from "../tuneLoader/TuneLoader";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { activeModalWindow } from "../../redux/slices/modalWindowSlice";
import { selectUserMessage } from "../../redux/selectors";

// interface IProp {
//   question?: boolean;
//   program?: boolean;
//   consultation?: boolean;
// }
export const SignUpForm = () => {
  const [accept, setAccept] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { isLoading, error, response } = useAppSelector(selectUserMessage);
  const param = useParams();
  console.log(param);

  useEffect(() => {
    if (response || error) {
      dispatch(activeModalWindow());
    }
  }, [response, error]); // eslint-disable-line

  const matchRoute: match<{}> | null = useRouteMatch([
    "/programList",
    "/programs",
  ]);
  console.log(matchRoute);

  // const matchRoute: match<{}> | null = useRouteMatch("/programs");

  // const text: string|null = error
  //   ? "Что-то пошло не так, попробуйте ещё раз позже:( "
  //   : {userData.name};
  // useEffect(() => {
  //   const promise = dispatch(userMessageThunk({ page: 1 }));
  //   return () => {
  //     promise.abort();
  //   };
  // }, [dispatch]);

  const phoneRegExp = /^[0-9]+$/;
  const initialValues: IUserMessage = {
    name: "",
    phone: "",
    email: "",
    text: "",
  };
  const handleSubmit = (
    values: IUserMessage,
    {
      setSubmitting,
    }: {
      setSubmitting: any;
    }
  ): void => {
    setSubmitting(false);
    dispatch(setUserMassage(values));
    dispatch(userMessageThunk());
  };
  const validationMessage = Yup.object({
    name: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("Required"),
    phone: Yup.string()
      .matches(phoneRegExp, "только цифры")
      .min(10, "мин 10 символов ")
      .max(10, "макс 10 символов")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    text: Yup.string()
      .max(200, "Must be 200 characters or less")
      .required("Required"),
  });

  return (
    <>
      <div
        className={matchRoute ? style.containerSingupFormat : style.container}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationMessage}
          onSubmit={handleSubmit}
        >
          <Form className={style.form}>
            <Field
              name="name"
              type="text"
              className={style.input}
              placeholder="Имя"
            />
            <ErrorMessage
              name="name"
              component="div"
              className={style.errorStyle}
            />
            <div className={style.line}></div>
            <Field
              name="phone"
              type="text"
              className={style.input}
              placeholder="Телефон"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className={style.errorStyle}
            />
            <div className={style.line}></div>
            <Field
              name="email"
              type="text"
              className={style.input}
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className={style.errorStyle}
            />

            <div className={style.line}></div>
            <Field
              name="text"
              type="text"
              className={style.input}
              placeholder="Текст"
            />
            <ErrorMessage
              name="text"
              component="div"
              className={style.errorStyle}
            />
            <div className={style.line}></div>
            <div className={style.acceptBlock}>
              <div className={style.acceptCheckBox}>
                <input
                  type="radio"
                  checked={accept}
                  onClick={() => setAccept(!accept)}
                  readOnly
                  className={style.acceptInput}
                  data-cursor-active
                ></input>
                <p
                  className={accept ? style.acceptTextActive : style.acceptText}
                  data-cursor-active
                >
                  <Link
                    to="/"
                    // target="blank"
                    // rel="noopener noreferrer"
                    className={style.acceptLink}
                  >
                    I accept the terms as laid out in the privacy policy
                  </Link>
                </p>
              </div>
              <button
                type="submit"
                className={accept ? style.submitBtnActive : style.submitBtn}
                data-cursor-active
              >
                Подтверждаю<span>&#10230;</span>
              </button>
            </div>
          </Form>
        </Formik>
        <footer className={style.footer}>{!matchRoute && <Logo />}</footer>
      </div>
      {isLoading && <TuneLoader overlay />}
      <ModalWindow />
    </>
  );
};
