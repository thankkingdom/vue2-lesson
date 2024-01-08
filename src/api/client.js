import axios from "axios";

export default axios.create({
  // Viteの環境変数参照方法
  // https://blog.okaryo.io/20220319-env-variables-for-vite
  //baseURL: process.env.VUE_APP_API_URL,
  baseURL: import.meta.env.VUE_APP_API_URL,
});
