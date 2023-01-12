import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";

dayjs.locale("zh-cn");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
);
