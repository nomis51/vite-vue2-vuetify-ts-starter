/* eslint-disable spaced-comment */
/// <reference types="vite/client" />
/// <reference types="vuetify" />

// Vue
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

// Vuetify
declare module 'vuetify/lib/framework' {
  import Vuetify from 'vuetify';
  export default Vuetify;
}

interface ImportMetaEnv {
  // see https://vitejs.dev/guide/env-and-mode.html#env-files
  // add .env variables.
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_WEBSTORAGE_NAMESPACE: string;
}

// eslint-disable-next-line no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
