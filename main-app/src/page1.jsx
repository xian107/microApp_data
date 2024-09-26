import React, { useCallback, useEffect,memo } from "react";
import microApp from "@micro-zoe/micro-app";

function Page1() {
  const onSetDate = useCallback((data) => {
    microApp.setData("sub-app", data);
  }, []);
  useEffect(() => {
    // 异步返回
    setTimeout(() => {
      onSetDate({
        type: "auth",
        payload: "授权码",
      });
    }, 100);
  }, []);
  return (
    <div>
      page1
      <button
        onClick={() =>
          onSetDate({
            type: "auth",
            payload: "授权码" + Date.now(),
          })
        }
      >
        更新授权码
      </button>
    </div>
  );
}
export default memo(Page1);
