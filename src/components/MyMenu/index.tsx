import { Menu } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Routes from "../../Routes";

export default function MyMenu() {
  let location = useLocation();

  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const items = useMemo(() => {
    return Routes.map((item) => ({
      label: <Link to={item.path}>{item.name}</Link>,
      key: item.path,
      title: item.name,
    }));
  }, []);

  useEffect(() => {
    setSelectedKeys([location.pathname]);
  }, [location]);

  return <Menu mode="inline" selectedKeys={selectedKeys} items={items} />;
}
