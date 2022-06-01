import { FC, useContext, useState } from "react";
import { Context } from "..";

const RegistredForm: FC = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rolesId, setRole] = useState<string>("1");
  const { store } = useContext(Context);

  return (
    <div>
      <div className="flex"></div>
      <div className="col s12 m6">
        <div className="card grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Регистрация</span>

            <div className="input-field">
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Name"
              />
            </div>

            <div className="input-field">
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                type="string"
                placeholder="Phone number"
              />
            </div>

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
                placeholder="password"
              />
            </div>

            <div className="input-field">
              <input
                onChange={(e) => setRole(e.target.value)}
                value={rolesId}
                type="string"
                readOnly
                hidden
                placeholder="roles"
              />
            </div>

            <button
              className="btn red darken-4"
              onClick={() =>
                store.registration(email, password, phone, name, rolesId)
              }
            >
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistredForm;
