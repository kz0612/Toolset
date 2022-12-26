import { Button, Form, Input, Radio } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function QrCode() {
  const [form] = Form.useForm();
  const [value, setValue] = useState<string>();
  const [size, setSize] = useState(128);

  const onGenerate = () => {
    const input: string = form.getFieldValue("input");
    setValue(input);
    const size: number = form.getFieldValue("size");
    setSize(size);
  };

  return (
    <>
      <div>QrCode</div>
      <p>输入您的数据，然后按下生成按钮</p>
      <Form form={form}>
        <Form.Item name="input">
          <Input.TextArea placeholder="在此次输入（或粘贴）......" rows={5} />
        </Form.Item>
        <Form.Item name="size" initialValue={128} label="二维码大小">
          <Radio.Group>
            <Radio value={128}>128</Radio>
            <Radio value={256}>256</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={onGenerate}>
            <RightOutlined />
            <span>生成</span>
            <LeftOutlined />
          </Button>
        </Form.Item>
        {value && (
          <Form.Item>
            {/* 等待 qrcode.react 版本更新，以便添加 svg 下载功能 */}
            <QRCodeSVG value={value} size={size} level="H" />
          </Form.Item>
        )}
      </Form>
    </>
  );
}
