import React from "react";
import { Layout, theme } from "antd";
import MyMenu from "../MyMenu";
import StyledLayout from "./style";
import { GithubOutlined } from "@ant-design/icons";

const { Content, Header, Sider } = Layout;
export default function MyLayout({
  children,
}: {
  children: React.ReactNode | null;
}) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <StyledLayout>
      <Header className="header">
        <div className="logo">Toolset</div>
        <a href="https://github.com/kz0612/Toolset" target='_blank'>
          <GithubOutlined />
        </a>
      </Header>
      <Content className="content">
        <Layout className="layout">
          <Sider width={200} style={{ background: colorBgContainer }}>
            <MyMenu />
          </Sider>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Content>
    </StyledLayout>
  );
}
