import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import {
  Alert,
  Button,
  DatePicker,
  Divider,
  Form,
  InputNumber,
  Select,
  Space,
} from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import StyledDiv from "./style";
import useTitle from "../../hooks/useTitle";

interface MyInputGroupValue {
  op?: string;
  val?: number;
  unit?: string;
}

interface MyInputGroupProps {
  value?: MyInputGroupValue;
  onChange?: (value: MyInputGroupValue) => void;
}

function MyInputGroup({ value = {}, onChange }: MyInputGroupProps) {
  const [op, setOp] = useState<string>("after");
  const [val, setVal] = useState<number>(0);
  const [unit, setUnit] = useState<string>("day");

  useEffect(() => {
    onChange?.({ op, val, unit });
  }, []);

  const triggerChange = (changedValue: {
    op?: string;
    val?: number;
    unit?: string;
  }) => {
    onChange?.({ op, val, unit, ...changedValue });
  };

  const onAChange = (op: string) => {
    setOp(op);
    triggerChange({ op });
  };

  const onBChange = (val: number | null) => {
    if (val === null) {
      val = 0;
    }
    setVal(val);
    triggerChange({ val });
  };

  const onCChange = (unit: string) => {
    setUnit(unit);
    triggerChange({ unit });
  };

  return (
    <Space.Compact>
      <Select onChange={onAChange} value={value.op || op}>
        <Select.Option value="before">往前</Select.Option>
        <Select.Option value="after">往后</Select.Option>
      </Select>
      <InputNumber onChange={onBChange} value={value.val || val} />
      <Select onChange={onCChange} value={value?.unit || unit}>
        <Select.Option value="day">天</Select.Option>
        <Select.Option value="week">周</Select.Option>
        <Select.Option value="month">月</Select.Option>
        <Select.Option value="year">年</Select.Option>
      </Select>
    </Space.Compact>
  );
}

export default function DatetimeCalculate() {
  useTitle("DatetimeCalculate");

  const [form] = Form.useForm();
  const [diff, setDiff] = useState<number | undefined>();
  const [newDate, setNewDate] = useState<string | undefined>();

  const onDiffCalculate = () => {
    const val1 = form.getFieldValue("date1");
    const val2 = form.getFieldValue("date2");
    if (val1 && val2) {
      const date1 = dayjs(val1.valueOf());
      const date2 = dayjs(val2.valueOf());
      setDiff(date2.diff(date1, "day"));
    } else {
      setDiff(undefined);
    }
  };

  const onCalculate = () => {
    const val3 = form.getFieldValue("date3");
    const groupData = form.getFieldValue("groupData");
    const { op, val, unit } = groupData;

    if (val3 && op && val !== undefined && unit) {
      const flag = op === "before" ? -1 : 1;
      setNewDate(
        dayjs(val3.valueOf())
          .add(flag * val, unit)
          .format("YYYY-MM-DD dddd")
      );
    } else {
      setNewDate(undefined);
    }
  };

  return (
    <StyledDiv>
      <div>DatetimeCalculate</div>
      <Divider orientation="left">计算日期差</Divider>

      <Form form={form}>
        <Form.Item name="date1">
          <DatePicker />
        </Form.Item>
        <Form.Item name="date2">
          <DatePicker />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={onDiffCalculate}>
            <RightOutlined />
            <span>相差计算</span>
            <LeftOutlined />
          </Button>
        </Form.Item>
        {diff !== undefined && (
          <Form.Item>
            <Alert message={`相差 ${diff} 天`} type="info" />
          </Form.Item>
        )}
      </Form>

      <Divider orientation="left">推算日期</Divider>
      <Form form={form}>
        <Form.Item name="date3">
          <DatePicker />
        </Form.Item>
        <Form.Item name="groupData">
          <MyInputGroup />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={onCalculate}>
            <RightOutlined />
            <span>日期推算</span>
            <LeftOutlined />
          </Button>
        </Form.Item>
        {newDate !== undefined && (
          <Form.Item>
            <Alert message={newDate} type="info" />
          </Form.Item>
        )}
      </Form>
    </StyledDiv>
  );
}
