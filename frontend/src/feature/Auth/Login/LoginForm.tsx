import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginAPI } from "./api";
import type { IUserdataAuth } from "../../../shared/types/types";
import { pswSchema, usernameSchema } from "../schema";
import { Button } from "../../../shared/UI/Button";
import "../styles.scss";
import { useState } from "react";

export default function LoginForm() {
  const n = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserdataAuth>({ mode: "onChange" });

  const submit = (data: IUserdataAuth) => {
    setIsLoading(true);
    LoginAPI(data, n, setIsLoading);
  };

  const handleReg = () => {
    n("/register");
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="form fn">
      <h2>Вход</h2>

      <div>
        <input
          placeholder="Введите имя пользователя"
          className="Input tr2"
          {...register("username", usernameSchema)}
        />

        {errors.username?.message && (
          <p className="validate-text">{errors.username.message}</p>
        )}
      </div>

      <div>
        <input
          placeholder="Введите пароль.."
          className="Input tr"
          {...register("password", pswSchema)}
        />

        {errors.password?.message && (
          <p className="validate-text">{errors.password.message}</p>
        )}
      </div>

      <Button
        isLoading={isLoading}
        type="submit"
        className="btn"
        label="вход"
      />

      <p>или</p>

      <Button
        label="Регистрация"
        bg="bgNone"
        className=" toPageReg"
        onClick={handleReg}
      />
    </form>
  );
}
