import { create } from "zustand";
import { ZustandState } from "../../../utils/zustand";
import { User } from "../../users/model/user";

interface AuthState {
  accessToken: string | null;
  user: User | null;
}
interface AuthAction {
  authenticate: (loginResponse: { accessToken: string; user: User }) => void;
  clear: () => void;
}

const useAuth = create<ZustandState<AuthState, AuthAction>>((set) => ({
  accessToken: null,
  user: null,
  action: {
    authenticate: ({ accessToken, user }) => {
      set({ accessToken, user });
    },
    clear: () => {
      set({ accessToken: null, user: null });
    },
  },
}));

export const useAccessToken = () => useAuth((state) => state.accessToken);
export const useUser = () => useAuth((state) => state.user);
export const useIsAuthenticated = () =>
  useAuth((state) => state.accessToken !== null);
export const useAuthAction = () => useAuth((state) => state.action);
