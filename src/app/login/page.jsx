"use client";

import * as yup from "yup";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";


const basicSchema = yup.object().shape({
  login: yup.string().required("Обязательное поле"),
  password: yup.string().required("Обязательное поле"),
});

const onSubmit = async (values, actions) => {

  try {
    const response = await fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: values.login,
        password: values.password,
      }),
    });

    if(!response.ok){
      const errorData = await response.json();
      console.error('Ошибка авторизации:', errorData.message);
      return;
    }

    const userData = await response.json();

    localStorage.setItem('token', userData.token);
    
    window.location.href = '/';
  } catch (error) {
    console.error('Ошибка:', error);
  }
};

const Login = () => {
  const {
    values,
    handleChange,
    isSubmitting,
    handleBlur,
    errors,
    touched,
    handleSubmit,
  } = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center">
      <div className="p-4 w-[420px]">
        <div className="text-center">
          <Image
            className="mx-auto w-auto"
            src="/main-logo.svg"
            width={70}
            height={70}
            alt="logo"
          />
          <span className="text-[25px]">
            HOSTER<span className="font-bold text-red-500">dev</span>
          </span>
          <h2 className="mt-2 mb-2 text-center text-2xl font-bold tracking-tight text-gray-white">
            Войдите в аккаунт
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          {errors.login && touched.login && (
            <p className="font-bold text-rose-500 text-center text-[14px]">
              {errors.login}
            </p>
          )}
          <input
            value={values.login}
            onChange={handleChange}
            type="text"
            id="login"
            placeholder="Логин"
            className={
              errors.login && touched.login
                ? "border-red-500 focus:outline-none border-2 border-rose bg-black p-2 rounded-full"
                : "mt-[21px] focus:outline-none border-2 border-white bg-black p-2 rounded-full"
            }
            onBlur={handleBlur}
          />

          {errors.password && touched.password && (
            <p className="font-bold text-rose-500 text-center text-[14px]">
              {errors.password}
            </p>
          )}
          <input
            value={values.password}
            onChange={handleChange}
            type="password"
            id="password"
            placeholder="Введите пароль"
            className={
              errors.password && touched.password
                ? "border-red-500 focus:outline-none border-2 border-rose bg-black p-2 rounded-full"
                : "mt-[21px] focus:outline-none border-2 border-white bg-black p-2 rounded-full"
            }
            onBlur={handleBlur}
          />

          <button
            disabled={isSubmitting}
            type="submit"
            className="bg-[#2378be] mt-[21px] p-2 font-bold hover:opacity-90 rounded-lg"
          >
            Войти
          </button>
          <Link
            href="/"
            className="bg-orange-600 mt-[10px] p-2 font-bold hover:opacity-90 rounded-lg text-center"
          >
            На главную
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
