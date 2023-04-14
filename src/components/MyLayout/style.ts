import styled from "styled-components";
import { Layout } from "antd";

export default styled(Layout)`
  display: flex;
  .my-header {
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

  .my-content {
    background-color: #fff;
    padding: 0 25px;
    flex: 1;

    .content-layout {
      height: 100%;

      .main-content {
        padding: 0 24px 0 24px;
        margin: 0;
        height: 100%;
        background: #fff;
        display: flex;
        flex-direction: column;
      }

      .ant-layout-footer {
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;

        a:first-child {
          width: 45px;
          height: 45px;
          img {
            width: 100%;
          }
        }
      }
    }
  }
`;
