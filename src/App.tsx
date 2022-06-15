import { FC, useContext, useEffect, useState } from "react";
import "materialize-css";
import LoginForm from "./components/LoginForm";
import { Context } from ".";
import { observer } from "mobx-react-lite";
import { IUser } from "./models/response/IUser";
import UserService from "./services/UserService";

const App: FC = () => {
  const { store } = useContext(Context);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, [store]);

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  if (store.isLoading) {
    return <div>загрузка...</div>;
  }

  if (!store.isAuth) {
    return <LoginForm />;
  }

  return (
    <div>
      <h1>{store.isAuth ? `Пользователь авторизован  ` : " АВТОРИЗУЙТЕСЬ "}</h1>
      <button className="btn red darken-4" onClick={() => store.logout()}>
        Выход
      </button>
      <div>
        <button onClick={getUsers} className="btn green darken-1">
          Список пользователей
        </button>
      </div>
      {users.map((users) => (
        <div key={users.email}>{users.email}</div>
      ))}
    </div>
  );
};

export default observer(App);
