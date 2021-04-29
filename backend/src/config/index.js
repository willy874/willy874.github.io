export default {
  port: import.meta.env.VITE_PORT,
  root: import.meta.env.VITE_ROOT,
  dev: import.meta.env.DEV,
  prod: import.meta.env.PROD,
  mode: import.meta.env.MODE,
  ssr: import.meta.env.SSR,
  version: '0.0.1',
  api: {
    port: import.meta.env.VITE_API_PORT,
    baseUrl: `${import.meta.env.VITE_BASE_URL}:${
      import.meta.env.VITE_API_PORT
    }/api/`,
  },
  layout: {
    asideWidth: 240,
    deviceSwitch: 768,
  },
}
