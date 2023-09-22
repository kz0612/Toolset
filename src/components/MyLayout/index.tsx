import { GithubOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import React from "react";
import MyMenu from "../MyMenu";
import StyledLayout from "./style";

const { Content, Header, Sider } = Layout;
export default function MyLayout({
  children,
}: {
  children: React.ReactNode | null;
}) {
  return (
    <StyledLayout>
      <Header className="my-header">
        <div className="logo">Toolset</div>
        <a href="https://github.com/kz0612/Toolset" target="_blank">
          <GithubOutlined />
        </a>
      </Header>
      <Content className="my-content">
        <Layout className="content-layout">
          <Sider width={200} style={{ background: "#fff" }}>
            <MyMenu />
          </Sider>
          <Content className="main-content">
            <div style={{ width: "100%", height: 24 }} />
            <div style={{ flexGrow: 1 }}>{children}</div>
            <Layout.Footer style={{ textAlign: "center" }}>
              <a href="https://www.jetbrains.com/?from=Toolset" target="_blank">
                <img
                  src="/jb_square.svg"
                  alt="JetBrains Black Box Logo logo."
                />
              </a>
              <span>
                Special thanks to{" "}
                <a
                  href="https://www.jetbrains.com/?from=Toolset"
                  target="_blank"
                >
                  JetBrains
                </a>{" "}
                for licensing{" "}
                <a href="https://www.jetbrains.com/webstorm/" target="_blank">
                  WebStorm
                </a>{" "}
                and other IDEs for free for open source projects.
              </span>
            </Layout.Footer>
            <div style={{marginBottom: 10, textAlign: "center" }}>
              <a href="https://www.rainyun.com/MTE4MDI2_">
                <span>本站由雨云提供计算服务</span>
              </a>
            </div>
          </Content>
        </Layout>
      </Content>
    </StyledLayout>
  );
}
