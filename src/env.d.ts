/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MOCK_SERVER_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
