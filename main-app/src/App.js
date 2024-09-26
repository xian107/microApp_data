import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
function App() {
  return (
    <div className="App">
      <header className="App-header">头部</header>
      <Page1 />
      <Page2 />
      <Page3 />

      <micro-app name="sub-app" url="http://localhost:3000/"></micro-app>
    </div>
  );
}

export default App;
