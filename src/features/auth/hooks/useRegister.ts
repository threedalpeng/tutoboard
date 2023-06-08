import { useMutation } from "@tanstack/react-query";
import api from "../../../api";
import { RegisterFormType, registerFormScheme } from "../model/register";

export const useRegister = ({ onSuccess }: { onSuccess: () => void }) => {
  const { mutate } = useMutation(api.users.create, {
    onSuccess: async () => {
      onSuccess();
    },
  });
  const register = (registerFormData: RegisterFormType) => {
    mutate(registerFormScheme.parse(registerFormData));
  };
  return {
    register,
  };
};
