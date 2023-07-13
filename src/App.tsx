import React, { useMemo } from "react";
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import Routes from "./Routes";

export default function App() {
  const router = useMemo(() => {
    const arr = Routes.map((item) => ({
      path: item.path,
      element: item.element,
    }));

    arr.push({
      path: "",
      element: <Navigate to={Routes[0].path} />,
    });

    return createHashRouter(arr);
  }, []);

  return <RouterProvider router={router} />;
}
