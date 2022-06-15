import { observer } from "mobx-react-lite";
import { FC, useContext, useState } from "react";
import { Context } from "..";
import { AuthPage } from "../pages/AuthPage";

const LoginForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { store } = useContext(Context);

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
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  placeholder="Email"
                />
              </div>

              <div className="input-field">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="card-action">
              <button
                className="btn yellow darken-4"
                style={{ marginRight: 10 }}
                onClick={() => store.login(email, password)}
              >
                Вход
              </button>
              <AuthPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(LoginForm);
