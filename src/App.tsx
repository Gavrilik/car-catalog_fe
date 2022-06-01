import { FC } from "react";
import "materialize-css";
import LoginForm from "./components/LoginForm";
import RegistredForm from "./components/RegistredForm";

const App: FC = () => {
  return (
    <div>
      <LoginForm />
      <RegistredForm />
    </div>
  );
};

export default App;
