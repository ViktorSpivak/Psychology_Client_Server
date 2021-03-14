import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { unwrapResult } from "@reduxjs/toolkit";
// import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";

// import * as Yup from "yup";
// import { signupRequest } from "../../redux/sessionThunks";
// import { Logo } from "../../svgcomponents/Logo";
// import { Loader } from "../../components/loader/Loader";
// import style from "./SignupForm.module.css";
// import { ISignInData } from "../../../../common/interfaces";
// import { RootState, AppDispatch } from "../../redux/store";

// export const SignupForm = () => {
//   // const [accept, setAccept] = useState(false);
//   const { isLoading } = useSelector((state: RootState) => state);
//   const dispatch: AppDispatch = useDispatch();
//   const schema = () =>
//     Yup.object({
//       name: Yup.string()
//         .max(30, "Must be 30 characters or less")
//         .required("Required"),
//       password: Yup.string().required("Required"),
//       email: Yup.string().email("Invalid email address").required("Required"),
//     });
//   // console.log(user);
//   const submit = async (
//     values: ISignInData,
//     { setSubmitting }: FormikHelpers<ISignInData>
//   ) => {
//     setSubmitting(false);
//     try {
//       const resultAction = await dispatch(signupRequest(values));
//       // console.log(resultAction);
//       const users = unwrapResult(resultAction);
//       console.log("success", `Fetched ${users.token}`);
//     } catch (err) {
//       console.log("error", `Fetch failed: ${err.message}`);
//     }

//     //  await api.loginRequest(values);
//   };
//   return (
//     <div className={style.container}>
//       <main>
//         {isLoading ? (
//           <Loader />
//         ) : (
//           <Formik
//             initialValues={{ name: "", password: "", email: "" }}
//             validationSchema={schema}
//             onSubmit={submit}
//           >
//             <Form className={style.form}>
//               <div className={style.line}></div>{" "}
//               <Field
//                 name="name"
//                 type="text"
//                 className={style.input}
//                 placeholder="Логин"
//               />
//               <ErrorMessage
//                 name="name"
//                 component="div"
//                 className={style.errorStyle}
//               />
//               <div className={style.line}></div>
//               <Field
//                 name="password"
//                 type="password"
//                 className={style.input}
//                 placeholder="Пароль"
//               />
//               <ErrorMessage
//                 name="password"
//                 component="div"
//                 className={style.errorStyle}
//               />
//               <div className={style.line}></div>
//               <Field
//                 name="email"
//                 type="text"
//                 className={style.input}
//                 placeholder="Email"
//               />
//               <ErrorMessage
//                 name="email"
//                 component="div"
//                 className={style.errorStyle}
//               />
//               <div className={style.line}></div>
//               <button type="submit">Sign up</button>
//               {/* <button type="button" onClick={api.logoutRequest}>
//                 Logout
//               </button> */}
//             </Form>
//           </Formik>
//         )}
//       </main>
//       <footer className={style.footer}>
//         <Logo />
//       </footer>
//     </div>
//   );
// };
