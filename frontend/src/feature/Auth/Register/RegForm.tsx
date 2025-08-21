import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { IUserdataAuth } from "../../../shared/types/types";
import { RegisterAPI } from "./api";
import { displayNameSchema, pswSchema, usernameSchema } from "../schema";
import { Button } from "../../../shared/UI/Button";
import "../styles.scss";

export default function RegisterForm() {
  const n = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserdataAuth>({ mode: "onChange" });

  const submit = (data: IUserdataAuth) => {
    RegisterAPI(data, n);
  };

  const handleLogin = () => {
    n("/login");
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="form fn">
      <h2>Регистрация</h2>

      <div>
        <input
          placeholder="имя для отображение"
          className="Input"
          {...register("displayName", displayNameSchema)}
        />

        {errors.displayName?.message && (
          <p className="validate-text">{errors.displayName.message}</p>
        )}
      </div>

      <div>
        <input
          placeholder="имя пользователя"
          className="Input"
          {...register("username", usernameSchema)}
        />

        {errors.username?.message && (
          <p className="validate-text">{errors.username.message}</p>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="пароль"
          className="Input"
          {...register("password", pswSchema)}
        />

        {errors.password?.message && (
          <p className="validate-text">{errors.password.message}</p>
        )}
      </div>

      <Button type="submit" label="регистрация" className="btn" />

      <p>или</p>

      <Button
        label="Вход"
        bg="bgNone"
        className="toPageLog"
        onClick={handleLogin}
      />
    </form>
  );
}
