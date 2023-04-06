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
    background-color: #fff;
    height: 100%;
    padding: 0 25px;
    .layout {
      height: 100%;
    }
  }

  .ant-layout-footer {
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    a:first-child {
      width: 45px;
      height: 45px;
      img {
        width: 100%;
      }
    }
  }
`;
