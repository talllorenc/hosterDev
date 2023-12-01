"use client";

import * as yup from "yup";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
const loginRules = /^[A-Za-z0-9]+$/;
const nameRules = /^[А-Яа-я\s]+$/;

const basicSchema = yup.object().shape({
  login: yup
    .string()
    .min(6, "Логин должен быть длиннее 6 символов")
    .matches(loginRules, { message: "Только латинские символы" })
    .required("Обязательное поле"),
  name: yup
    .string()
    .matches(nameRules, { message: "Только кириллические символы" })
    .required("Обязательное поле"),
  position: yup.string().required("Обязательное поле"),
  password: yup
    .string()
    .min(6, "Пароль должен быть длиннее 6 символов")
    .matches(passwordRules, {
      message: "Требуется заглавная буква и спец символ",
    })
    .required("Обязательное поле"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Пароли не совпадают")
    .required("Обязательное поле"),
});

const onSubmit = async (values, actions) => {
  try {
    const response = await fetch('http://localhost:8080/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login: values.login,
        name: values.name,
        position: values.position,
        password: values.password,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Ошибка регистрации:', errorData.message);
      return;
    }

    const userData = await response.json();

    localStorage.setItem('token', userData.token);
    localStorage.setItem('user', JSON.stringify(userData));

    window.location.href = '/';
  } catch (error) {
    console.error('Ошибка:', error);
  }
};

const Registration = () => {
  const { values, handleChange, touched, handleBlur, handleSubmit, errors } =
    useFormik({
      initialValues: {
        login: "",
        name: "",
        position: "",
        password: "",
        confirmPassword: "",
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
            Зарегестрируйте аккаунт
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
                : "focus:outline-none border-2 border-white bg-black p-2 rounded-full mt-[21px]"
            }
            onBlur={handleBlur}
          />

          {errors.name && touched.name && (
            <p className="font-bold text-rose-500 text-center text-[14px]">
              {errors.name}
            </p>
          )}
          <input
            value={values.name}
            onChange={handleChange}
            type="text"
            id="name"
            placeholder="Ваше имя и фамилия"
            className={
              errors.name && touched.name
                ? "border-red-500 focus:outline-none border-2 border-rose bg-black p-2 rounded-full"
                : "focus:outline-none border-2 border-white bg-black p-2 rounded-full mt-[21px]"
            }
            onBlur={handleBlur}
          />

          {errors.position && touched.position && (
            <p className="font-bold text-rose-500 text-center text-[14px]">
              {errors.position}
            </p>
          )}
          <select
            value={values.position}
            onChange={handleChange}
            id="position"
            className={
              errors.position && touched.position
                ? "border-red-500 focus:outline-none border-2 border-rose bg-black p-2 rounded-full"
                : "focus:outline-none border-2 border-white bg-black p-2 rounded-full mt-[21px]"
            }
          >
            <option>Выберите должность</option>
            <option>Разработчик</option>
            <option>Дизайнер</option>
            <option>Тестировщик</option>
            <option>Веб-мастер</option>
            <option>Контент менеджер</option>
            <option>SEO специалист</option>
          </select>

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

          {errors.confirmPassword && touched.confirmPassword && (
            <p className="font-bold text-rose-500 text-center text-[14px]">
              {errors.confirmPassword}
            </p>
          )}
          <input
            value={values.confirmPassword}
            onChange={handleChange}
            type="password"
            id="confirmPassword"
            placeholder="Повторите пароль"
            className={
              errors.confirmPassword && touched.confirmPassword
                ? "border-red-500 focus:outline-none border-2 border-rose bg-black p-2 rounded-full"
                : "mt-[21px] focus:outline-none border-2 border-white bg-black p-2 rounded-full"
            }
            onBlur={handleBlur}
          />
          <button
            type="submit"
            className="bg-[#2378be] mt-[21px] p-2 font-bold hover:opacity-90 rounded-lg"
          >
            Зарегестрироваться
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

export default Registration;
