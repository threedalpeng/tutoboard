import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import { ZodError, ZodIssue } from "zod";

export default function RegisterForm() {
  const [registerFormData, setRegisterFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [issues, setIssues] = useState<ZodIssue[]>([]);

  const navigate = useNavigate();
  const { register } = useRegister({
    onSuccess: () => {
      navigate(0);
    },
  });
  const onRegisterSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    try {
      register(registerFormData);
    } catch (e) {
      if (e instanceof ZodError) {
        setIssues(e.issues);
      }
    }
  };
  const onRegisterValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setRegisterFormData({
      ...registerFormData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={onRegisterSubmit}>
      <h3 className="font-bold text-lg">Please tell me your information!</h3>
      <div className="grid grid-cols-[8rem_1fr] gap-y-4">
        <label className="w-8 self-center font-semibold">Username</label>
        <input
          type="text"
          placeholder="name"
          value={registerFormData.username}
          className="input input-bordered"
          name="username"
          onChange={onRegisterValueChange}
        ></input>
        <label className="w-8 self-center font-semibold">Email</label>
        <input
          type="text"
          placeholder="abc@example.com"
          value={registerFormData.email}
          className="input input-bordered"
          name="email"
          onChange={onRegisterValueChange}
        ></input>
        <label className="w-8 self-center font-semibold">Password</label>
        <input
          type="password"
          placeholder="At least 8 characters"
          value={registerFormData.password}
          className="input input-bordered"
          name="password"
          onChange={onRegisterValueChange}
        ></input>
      </div>
      <div className="flex flex-row justify-end gap-2">
        <div className="text-error text-sm">
          {issues.map((issue) => (
            <span className="block">{issue.message}</span>
          ))}
        </div>
        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </div>
    </form>
  );
}
