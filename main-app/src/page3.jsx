import React, { useCallback, useEffect } from "react";
import microApp from "@micro-zoe/micro-app";

export default function Page3() {
  const onSetDate = useCallback((data) => {
    microApp.setData("sub-app", data);
  }, []);
  useEffect(() => {
    // 异步返回
    setTimeout(() => {
      onSetDate({
        path: "/page/new/list",
        payload: "新闻列表",
      });
    }, 1000);
  }, []);
  return (
    <div style={{ marginTop: 30 }}>
      新闻页
      <button
        onClick={() =>
          onSetDate({
            path: "/page/new/detail",
            payload: "新闻详情",
          })
        }
      >
        进入详情页
      </button>
    </div>
  );
}
