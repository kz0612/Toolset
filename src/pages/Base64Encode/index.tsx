import { Button, Checkbox, Form, Input } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { encode } from "js-base64";

export default function Base64Encode() {
  const [form] = Form.useForm();
  const onEncode = () => {
    const input: string = form.getFieldValue("input");
    if (input) {
      const eachLine: boolean = form.getFieldValue("eachLine");
      const urlSafe: boolean = form.getFieldValue("urlSafe");
      if (eachLine) {
        form.setFieldValue(
          "output",
          input
            .split("\n")
            .map((item) => encode(item, urlSafe))
            .join("\n")
        );
      } else {
        form.setFieldValue("output", encode(input, urlSafe));
      }
    } else {
      form.setFieldValue("output", undefined);
    }
  };

  return (
    <>
      <div>Base64Encode</div>
      <p>输入您的数据，然后按下编码按钮</p>
      <Form form={form}>
        <Form.Item name="input">
          <Input.TextArea placeholder="在此次输入（或粘贴）......" rows={10} />
        </Form.Item>
        <Form.Item name="eachLine" valuePropName="checked">
          <Checkbox>分别对每一行进行解码</Checkbox>
        </Form.Item>
        <Form.Item name="urlSafe" valuePropName="checked">
          <Checkbox>进行 URL 安全编码</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={onEncode}>
            <RightOutlined />
            <span>编码</span>
            <LeftOutlined />
          </Button>
        </Form.Item>
        <Form.Item name="output">
          <Input.TextArea placeholder="结果在这里......" rows={10} />
        </Form.Item>
      </Form>
    </>
  );
}
