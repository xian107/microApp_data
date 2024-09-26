import { Column } from "@ant-design/plots";
import React, { useEffect } from "react";
function App() {
  useEffect(() => {
    function dataListener(data) {
      console.log("接收主应用数据", data);
      if (data.path) {
        //history.push(data.path);
        console.log("主应用路由变化了，我也要跟着变", data.path);
      }
      if (data.type === "auth") {
        console.log("授权码有更新了，可以使用了", data.payload);
      }
      if (data.type === "account") {
        console.log("我拿到登陆账号详情啦！", data.payload);
      }
    }
    window?.microApp?.addDataListener(dataListener, true);
    return () => {
      window?.microApp?.removeDataListener(dataListener);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">子应用</header>
    </div>
  );
}

export default App;
