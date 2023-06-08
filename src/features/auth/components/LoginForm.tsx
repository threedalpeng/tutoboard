import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useLogin } from "../hooks/useLogIn";
import { type LoginFormType } from "../model/login";

export default function LoginForm() {
  const [loginFormData, setLoginFormData] = useState<LoginFormType>({
    email: "",
    password: "",
  });

  const { login } = useLogin();
  const onLoginSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    login(loginFormData);
  };
  const onLoginValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  return (
    <form
      className="card bg-slate-100 p-12 text-neutral flex flex-col gap-8"
      onSubmit={onLoginSubmit}
    >
      <div className="grid grid-cols-[8rem_1fr] gap-y-4">
        <label className="w-8 self-center font-semibold">Email</label>
        <input
          type="text"
          placeholder="abc@example.com"
          value={loginFormData.email}
          className="input input-bordered"
          name="email"
          onChange={onLoginValueChange}
        ></input>
        <label className="w-8 self-center font-semibold">Password</label>
        <input
          type="password"
          placeholder="At least 8 characters"
          value={loginFormData.password}
          className="input input-bordered"
          name="password"
          onChange={onLoginValueChange}
        ></input>
      </div>
      <div className="flex flex-row justify-end gap-4">
        <button className="btn btn-neutral" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}
