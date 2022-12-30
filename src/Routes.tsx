import {
  Base64Decode,
  Base64Encode,
  QrCode,
  UrlDecode,
  UrlEncode,
  UuidGenerate,
} from "./pages";
import React from "react";
import { MyLayout } from "./components";

export default [
  {
    path: "/pages/base-64-decode",
    name: "Base64Decode",
    element: (
      <MyLayout>
        <Base64Decode />
      </MyLayout>
    ),
  },
  {
    path: "/pages/base-64-encode",
    name: "Base64Encode",
    element: (
      <MyLayout>
        <Base64Encode />
      </MyLayout>
    ),
  },
  {
    path: "/pages/qr-code",
    name: "QrCode",
    element: (
      <MyLayout>
        <QrCode />
      </MyLayout>
    ),
  },
  {
    path: "/pages/url-decode",
    name: "UrlDecode",
    element: (
      <MyLayout>
        <UrlDecode />
      </MyLayout>
    ),
  },
  {
    path: "/pages/url-encode",
    name: "UrlEncode",
    element: (
      <MyLayout>
        <UrlEncode />
      </MyLayout>
    ),
  },
  {
    path: "/pages/uuid-generate",
    name: "UuidGenerate",
    element: (
      <MyLayout>
        <UuidGenerate />
      </MyLayout>
    ),
  },
];
