import { useMutation } from "@tanstack/react-query";
import api from "../../../api";
import { LoginFormType } from "../model/login";
import { useAuthAction } from "./useAuth";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const { authenticate } = useAuthAction();
  const navigate = useNavigate();
  const { mutate } = useMutation(api.users.login, {
    onSuccess: async (data) => {
      authenticate(data);
      navigate("/");
    },
  });
  const login = (loginFormData: LoginFormType) => {
    mutate(loginFormData);
  };
  return {
    login,
  };
};
