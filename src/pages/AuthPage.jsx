import React, { useState } from "react";
import { useHttp } from "../hooks/http.hooks";

export const AuthPage = () => {
  const { loading, error, request } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request("/auth/registration", "POST", { ...form });
      console.log("data", data);
    } catch (e) {}
  };

  return (
    <div className="flex">
      <div className="flex"></div>
      <h1>Каталог</h1>
      <div className="col s12 m6">
        <div className="card grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Авторизация</span>
            <div>
              <div className="input-field">
                <input
                  placeholder=" "
                  id="email"
                  type="text"
                  name="email"
                  onChange={changeHandler}
                />
                <label htmlFor="email">Введите Email</label>
              </div>

              <div className="input-field">
                <input
                  placeholder=" "
                  id="password"
                  type="password"
                  name="password"
                  onChange={changeHandler}
                />
                <label htmlFor="password">Введите пароль</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button
              className="btn yellow darken-4"
              style={{ marginRight: 10 }}
              disabled={loading}
            >
              Войти
            </button>
            <button
              className="btn red darken-4"
              onClick={registerHandler}
              disabled={loading}
            >
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
