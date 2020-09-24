import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Axios from "axios";
import * as Yup from "yup";
// import { Logo } from "../../svgcomponents/Logo";
import { Logo } from "../logo/Logo";
import style from "./askme.module.css";
import { IFormValues } from "../../../../common/interfaces";
import { Link } from "react-router-dom";

export const AskMe: React.FC = () => {
  const [accept, setAccept] = useState<boolean>(false);
  const phoneRegExp = /^[0-9]+$/;
  const initialValues: IFormValues = {
    name: "",
    phone: "",
    email: "",
    text: "",
  };
  return (
    <div className={style.container}>
      <main>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(30, "Must be 30 characters or less")
              .required("Required"),
            phone: Yup.string()
              .matches(phoneRegExp, "только цифры")
              .min(10, "мин 10 символов ")
              .max(10, "макс 10 символов")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            text: Yup.string()
              .max(200, "Must be 200 characters or less")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            Axios({
              method: "post",
              url: "https://psychology-server.herokuapp.com/request",
              data: values,
            })
              .then((res) =>
                console.log("Response from server:", res.config.data)
              )
              .catch((err) => console.log(err));
          }}
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
              <div className={style.acceptCheckBox} data-cursor-active>
                <input
                  type="radio"
                  checked={accept}
                  onClick={() => setAccept(!accept)}
                  readOnly
                  className={style.acceptInput}
                ></input>
                <p
                  className={accept ? style.acceptTextActive : style.acceptText}
                  // data-cursor-active
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
        <Logo />
      </footer>
    </div>
  );
};
