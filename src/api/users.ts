import fetcher from "./utils";

interface User {
  email: string;
  id: number;
  username: string;
}
type UserWithAuth = {
  accessToken: string;
  user: User;
};

interface UserLoginRequest {
  email: string;
  password: string;
}
type UserLoginResponse = UserWithAuth;
export const login = (data: UserLoginRequest) =>
  fetcher.post<UserLoginResponse>("/login", data);

type UserCreateRequest = Omit<User, "id">;
type UserCreateResponse = User;
export const create = (data: UserCreateRequest) =>
  fetcher.post<UserCreateResponse>("/users", data);

type UserGetResponse = User;
export const get = (id: string) => fetcher.get<UserGetResponse>(`/users/${id}`);

export const getAll = () => fetcher.get<User[]>("/users");
