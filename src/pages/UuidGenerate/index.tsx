import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Form, Input, Radio } from "antd";
import { v1, v4 } from "uuid";
import useTitle from "../../hooks/useTitle";
import StyledDiv from "./style";

export default function UuidGenerate() {
  useTitle("UuidGenerate");

  const [form] = Form.useForm();

  const onGenerate = () => {
    const version: string = form.getFieldValue("version");
    const strCase: string = form.getFieldValue("strCase");
    const count: number = form.getFieldValue("count");

    const uuids: string[] = [];

    for (let i = 0; i < count; i++) {
      let uuid = "";
      switch (version) {
        case "v1":
          uuid = v1();
          break;
        case "v4":
          uuid = v4();
          break;
      }
      if (strCase === "upper") {
        uuid = uuid.toUpperCase();
      } else if (strCase === "lower") {
        uuid = uuid.toLowerCase();
      }
      uuids.push(uuid);
    }

    form.setFieldValue("output", uuids.join("\n"));
  };

  return (
    <StyledDiv>
      <div>UuidGenerate</div>
      <p>按下生成按钮生成 UUID</p>
      <Form form={form}>
        <Form.Item name="version" initialValue="v4" label="版本">
          <Radio.Group
            options={[
              { label: "Version 1", value: "v1" },
              { label: "Version 4", value: "v4" },
            ]}
          />
        </Form.Item>
        <Form.Item name="strCase" initialValue="lower" label="大小写">
          <Radio.Group
            options={[
              { label: "小写输出", value: "lower" },
              { label: "大写输出", value: "upper" },
            ]}
          />
        </Form.Item>
        <Form.Item name="count" initialValue={1} label="生成个数">
          <Radio.Group
            options={[...Array(10)].map((_, i) => ({
              label: i + 1 + "",
              value: i + 1,
            }))}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={onGenerate}>
            <RightOutlined />
            <span>生成</span>
            <LeftOutlined />
          </Button>
        </Form.Item>
        <Form.Item name="output">
          <Input.TextArea placeholder="结果在这里......" rows={10} />
        </Form.Item>
      </Form>
    </StyledDiv>
  );
}
