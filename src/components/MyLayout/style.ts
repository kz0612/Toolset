import styled from "styled-components";
import { Layout } from "antd";

export default styled(Layout)`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      color: #fff;
    }
    a {
      display: flex;
      align-content: center;
    }
    .anticon-github {
      color: #fff;
      font-size: 32px;
    }
  }

  .content {
    padding: 0 50px;
    height: 100%;
    .layout {
      height: 100%;
    }
  }

  .ant-layout-footer {
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
