import React, { FC, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { Logo } from "../../svgcomponents/Logo";
import { Logo } from "../logo/Logo";
import style from "./askme.module.css";
import { IUserMessage } from "../../../../common/interfaces";
import { Link, match, useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { AppDispatch } from "../../redux/store";
import { userMessageThunk } from "../../redux/slices/userMessageSlice";
import { ModalWindow } from "../modalWindow/ModalWindow";
import { TuneLoader } from "../tuneLoader/TuneLoader";

export const AskMe: FC = () => {
  const [accept, setAccept] = useState<boolean>(false);

  const matchSignupProgram: match<{}> | null = useRouteMatch("/signupProgram");

  const { userData, isLoading, error } = useSelector(
    (state: RootState) => state.userMessage
  );
  const dispatch: AppDispatch = useDispatch();
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
    dispatch(userMessageThunk(values));
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
        className={
          matchSignupProgram ? style.containerSingupFormat : style.container
        }
      >
        <main>
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
                    className={
                      accept ? style.acceptTextActive : style.acceptText
                    }
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
        </main>
        <footer className={style.footer}>
          {!matchSignupProgram && <Logo />}
        </footer>
      </div>
      {isLoading && <TuneLoader overlay />}
      {userData && <ModalWindow props={userData} />}
      {error && <ModalWindow props={error} />}
    </>
  );
};
