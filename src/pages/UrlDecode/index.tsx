import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import useTitle from "../../hooks/useTitle";

export default function UrlDecode() {
  useTitle("UrlDecode");

  const [form] = Form.useForm();

  const onDecode = () => {
    const input: string = form.getFieldValue("input");
    if (input) {
      const eachLine: boolean = form.getFieldValue("eachLine");
      if (eachLine) {
        form.setFieldValue(
          "output",
          input
            .split("\n")
            .map((item) => decodeURIComponent(item))
            .join("\n"),
        );
      } else {
        form.setFieldValue("output", decodeURIComponent(input));
      }
    } else {
      form.setFieldValue("output", undefined);
    }
  };

  return (
    <>
      <div>UrlDecode</div>
      <p>输入您的数据，然后按下解码按钮</p>
      <Form form={form}>
        <Form.Item name="input">
          <Input.TextArea placeholder="在此次输入（或粘贴）......" rows={10} />
        </Form.Item>
        <Form.Item name="eachLine" valuePropName="checked">
          <Checkbox>分别对每一行进行解码</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={onDecode}>
            <RightOutlined />
            <span>解码</span>
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
