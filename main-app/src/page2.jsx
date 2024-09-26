import React, { useCallback, useEffect,memo } from "react";
import microApp from "@micro-zoe/micro-app";

function Page2() {
  const onSetDate = useCallback((data) => {
    microApp.setData("sub-app", data);
  }, []);
  useEffect(() => {
    // 异步返回
    setTimeout(() => {
      onSetDate({
        type: "account",
        payload: "登陆账号详情",
      });
    }, 100);
  }, []);
  return (
    <div style={{ marginTop: 30 }}>
      page2
      <button
        onClick={() =>
          onSetDate({
            type: "account",
            payload: "登陆账号详情" + Date.now(),
          })
        }
      >
        手动刷新登陆账号详情
      </button>
    </div>
  );
}
export default memo(Page2);
