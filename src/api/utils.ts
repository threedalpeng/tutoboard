const FETCH_PREFIX = "/api";

const fetcher = {
  get: <T>(url: string, options?: Omit<RequestInit, "method">): Promise<T> =>
    fetch(`${FETCH_PREFIX}${url}`, {
      method: "GET",
      headers: { "Content-Type": "application/json", ...options?.headers },
      ...options,
    }).then((res) => res.json()),
  post: <T, D = unknown>(
    url: string,
    data: D,
    options?: Omit<RequestInit, "method" | "body">
  ): Promise<T> =>
    fetch(`${FETCH_PREFIX}${url}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...options?.headers },
      body: JSON.stringify(data),
      ...options,
    }).then((res) => res.json()),
  put: <T, D = unknown>(
    url: string,
    data: D,
    options?: Omit<RequestInit, "method" | "body">
  ): Promise<T> =>
    fetch(`${FETCH_PREFIX}${url}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", ...options?.headers },
      body: JSON.stringify(data),
      ...options,
    }).then((res) => res.json()),
  patch: <T, D = unknown>(
    url: string,
    data: D,
    options?: Omit<RequestInit, "method" | "body">
  ): Promise<T> =>
    fetch(`${FETCH_PREFIX}${url}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...options?.headers },
      body: JSON.stringify(data),
      ...options,
    }).then((res) => res.json()),
  delete: <T, D = unknown>(
    url: string,
    data: D,
    options?: Omit<RequestInit, "method" | "body">
  ): Promise<T> =>
    fetch(`${FETCH_PREFIX}${url}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", ...options?.headers },
      body: JSON.stringify(data),
      ...options,
    }).then((res) => res.json()),
};

export default fetcher;
