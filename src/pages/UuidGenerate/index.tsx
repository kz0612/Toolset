import { Button, Form, Input, Radio } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { v1, v4 } from "uuid";
import StyledDiv from "./style";

export default function UuidGenerate() {
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
          <Radio.Group>
            <Radio value="v1">Version 1</Radio>
            <Radio value="v4">Version 4</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="strCase" initialValue="lower" label="大小写">
          <Radio.Group>
            <Radio value="lower">小写输出</Radio>
            <Radio value="upper">大写输出</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="count" initialValue="1" label="生成个数">
          <Radio.Group>
            <Radio value="1">1</Radio>
            <Radio value="2">2</Radio>
            <Radio value="3">3</Radio>
            <Radio value="4">4</Radio>
            <Radio value="5">5</Radio>
            <Radio value="6">6</Radio>
            <Radio value="7">7</Radio>
            <Radio value="8">8</Radio>
            <Radio value="9">9</Radio>
            <Radio value="10">10</Radio>
          </Radio.Group>
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
